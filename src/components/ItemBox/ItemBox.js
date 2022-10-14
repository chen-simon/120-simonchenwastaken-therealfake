
const ItemBox = (props) => {
  const AddToCart = () => {

  };

  return (
    <div class="itemBox">
      <img src={props.item.image} alt={props.item.name} />
      <div>
        <div>
          { props.item.name }
        </div>
        <div>
          { props.item.price }
        </div>
        <div>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ItemBox;