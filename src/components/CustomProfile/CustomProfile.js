import "./index.css"
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/AuthContext";

const CustomProfile = () => {
    const [detail, setDetail] = useState([])
    const { slug } = useParams()
    const { fetchPostDetails, postDetails, fetchVideoDetails, videoDetails } = useUser()

    const [posts, setPosts] = useState(null)
    const [videos, setVideos] = useState(null)


    useEffect(() => {
        const fetchUserDetails = async (uid) => {
            try {
                const usersRef = collection(db, "users");
                const q = query(usersRef, where("uid", "==", uid));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    console.log("No user found with the provided uid");
                    return null;
                }

                const userDetails = [];

                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    userDetails.push(userData);
                });
                setDetail(userDetails)
                return userDetails;
            } catch (error) {
                console.log("Error fetching user details:", error);
                return null;
            }
        };
        fetchUserDetails(slug)

    },)


    useEffect(() => {
            fetchPostDetails(detail[0]?.email)
            fetchVideoDetails(detail[0]?.email)
            setPosts(postDetails)
            setVideos(videoDetails)
        return () => {
            postDetails.splice(0, postDetails.length)
            videoDetails.splice(0, videoDetails.length)
        };
    }, [postDetails,videoDetails])

    console.log(postDetails);

    return (
        <div className="main-div">
            <div className="tab-content">
                <img className="image-div" src={detail[0]?.photoURL} alt="" />
                <div className="Link">
                <p className="profile-name">{detail[0]?.displayName}</p>
                <p className="profile-about">{detail[0]?.about}</p>
                </div>
            </div>
            <div className="post-section">
                <div className="post-section-content">
                    <h1>Images</h1>
                    <div className="post-div">
                        {posts && posts.length > 0 ? (
                            posts.map((val) => (
                                <img src={val} alt="" height={"230px"} width={"230px"} />
                            ))
                        ) : (
                            <p>No posts available</p>
                        )}
                    </div>
                    <h1>Videos</h1>
                    <div className="videos-div">
                        {videos && videos.length > 0 ? (
                            videos.map((val) => (
                                <video src={val} height={"230px"} width={"230px"} controls />
                            ))
                        ) : (
                            <p>No videos available</p>
                        )}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default CustomProfile;
