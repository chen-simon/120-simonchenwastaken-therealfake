import './Footer.scss';
import itemList from '../../items.json';
import CartItemBox from '../CartItemBox/CartItemBox';

const Footer = (props) => {

    return (
      <div id="footer">
        <div>Your Cart</div>
        <div id="cart-items">
          { itemList.map((item) => <CartItemBox item={ item }/>) }
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