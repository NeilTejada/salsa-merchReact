import { createContext } from "react";

//Context is the definition of the data/a blueprint.
const GlobalContext = createContext({
  cart: [],
  user: {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default GlobalContext;
