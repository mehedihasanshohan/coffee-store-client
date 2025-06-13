import { createContext, useState } from "react"
 import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/firebase.init'

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const createUser = (email, password) =>{
    setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

  const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

  const userInfo = {
        user,
        loading,
        createUser,
        signInUser
    }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders