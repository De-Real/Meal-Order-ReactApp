import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isChanged, setIsChanged] = useState(false);

  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    let setTimeoutHandler = setTimeout(() => setIsChanged(true), 300);
    return () => {
      setIsChanged(false);
      clearTimeout(setTimeoutHandler);
    };
  }, [numberOfCartItems]);

  const btnClasses = `${classes.button} ${isChanged && classes.bump}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
