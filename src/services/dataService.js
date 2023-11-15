//This is just an example and need to be filled in with what I want.
//Need at least 7 categories.

let catalog = [
  {
    title: "Mild Salsa 16oz",
    category: "Salsa",
    price: 12.99,
    image: "salsaJar.jpeg",
    id: "1",
  },
  {
    title: "Hot Salsa 16oz",
    category: "Salsa",
    price: 12.99,
    image: "salsaJar.jpeg",
    id: "2",
  },
  {
    title: "Spicy Salsa 16oz",
    category: "Salsa",
    price: 12.99,
    image: "salsaJar.jpeg",
    id: "3",
  },
  {
    title: "Hooded Sweatshirt",
    category: "Shirt",
    price: 49.99,
    image: "hoodie.jpeg",
    id: "4",
  },
  {
    title: "Long Sleeve T-Shirt",
    category: "Shirt",
    price: 23.99,
    image: "shirt.jpeg",
    id: "5",
  },
  {
    title: "Short Sleeve T-Shirt",
    category: "Shirt",
    price: 15.99,
    image: "shortSleeve.jpeg",
    id: "6",
  },
  {
    title: "Trucker Hat",
    category: "Hat",
    price: 20.99,
    image: "hat.jpeg",
    id: "7",
  },
];

class DataService {
  getProducts() {
    //want to display the products
    return catalog;
  }
}

export default DataService;
