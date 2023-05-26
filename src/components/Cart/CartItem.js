import classes from "./CartItem.module.css";

const CartItem = ({ item, onIncrease, onDecrease }) => {
  const { title, quantity, price } = item;

  const total = price * quantity;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDecrease}>-</button>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
