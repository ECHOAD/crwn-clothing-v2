// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOBDmGws2N_WrbPsvmq_BLIt6UZfzzw1s",
  authDomain: "crwn-db-4fb4d.firebaseapp.com",
  projectId: "crwn-db-4fb4d",
  storageBucket: "crwn-db-4fb4d.appspot.com",
  messagingSenderId: "889392684431",
  appId: "1:889392684431:web:0653a1e9315f6725ce7ffa",
  measurementId: "G-3YS0158E0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const signInWithNativeEmailAndPasswordHandler = async ({
  email,
  password,
}) => {
  if (!email || !password) return;

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    console.log("Error signing in", error.message);
  }
};

export const db = getFirestore(app);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  objectKeyToBeId
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj[objectKeyToBeId].toLowerCase());
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

const getDocuments = async (collectionKey, ...criteria) => {
  const itemsRef = collection(db, collectionKey);
  const q = criteria.length ? query(itemsRef, where(...criteria)) : itemsRef;

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const getCategoriesAndDocuments = async () => {
  return getDocuments("categories");
};

// TODO: Trying to implement SAGAS with Firebase
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalData = {}
) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);
  let userSnap = await getDoc(userRef)
  console.log(userSnap);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userSnap = await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userSnap;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    console.log("Error creating user", error.message);
  }
};

export const signOutHandler = async () => await signOut(auth);

export const onAuthStateChangedHandler = (callback) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });

  return unsubscribe;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};
