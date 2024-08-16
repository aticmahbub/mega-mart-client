import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)
const FirebaseProvider = ({children}) => {

    //create user
    const createUser = () =>{{
       return createUserWithEmailAndPassword(auth, email, password)
    }}

    const allValues={
        createUser
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;