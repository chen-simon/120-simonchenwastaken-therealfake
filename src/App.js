import React, { useState, useEffect } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

firebase.initializeApp({
  apiKey: "AIzaSyAx6OVILzA4kZruPLdPKACsftePjm9kv8I",
  authDomain: "supershoppingcart301.firebaseapp.com",
  projectId: "supershoppingcart301",
  storageBucket: "supershoppingcart301.appspot.com",
  messagingSenderId: "134796304832",
  appId: "1:134796304832:web:7ff1cdb87f41567385e825",
  measurementId: "G-X4JJJ6CGWX"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        {user ? <SignOut auth={ auth }/> : <SignIn auth={ auth } /> }
      </header>
    </div>
  );
}


export default App;
