// QuantityPicker.jsx
import { useState, useEffect } from "react";
import "./quantityPicker.css";

function QuantityPicker({ onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Update the total price whenever the quantity changes
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

  function decreaseQuantity() {
    if (quantity === 1) {
      setQuantity(1); // Reset the quantity to 0
    } else {
      let decreaseVal = quantity - 1;
      setQuantity(decreaseVal);
    }
  }

  function increaseQuantity() {
    let val = quantity + 1;
    setQuantity(val);
  }

  return (
    <div className="qtyPicker">
      <button
        className="decrease-button"
        disabled={quantity === 0}
        onClick={decreaseQuantity}
      >
        -
      </button>
      <label>{quantity}</label>
      <button className="increase-button" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
