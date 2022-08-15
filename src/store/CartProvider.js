import CartContext from "./cart-context";
import { useReducer } from "react";

let defaultCartState = {};

if (localStorage.getItem("cartFilling")) {
  const localeStorageValue = localStorage.getItem("cartFilling");
  defaultCartState = JSON.parse(localeStorageValue);
} else {
  defaultCartState = {
    items: [],
    totalAmount: 0,
  };
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems;

    if (existingItemIndex >= 0) {
      updatedItems = [...state.items];
      updatedItems[existingItemIndex].amount += action.item.amount;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    let totalAmount = state.totalAmount;

    const updatedItems = state.items.map((item) => {
      if (item.id !== action.id) return item;
      totalAmount -= item.price;
      return { ...item, amount: item.amount - 1 };
    });

    let unpdatedNullItems = updatedItems.filter((item) => {
      if (item.id !== action.id) return true;
      else if (item.amount < 1) return false;
      return true;
    });

    return { items: unpdatedNullItems, totalAmount: totalAmount };
  } else if (action.type === "CLEAR") {
    return { items: [], totalAmount: 0 };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearItemsFromCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const localStorageData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
  };

  console.log("lc", localStorageData);

  localStorage.setItem("cartFilling", JSON.stringify(localStorageData));

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItems: clearItemsFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
