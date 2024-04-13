import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth'

import {auth,firestore} from '../firebaseConfig'
import { addDoc, collection, onSnapshot, doc, updateDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore'
let userRef = collection(firestore, 'users')

export const LoginAPI = (email, password) => {

    try {

        let response = signInWithEmailAndPassword(auth, email, password);
        return response

    } catch (error) {
        // alert(error.errors.message)
        return error
    }
}

export const RegisterAPI = (email, password) => {

    try {

        let response = createUserWithEmailAndPassword(auth, email, password);
        return response

    } catch (error) {
        // alert(error.errors.message)
        return error
    }
}

export const GoogleSignInAPI = (email, password) => {

    try {

        let googleProvider = new GoogleAuthProvider()
        let res = signInWithPopup(auth, googleProvider)
        return res;

    } catch (error) {
        // alert(error.errors.message)
        return error
    }
}


export const onLogout = () => {
    try {
        signOut(auth);

    } catch (error) {
        return error
    }
}

export const postUserData = (object) => {
    addDoc(userRef, object)
        .then(() => {

        })
        .catch((err) => {
            console.log(err);
        })
}

export const getCurrentUser = (setCurrentUser) => {

    let currEmail = localStorage.getItem('userEmail')
    onSnapshot(userRef, (response) => {
        setCurrentUser(response.docs.map((docs) => {
            return { ...docs.data(), userID: docs.id }
        }).filter((item) => {
            return item.email === currEmail
        })[0]
        )
    })
}