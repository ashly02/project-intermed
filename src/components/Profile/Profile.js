import {connect} from "react-redux";
import Pic from "../../img/photo.svg"
import {useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { auth, storage, db} from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {  doc, updateDoc, onSnapshot  } from "firebase/firestore";
import {  updateProfile } from 'firebase/auth';
import{
  Container,
  ArtCard,
  UserInfo,
  CardBackground,
  Photo,
  Link,
  Widget,
  SharedActor,
  EditModel
} from "./StyleProfile";
import Posts from "./Posts";

const Profile = (props) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef(null);
  const [interests, setInterests] = useState([]);
  const [newInterest, setNewInterest] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showInputField, setShowInputField] = useState(false);
  useEffect(() => {
    if (currentUser && currentUser.uid) {
      const unsubscribe = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        if (doc.exists()) {
          const userInterests = doc.data().interests;
          if (userInterests) {
            setInterests(userInterests);
          }
        }
      });

      return () => unsubscribe();
    }
  }, [currentUser]);
  useEffect(() => {
    if (currentUser && currentUser.uid) {
      setLoading(false);
    }
  }, [currentUser]);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleNewInterestChange = (e) => {
    setNewInterest(e.target.value);
  };

  const addNewInterest = (e) => {
    e.preventDefault(); // Prevent form submission
  
    if (newInterest) {
      const userRef = doc(db, "users", currentUser.uid);
      updateDoc(userRef, {
        interests: {
          ...interests,
          others: [...(interests.others || []), newInterest],
        },
      })
        .then(() => {
          console.log("New interest added successfully.");
          setNewInterest(""); // Resetting the new interest input field
          setShowDropdown(false); // Closing the dropdown menu
          setShowInputField(false); // Hide the input field after adding
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAddInterestClick = () => {
    setShowInputField(true);
  };


  useEffect(() => {
    if (image) {
      const imageRef = ref(storage, `${currentUser.uid}/image`);
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              setUrl(url);
              updateProfile(auth.currentUser, { photoURL: url })
                .then(() => {
                  updateDoc(doc(db, "users", currentUser.uid), { photoURL: url })
                    .then(() => {
                      console.log("User photoURL updated successfully.");
                    })
                    .catch((error) => console.log(error.message));
                })
                .catch((error) => console.log(error.message));
            })
            .catch((error) => {
              console.log(error.message, 'error getting the image url');
            });
          setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [currentUser, image]);

  if (loading) {
    return <div><img src="./images/spin-loader.svg" width="200px" height="200px"/></div>;
  }
  return (
    <>
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
            <Photo img src={url ? url : currentUser.photoURL} alt={Pic} onClick={handleImageClick}
          style={{ cursor: 'pointer' }} />
          <input
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleImageChange}
        /><a>
            <Link>{props.user ? props.user.displayName:"there"}</Link>
          </a>
          <a>
           
          </a>
        </UserInfo>
        <Widget>
        <SharedActor>
            <button onClick={() => toggleDropdown()}>
              <img src="./images/ellipsis.svg" alt="" />
            </button>
            {showDropdown && (
              <EditModel>
                <li onClick={() => handleAddInterestClick()}>
                  <img src="/images/addicon.png" alt="" />
                  <h6>Add new Interest</h6>
                </li>
              </EditModel>
            )}
          </SharedActor>
         
        {interests && (
          <div>
            <div className="interests-container">
              {interests.col1 &&
                interests.col1.map((interest) => (
                  <button key={interest} className="interest-button">
                    {interest}
                  </button>
                ))}
              {interests.col2 &&
                interests.col2.map((interest) => (
                  <button key={interest} className="interest-button">
                    {interest}
                  </button>
                ))}
              {interests.col3 &&
                interests.col3.map((interest) => (
                  <button key={interest} className="interest-button">
                    {interest}
                  </button>
                ))}
                {interests.col4 &&
                interests.col4.map((interest) => (
                  <button key={interest} className="interest-button">
                    {interest}
                  </button>
                ))}
              {interests.others &&
                interests.others.map((interest) => (
                  <button key={interest} className="interest-button">
                    {interest}
                  </button>
                ))}
              {showInputField && (
  <form onSubmit={addNewInterest}>
    <input
      type="text"
      placeholder="Add new interest.."
      className="interest-input"
      value={newInterest}
      onChange={handleNewInterestChange}
    />
    <button type="submit" className="add-interest-button">
      Add
    </button>
  </form>
)}
              {newInterest && (
                <button className="interest-button" onClick={() => addNewInterest()}>
                  {newInterest}
                </button>
              )}
            </div>
          </div>
        )}
        </Widget>
        
      </ArtCard>
      <Posts/>
    </Container>
    
    </>
  );
};



const mapStateToProps=(state)=>{
  return {
    user:state.userState.user,
  }
}


export default connect(mapStateToProps)(Profile);