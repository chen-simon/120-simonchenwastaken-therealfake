import './CartItemBox.scss';

const CartItemBox = (props) => {
  const incBtn = document.querySelectorAll(".increase");
  const decBtn = document.querySelectorAll(".decrease");

  incBtn.forEach(btn => {
    btn.onclick = () => console.log('add!')
  })

  decBtn.forEach = (btn => {

  })

  return (
    <div class="cartItemBox">
      <img src={props.item.image} alt={props.item.name} />
      <div class="item-quantity-box">
        <button class="decrease">-</button>
        <div class="item-quantity">0</div>
        <button class="increase">+</button>
      </div>
    </div>
  );
}

export default CartItemBox;