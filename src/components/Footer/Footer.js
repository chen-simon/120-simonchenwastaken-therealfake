import './Footer.scss';
import CartItemBox from '../CartItemBox/CartItemBox';
import getSubtotal from './Subtotal';


const Footer = (props) => {
    let subtotal = 0.00;
    let tax = 0.00;
    let grandtotal = 0.00;
    if (props.cart?.docs && props.cart.docs.length > 0 ){
      subtotal = getSubtotal(props.cart.docs[0].data().items);
      tax = subtotal * 0.13;
      grandtotal = subtotal + tax;
    }
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
          <div>Subtotal: ${subtotal.toFixed(2)}</div>
          <div>Tax: ${tax.toFixed(2)}</div>
          <div>Grand Total: ${grandtotal.toFixed(2)}</div>
          
        </div>
      </div>
    );
  }
  
  export default Footer;