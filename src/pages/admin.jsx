import "./admin.css";

function Admin() {
  return (
    <div className="admin page">
      <h3>Store Admin ONLY!</h3>
      <div className="section-container">
        <div className="products">
          <h2>Register New Products</h2>
        </div>
        <div className="coupons">
          <h2>Register New Coupons</h2>
        </div>
      </div>
    </div>
  );
}

export default Admin;
