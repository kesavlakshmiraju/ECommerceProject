import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyCdwFBINjlXXJrZWppP3CI5eh2xjDeZm_w",
  authDomain: "crown-clothing-23098.firebaseapp.com",
  projectId: "crown-clothing-23098",
  storageBucket: "crown-clothing-23098.appspot.com",
  messagingSenderId: "569129590658",
  appId: "1:569129590658:web:0bf6ddd17723cf01df399b",
  measurementId: "G-EG0VHTDZQQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    //const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        //createdAt,
        ...additionalData
      })
    }
    catch (error) {
      alert(error.message)
      console.log('error while storing users data', error.message)
    }
  }
  return userRef;
}

/* 
      this code is used to store products data into firebase
export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    }) 
    return await batch.commit();
  } 
*/

export const collectionSnapShot = (collections) => {
  const trasformedCollections = collections.docs.map(doc => {
    const { title , items } = doc.data()

    return {
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    }
  })
  console.log(trasformedCollections);
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

