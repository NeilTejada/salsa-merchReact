import { useEffect, useState } from "react";
import Products from "../components/products";
import "./catalog.css";
import DataService from "../services/dataService";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  useEffect(function () {
    console.log("components loaded");
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);
    console.log(prods);
    let categoryList = ["Salsa", "Shirt", "Hat"];
    setCategories(categoryList);
    setProductsToDisplay(prods);
  }

  function filter(selectCategory) {
    let list = [];

    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      console.log(prod);
      if (prod.category === selectCategory) {
        list.push(prod);
      }
    }
    setProductsToDisplay(list);
    console.log(list);
  }

  function clearFilters() {
    setProductsToDisplay(products);
  }

  return (
    <div className="catalog-container">
      <h1>Salsa and Merch</h1>
      <button onClick={clearFilters} className="btn btn-sm btn-danger">
        Clear Filters
      </button>
      {categories.map((arrowCategories) => (
        <button
          onClick={() => filter(arrowCategories)}
          className="btn btn-sm btn-primary btn-filter"
        >
          {arrowCategories}
        </button>
      ))}
      <div className="products-container page">
        {productsToDisplay.map((arrowProduduct) => (
          <Products key={arrowProduduct.id} data={arrowProduduct} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
