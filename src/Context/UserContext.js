import { collection,  getDocs } from "firebase/firestore";
import { useContext, createContext,useState } from "react";
import { db } from "../firebase.js";

const userContext = createContext({
  fetchDetails: () => Function,
  data:null,
});

export const useUser = () => useContext(userContext);

export default function UserContextProvider({ children }) {

const data=[]
 

 async function fetchDetails(collectionRef) {
    const docSnap=await getDocs(collection(db,"users"))
    docSnap.forEach(doc => {
        console.log("Clicked");
        data.push(doc.data().displayName)
    })
  }

  const value = { fetchDetails,data };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
