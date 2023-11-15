import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to My Homepage</h1>
      <Link to="/catalog">Go to Catalog</Link>
    </div>
  );
}

export default Home;
