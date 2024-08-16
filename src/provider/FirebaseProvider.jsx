import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)


// social auth providers
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user
    const createUser = (email, password) => {
            setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // logout
    const logOut = () => {
        setUser(null)
        setLoading(false)
        signOut(auth)
    }


    // observer
    useEffect(() => {
        const auth = getAuth();
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)

            }
        });
        return () => unsubscribe()
    }, [])

    const allValues = {
        user,
        createUser,
        signInUser,
        googleLogin,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;