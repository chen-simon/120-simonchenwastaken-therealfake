import './ItemBox.scss';

const ItemBox = (props) => {
  const cartRef = props.firestore.collection('carts');

  const addToCart = async () => {
    if (!props.cart) {
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

    const newCart = props.cart;
    newCart.forEach(cartItem => {
      if (cartItem.name === props.item.name) {
        cartItem.quantity++;
      }
    });
    await cartRef.add({
      uid: props.user.uid,
      items: newCart,
      createdAt: props.firebase.firestore.FieldValue.serverTimestamp()
    })
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