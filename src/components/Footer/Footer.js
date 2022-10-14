import './Footer.scss';
import CartItemBox from '../CartItemBox/CartItemBox';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Footer = (props) => {
    return (
      <div id="footer">
        <div>Your Cart</div>
        <div id="cart-items">
          { props.cart && props.cart[0].items.map(item => <CartItemBox item={ item }/>) }
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