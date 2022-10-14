import './CartItemBox.scss';

const CartItemBox = (props) => {

  return (
    <div class="cartItemBox">
      <img src={props.item.image} alt={props.item.name} />
      <div class="item-quantity">
        <button class="decrease">-</button>
        <div>0</div>
        <button class="increase">+</button>
      </div>
    </div>
  );
}

export default CartItemBox;