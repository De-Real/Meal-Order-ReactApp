import {useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import CartProvider from "./store/CartProvider";

function App() {

	const [isModalActive, setIsModalActive] = useState(false);

	const makeModalActive = ()=> {
		setIsModalActive(true);
	}

	const makeModalInactive = () => {
		setIsModalActive(false);
	}

  return (
    <CartProvider>
      <Header onModalActive={makeModalActive}></Header>
      <main>
        <Meals />
      </main>
		{isModalActive && <Cart onDiactivate = {makeModalInactive}></Cart>}
    </CartProvider>
  );
}

export default App;
