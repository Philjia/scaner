// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAezxleowIcHEaHnY9RFqX5lyJH2EYmq6g',
  authDomain: 'splendidscaner.firebaseapp.com',
  projectId: 'splendidscaner',
  storageBucket: 'splendidscaner.appspot.com',
  messagingSenderId: '947885552528',
  appId: '1:947885552528:web:be15806bd798566fd43915',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export const colRef = collection(db, 'barcodes');

export const createBarcode = (barcode) => {
  return addDoc(colRef, { barcode: barcode, addedTime: serverTimestamp() });
};

export const getBarcodes = () => {
  return getDocs(colRef);
};
