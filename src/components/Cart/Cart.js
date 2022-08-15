import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItemCtx = useContext(CartContext);

  const [isOrdered, setIsOrdered] = useState(false);

  const totalAmount = `$${+cartItemCtx.totalAmount.toFixed(2)}`;
  const isEmpty = cartItemCtx.items.length === 0;

  const cartItemRemoveHandler = (id) => {
    cartItemCtx.removeItem(id);
  };
  const cartAddItemHandler = (item) => {
    cartItemCtx.addItem({ ...item, amount: 1 });
  };
  const cartClearItemsHandler = () => {
    setIsOrdered(true);
    cartItemCtx.clearItems();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartItemCtx.items.map((elem) => {
        return (
          <CartItem
            key={elem.id}
            name={elem.name}
            amount={elem.amount}
            price={elem.price}
            onRemove={cartItemRemoveHandler.bind(null, elem.id)}
            onAdd={cartAddItemHandler.bind(null, elem)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onDiactivate}>
      {!isOrdered && (
        <>
          {cartItems}
          <div className={classes.total}>
            <span> Total Amount</span>
            <span> {totalAmount}</span>{" "}
          </div>
          <div className={classes.actions}>
            <button
              onClick={props.onDiactivate}
              className={classes["button--alt"]}
            >
              Close
            </button>
            {!isEmpty && (
              <button
                onClick={cartClearItemsHandler}
                className={classes.button}
              >
                Order
              </button>
            )}
          </div>
        </>
      )}
      {isOrdered && (
        <div className={classes.order}>
          <div className={classes.title}> Thanks for ordering!</div>
          <div className={classes.connection}>
            We will connect you as soon as possible! You can clarify or change
            your order by calling <span>+38(063)-777-77-77</span> .
          </div>
          <div className={classes["order-img"]}>
            <img
              src="https://i.gifer.com/origin/ca/cacaa11091931d565bfab63f4303f2b4.gif"
              alt="Delivery man"
            ></img>
          </div>
          <button
            onClick={props.onDiactivate}
            className={classes["button--alt"]}
          >
            Close
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
