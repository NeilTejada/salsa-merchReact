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

  function getTotalOrder() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      total += prod.price * prod.quantity;
    }
    return total.toFixed(2);
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
          <h3>Total:</h3>
          <h1>${getTotalOrder()}</h1>
          <hr />
          <div className="discount-form input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Coupon Code"
              aria-label="Coupon Code"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Apply
            </button>
          </div>

          <hr />
          <button type="button" className="btn btn-warning">
            Complete Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
