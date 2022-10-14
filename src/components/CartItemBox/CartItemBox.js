import './CartItemBox.scss';

const CartItemBox = (props) => {
  const cartRef = props.firestore.collection('carts');

  const addToCart = async () => {
    let newCart = props.cart.docs[0].data();
    newCart.items.forEach(cartItem => {
      if (cartItem.name === props.item.name) {
        cartItem.quantity++;
      }
    });

    await cartRef.doc(props.cart.docs[0].id).update(newCart);
  };

  const removeFromCart = async () => {
    let newCart = props.cart.docs[0].data();
    let indexToRemove = -1;
    newCart.items.forEach((cartItem, index) => {
      if (cartItem.name === props.item.name) {
        cartItem.quantity--;
        if (cartItem.quantity === 0) {
          indexToRemove = index;
        }
      }
    });

    if (indexToRemove !== -1) {
      newCart.items.splice(indexToRemove, 1);
    }
    
    await cartRef.doc(props.cart.docs[0].id).update(newCart);
  };

  return (
    <div class="cartItemBox">
      <img src={props.item.image} alt={props.item.name} />
      <div class="item-quantity-box">
        <button class="decrease" onClick={() => {removeFromCart(props.item)}}>-</button>
        <div class="item-quantity">{ props.item.quantity }</div>
        <button class="increase" onClick={() => {addToCart(props.item)}}>+</button>
      </div>
    </div>
  );
}

export default CartItemBox;