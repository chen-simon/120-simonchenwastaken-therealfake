import './Footer.scss';
import CartItemBox from '../CartItemBox/CartItemBox';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Footer = (props) => {
  // Firestore hook to get cart
  const cartRef = props.firestore.collection('carts');
  const query = cartRef.where('uid' ,'==', props.user.uid).limit(25);
  const [cart] = useCollectionData(query, {idField: 'id'});

    return (
      <div id="footer">
        <div>Your Cart</div>
        <div id="cart-items">
          { cart && cart.map(item => <CartItemBox item={ item }/>) }
        </div>
        <div id="totals">
          <div>Subtotal: </div>
          <div>Tax: </div>
          <div>Grand Total: </div>
          
        </div>
      </div>
    );
  }
  
  export default Footer;