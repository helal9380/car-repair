/** @format */

import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userName) => {
    setloading(true)
    return updateProfile(auth.user, {
        displayName: userName
    })
  }
  const logOut = () => {
    setloading(false)
    return signOut(auth)
  }
  const authInfo = {
    setUser,
    setloading,
    createUser,
    loading,
    user,
    signIn,
    updateUser,
    logOut
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setloading(false)
      if (user) {
        setUser(user);
        console.log('user ace',user);
      }
    });
    return () => {
      unsubscribe;
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
