import { useEffect,useRef } from 'react';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useCollection } from 'react-firebase-hooks/firestore';

import ItemBox from '../ItemBox/ItemBox';
import Footer from '../Footer/Footer';

import itemList from '../../items.json';

const Store = (props) => {
  
  // Firestore hook to get cart
  const cartRef = props.firestore.collection('carts');
  const query = cartRef.where('uid' ,'==', props.user.uid);
  const [cart] = useCollection(query, {idField: 'id'});


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
      { props.user && <Footer 
                        firestore={ props.firestore } 
                        firebase={ props.firebase }
                        user={ props.user } 
                        cart={ cart }/> }
    </>
  );
}


export default Store;
