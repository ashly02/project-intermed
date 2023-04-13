import { collection,  getDocs } from "firebase/firestore";
import { useContext, createContext,useState } from "react";
import { db } from "../firebase.js";

const userContext = createContext({
  fetchDetails: () => Function,
  fetchVideoUrl: () => Function,
  data:null,
  Videodata:null,
});

export const useUser = () => useContext(userContext);

export default function UserContextProvider({ children }) {

const data=[]
const Videodata=[]
 

 async function fetchDetails(collectionRef) {
    const docSnap=await getDocs(collection(db,"users"))
    docSnap.forEach(doc => {
        data.push(doc.data().displayName)
    })
  }

 async function fetchVideoUrl(collectionRef) {
    const docSnap=await getDocs(collection(db,"articles"))
    docSnap.forEach(doc => {
        Videodata.push(doc.data().actor.video)
    })
  }

  const value = { fetchDetails,data,fetchVideoUrl,Videodata };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
