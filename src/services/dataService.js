import axios from "axios";

let catalog = [
  {
    title: "Mild Salsa 16oz",
    category: "Salsa",
    price: 12.99,
    image: "salsaJar.jpeg",
    _id: "1",
  },
  {
    title: "Hot Salsa 16oz",
    category: "Salsa",
    price: 12.99,
    image: "salsaJar.jpeg",
    _id: "2",
  },
  {
    title: "Spicy Salsa 16oz",
    category: "Salsa",
    price: 12.99,
    image: "salsaJar.jpeg",
    _id: "3",
  },
  {
    title: "Hooded Sweatshirt",
    category: "Shirt",
    price: 49.99,
    image: "hoodie.jpeg",
    _id: "4",
  },
  {
    title: "Long Sleeve T-Shirt",
    category: "Shirt",
    price: 23.99,
    image: "shirt.jpeg",
    _id: "5",
  },
  {
    title: "Short Sleeve T-Shirt",
    category: "Shirt",
    price: 15.99,
    image: "shortSleeve.jpeg",
    _id: "6",
  },
  {
    title: "Trucker Hat",
    category: "Hat",
    price: 20.99,
    image: "hat.jpeg",
    _id: "7",
  },
];

class DataService {
  async getProducts() {
    //want to display the products
    //return catalog;

    //call the server
    let response = await axios.get("http://127.0.0.1:5000/api/product");
    return response.data;
  }

  async saveProduct(prod) {
    let response = await axios.post("http://127.0.0.1:5000/api/product", prod);
    return response.data;
  }
}

export default DataService;
