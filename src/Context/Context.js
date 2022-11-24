import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


import app from '../firebase/firebase'



const auth = getAuth(app)

export const AuthContext = createContext()


const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)


    // 1. createUser
    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // 2. ubdate name 
    const updateName = (profile) => {
        setLoding(true);
        return updateProfile(auth.currentUser, profile)
    }
    // 3. verify email
    const verifyEmail = () => {
        setLoding(true);
        return sendEmailVerification(auth.currentUser)
    }


    // 4. googleSignin
    const googleSignin = (gProvider) => {
        setLoding(true);
        return signInWithPopup(auth, gProvider)
    }

    // 5. logOut
    const logOut = () => {
        setLoding(true);
        return signOut(auth)
    }
    // 6. login 
    const login = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // 7. forget password 
    const forgetPassword = (email) => {
        setLoding(true);
        return sendPasswordResetEmail(auth, email)
    }
    // 7. singIn with github 
    const githubSingIn = (gitProvider) => {
        setLoding(true);
        return signInWithPopup(auth, gitProvider)
    }




    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoding(false);
        })
        return () => unSubscribe()
    }, [])

    const authInfo = { user, loding, createUser, githubSingIn, updateName, verifyEmail, login, googleSignin, logOut, forgetPassword }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default Context
