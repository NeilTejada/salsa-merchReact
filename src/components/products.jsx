// Products.jsx
import { useContext, useEffect, useState } from "react";
import "./products.css";
import QuantityPicker from "../components/quantityPicker";
import GlobalContext from "../store/globalContext";

function Products(props) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(props.data.price);

  let addProductToCart = useContext(GlobalContext).addProductToCart;

  useEffect(() => {
    // Update total price when the selected quantity changes
    const updatedTotalPrice = props.data.price * selectedQuantity;
    setTotalPrice(updatedTotalPrice);
  }, [selectedQuantity, props.data.price]);

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  function addToCart() {
    let prod = { ...props.data };
    prod.quantity = selectedQuantity;

    addProductToCart(prod); //cal the global/context function
  }

  return (
    <div className="products-container">
      <div className="products">
        <img
          src={"/images/" + props.data.image}
          className="product-image"
          alt="Product"
        />
        <h5 className="product-title">{props.data.title}</h5>
        <div className="prices">
          <div>
            <label className="price">
              Price: ${props.data.price.toFixed(2)}
            </label>
          </div>
          <div>
            <label className="total">Total: ${totalPrice.toFixed(2)}</label>
          </div>
        </div>
        <div className="quantity-picker">
          <QuantityPicker
            quantity={selectedQuantity}
            onQuantityChange={handleQuantityChange}
          />
          <button onClick={addToCart} className=" cart btn btn-sm btn-outline-dark">
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
