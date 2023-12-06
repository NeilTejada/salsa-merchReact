import { useContext } from "react";
import "./cart.css";
import GlobalContext from "../store/globalContext";

function Cart() {
  const cart = useContext(GlobalContext).cart;

  function getNumOfProducts() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }
    return total;
  }

  return (
    <div className="cart page">
      <h1>Your Shopping Cart</h1>
      <h3>
        You have {getNumOfProducts()} product(s), please complete your order!
      </h3>
      <hr />
      <div className="parent">
        <div className="prods">
          {cart.map((prod) => (
            <div className="prod-cart" key={prod._id}>
              <img src={"/images/" + prod.image} alt="" />
              <div>
                <h5>{prod.title}</h5>
                <p>{prod.category}</p>
              </div>
              <label>{prod.quantity}</label>
              <label>${prod.price.toFixed(2)}</label>
              <label>${(prod.price * prod.quantity).toFixed(2)}</label>
              <button className="btn btn-sm btn-outline-danger">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
        <div className="side">
          <h3>Total</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
