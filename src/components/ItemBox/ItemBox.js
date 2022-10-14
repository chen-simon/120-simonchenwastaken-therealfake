import './ItemBox.scss';

const ItemBox = (props) => {
  const AddToCart = () => {

  };

  return (
    <div class="itemBox">
      <img src={props.item.image} alt={props.item.name} />
      <div class="itemInfo">
        <div class="itemName">
          { props.item.name }
        </div>
        <div class="itemPrice">
          { props.item.price }
        </div>
      </div>
      <div class="itemAddToCart">
          <button>Add To Cart</button>
        </div>
    </div>
  );
}

export default ItemBox;