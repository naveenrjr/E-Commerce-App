import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDq8ZvmqkGZnhqpoKmnhmiuhG4rrITS0Fs",
    authDomain: "clothing-store-19718.firebaseapp.com",
    databaseURL: "https://clothing-store-19718.firebaseio.com",
    projectId: "clothing-store-19718",
    storageBucket: "clothing-store-19718.appspot.com",
    messagingSenderId: "795637026911",
    appId: "1:795637026911:web:3f3cd51a823b7b88578bea",
    measurementId: "G-D37CF03FNP"
  };

  export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            
        } catch (error) {
            console.log("error creating user",error.message);
        }
    }
    return userRef;
    

  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);


  export default firebase;