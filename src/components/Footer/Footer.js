import './Footer.scss';
import CartItemBox from '../CartItemBox/CartItemBox';

const Footer = (props) => {
    return (
      <div id="footer">
        <div>Your Cart</div>
        <div id="cart-items">
          { props.cart && props.cart.items && props.cart.items.map(item => <CartItemBox item={ item }/>) }
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