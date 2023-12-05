import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    name: "Neil",
    email: "Neil@test.com",
  });

  function addProductToCart() {
    console.log("global add");
  }

  function removeProductToCart() {
    console.log("global remove");
  }

  return (
    <GlobalContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductToCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
