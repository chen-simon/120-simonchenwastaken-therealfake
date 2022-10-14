import './ItemBox.scss';

const ItemBox = (props) => {
  const cartRef = props.firestore.collection('carts');

  const addToCart = async () => {
    // if a cart doesn't already exist, create one
    if (props.cart.docs.length === 0) {
      await cartRef.add({
        uid: props.user.uid,
        items: [
          {
            name: props.item.name,
            price: props.item.price,
            image: props.item.image,
            quantity: 1
          }
        ],
        createdAt: props.firebase.firestore.FieldValue.serverTimestamp()
      });
      return;
    }

    // otherwise, update the cart
    let newCart = props.cart.docs[0].data();
    let quantityChanged = false;
    newCart.items.forEach(cartItem => {
      if (cartItem.name === props.item.name) {
        cartItem.quantity++;
        quantityChanged = true;
      }
    });
    if (!quantityChanged) {
      newCart.items.push({
        name: props.item.name,
        price: props.item.price,
        image: props.item.image,
        quantity: 1
      })
    }

    await cartRef.doc(props.cart.docs[0].id).update(newCart);
  };


  return (
    <div class="itemBox">
      <img src={props.item.image} alt={props.item.name} />
      <div class="itemBoxFooter">
        <div class="itemInfo">
          <div class="itemName">
            { props.item.name }
          </div>
          <div class="itemPrice">
            ${ props.item.price }
          </div>
        </div>
        <div class="itemAddToCart">
          <button onClick={ () => { addToCart(props.item) }}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ItemBox;