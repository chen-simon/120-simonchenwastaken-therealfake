import './Footer.scss';
import CartItemBox from '../CartItemBox/CartItemBox';

const Footer = (props) => {
    return (
      <div id="footer">
        <div>Your Cart</div>
        <div id="cart-items">
          { props.cart?.docs && props.cart.docs.length > 0 
          && props.cart.docs[0].data().items.map(item => 
            <CartItemBox
              item={ item }
              firestore={ props.firestore } 
              firebase={ props.firebase }
              user={ props.user } 
              cart={ props.cart }/> ) }
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