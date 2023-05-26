import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import styles from "./Cart.module.css";
import { toggleCart } from "../../store/cartSlice";
import { useEffect, useState } from "react";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity } = useSelector((state) => state.cart);
  const [cartBtnIsUpdated, setCartBtnIsUpdated] = useState(false);

  useEffect(() => {
    setCartBtnIsUpdated(true);

    const timer = setTimeout(() => {
      setCartBtnIsUpdated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span
        className={`${classes.badge} ${cartBtnIsUpdated ? styles.bump : ""}`}
      >
        {totalQuantity}
      </span>
    </button>
  );
};

export default CartButton;
