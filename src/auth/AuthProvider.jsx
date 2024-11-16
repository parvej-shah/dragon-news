import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useContext, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const createUser = (/** @type {string} */ email,/** @type {string} */ passowrd)=>{
      return createUserWithEmailAndPassword(auth,email,passowrd)
  }
  const signInUser = (/** @type {string} */ email,/** @type {string} */ passowrd)=>{
      return signInWithEmailAndPassword(auth,email,passowrd);
  }
  const signOutUser = ()=>{
    return signOut(auth);
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(currentUser);
        setLoading(false);
        // ...
      } else {
        // User is signed out
        setUser(null);
        setLoading(true);
        // ...
      }

    return ()=>{
      unSubscribe();
    }
    })
  },[])

  const value = {
      createUser,
      signInUser,
      user,
      loading,
      signOutUser
  }
  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};