import { IonReactRouter } from '@ionic/react-router'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { NavLink, Redirect, Route } from 'react-router-dom'
import { NavigationRoute } from 'workbox-routing'
import { toast } from './toast'




const config = {
    apiKey: "AIzaSyD5uM28dRBGxdh5uZPFibJQ4W91ByZtZ1w",
    authDomain: "mush101-b9a73.firebaseapp.com",
    databaseURL: "https://mush101-b9a73-default-rtdb.firebaseio.com",
    projectId: "mush101-b9a73",
    storageBucket: "mush101-b9a73.appspot.com",
    messagingSenderId: "62429510285",
    appId: "1:62429510285:web:0cb21f5ed75395396700c4"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string){
    const email = `${username}@ness.com`
    
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res)
    //    firebase.database().ref()
        return true
    }catch(error){
        toast(error.message, 4000) 
        return false
    }
}

export async function registerUser(username: string, password: string){
    const email = `${username}@ness.com`
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log(res)
        return true
    } catch (error) {
        toast(error.message, 4000)
        return false
    }
}