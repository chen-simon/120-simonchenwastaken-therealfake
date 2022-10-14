import React, { useState, useEffect } from 'react';
import './App.scss';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Header from './components/Header/Header';
import ItemBox from './components/ItemBox/ItemBox';

import itemList from './items.json';

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
  let inventory = [];

  return (
    <div className="App">
      <Header user={ user } auth={ auth }/>
      <div class="mainGrid">
        { itemList.map((item) => <ItemBox item={ item } inventory={ inventory }/>) }
      </div>
    </div>
  );
}


export default App;
