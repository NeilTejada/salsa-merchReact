import { useState } from "react";
import "./admin.css";

function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
  });

  const [allProducts, setAllProducts] = useState([]);

  const [allCoupons, setAllCoupons] = useState([]);

  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  function handleProductForm(e) {
    let text = e.target.value;
    let name = e.target.name;

    //create a copy
    let copy = { ...product };
    //modify coppy
    copy[name] = text;
    //set copy
    setProduct(copy);
  }

  function handleCouponForm(e) {
    let text = e.target.value;
    let name = e.target.name;

    //create a copy
    let copy = { ...coupon };
    //modify coppy
    copy[name] = text;
    //set copy
    setCoupon(copy);
  }

  function saveProduct() {
    console.log(product);
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }

  function saveCoupon() {
    console.log(coupon);
    //save the coupon to allCoupons list
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }
  return (
    <div className="admin page">
      <h3>Store Admin ONLY!</h3>
      <div className="section-container">
        <div className="products">
          <h2>Register Products</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                onChange={handleProductForm}
                type="text"
                className="form-control"
                id="title"
                name="title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                onChange={handleProductForm}
                type="text"
                className="form-control"
                id="category"
                name="category"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                onChange={handleProductForm}
                type="text"
                className="form-control"
                id="image"
                name="image"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                onChange={handleProductForm}
                type="text"
                className="form-control"
                id="price"
                name="price"
              />
            </div>
            <button
              onClick={saveProduct}
              type="button"
              className="btn btn-primary"
            >
              Save Product
            </button>
            <div>
              {/*display the coupons code - discount*/}
              {allProducts.map((pr) => (
                <div key={pr.title} className="product-register">
                  <img src={"/images/" + pr.image} alt="" className="left" />
                  <div className="middle">
                    <label className="lbl-title">{pr.title}</label>
                  </div>
                  <div className="right">
                    <label className="lbl-price">${pr.price}</label>
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
        <div className="coupons">
          <h2>Register Coupons</h2>
          {/* Add code for registering new coupons if needed */}
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Code
              </label>
              <input
                onChange={handleCouponForm}
                type="text"
                className="form-control"
                id="code"
                name="code"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Discount
              </label>
              <input
                onChange={handleCouponForm}
                type="text"
                className="form-control"
                id="discount"
                name="discount"
              />
            </div>
            <button
              onClick={saveCoupon}
              type="button"
              className="btn btn-primary"
            >
              Save Coupon
            </button>
            <div>
              {/*display the coupons code - discount*/}
              {allCoupons.map((cp) => (
                <div key={cp.code} className="coupon">
                  <label>{cp.code}</label>
                  <label>{cp.discount}</label>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
