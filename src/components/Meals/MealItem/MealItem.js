import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const AddToCartHandler = (amount) => {
	console.log('item price', price);
    cartCtx.addItem({
		id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  console.log("ID", props.id);
  return (
    <li key={props.id} className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
