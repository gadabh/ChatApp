


import { initializeApp } from "firebase/app";


import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import {getStorage} from  'firebase/storage';
import { getFirestore} from 'firebase/firestore/lite';





const firebaseConfig = {
  apiKey: "AIzaSyCFefcp1xpYO0houczQnJgXLapCBA_LzCY",
  authDomain: "chatapp-mp2l.firebaseapp.com",
  projectId: "chatapp-mp2l",
  storageBucket: "chatapp-mp2l.appspot.com",
  messagingSenderId: "509506895258",
  appId: "1:509506895258:web:a2da82facb35ade00f4e23",
  measurementId: "G-Z2H84H2CHE"
};



export const auth = firebase.initializeApp(firebaseConfig).auth()

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);

