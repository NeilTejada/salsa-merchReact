import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    name: "Neil",
    email: "Neil@test.com",
  });

  function addProductToCart(prod) {
    //create a copy
    let copy = [...cart];
    //modify the copy
    copy.push(prod);
    //set the copy
    setCart(copy);
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
