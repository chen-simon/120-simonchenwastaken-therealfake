import React, { useState, useEffect } from 'react';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import ItemBox from '../ItemBox/ItemBox';
import Footer from '../Footer/Footer';

import itemList from '../../items.json';

function Store(props) {
  
  // Firestore hook to get cart
  const cartRef = props.firestore.collection('carts');
  const query = cartRef.orderBy('createdAt').where('uid' ,'==', props.user.uid).limit(1);
  const [cart] = useCollectionData(query, {idField: 'id'});

  return (
    <>
      <div class="mainGrid">
        { itemList.map((item) => <ItemBox 
                                    item={ item } 
                                    firestore={ props.firestore } 
                                    firebase={ props.firebase }
                                    user={ props.user } 
                                    cart={ cart } />) }
      </div>
      {props.user && <Footer user={ cart } firestore={ props.firestore }/>}
    </>
  );
}


export default Store;
