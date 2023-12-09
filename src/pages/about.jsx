import "./about.css";

function About() {
  return (
    <div className="about page">
      <h1>How We Started!</h1>
      <div className="about-content">
        <div className="about-image">
          <img src="/images/aboutPage.jpeg" alt="About Pic" />
        </div>
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            ipsam, commodi sed at accusamus labore quos, nam voluptates
            reiciendis dolores fugit possimus magni optio pariatur
            reprehenderit, asperiores ab neque quisquam? Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Autem error assumenda illum est
            iure nobis molestiae. Excepturi eos molestiae fugit consequatur unde
            maiores. Officia voluptatem velit, ea laudantium rerum repellendus.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/chipsSalsa.jpeg" alt="Chips and Salsa" />
        </div>
      </div>
      <div>
        <h1>2021 Third Place Winner, Tustin Chili Cook-Off</h1>
        <div className="image-ribbon">
          <img src="/images/ribbon.jpeg" alt="Ribbon" />
        </div>
        <h1>Best Salsa, 2021</h1>
      </div>
    </div>
  );
}

export default About;
