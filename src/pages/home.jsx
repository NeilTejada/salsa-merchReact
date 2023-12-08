import "./home.css";

function Home() {
  return (
    <div className="home page">
      <h3>Smackin Smokin Salsa</h3>
      <h1>Fresh Homemade Smoked Salsa and Merch!</h1>
      <div className="image-container">
        <img src="/images/chipsSalsa.jpeg" alt="Chips and Salsa " />
      </div>
      <div className="images-wrapper">
        <div className="image-shirt">
          <img src="/images/shirt.jpeg" alt="Salsa Shirt" />
        </div>
        <div className="text-area">
          <h3>
            Check out our fresh homemade smoked salsa and merch.
            <p>
              <a href="/catalog">Salsa & Merch</a>
            </p>
          </h3>
        </div>
        <div className="image-salsaJar">
          <img src="/images/salsaJar.jpeg" alt="Salsa Jar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
