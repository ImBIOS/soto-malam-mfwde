import RestaurantApiSource from "../../data/data-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <div class="hero-image">
            <picture>
                <source media="(max-width: 600px)" srcset="./images/heros/hero-image_3-small.jpg">
                <img 
                    src='./images/heros/hero-image_3-large.jpg' 
                    alt="night scene hero image"></img>
            
            </picture>
      <div class="hero-text">
        <h1>Best Soto Under The Night</h1>
        <p>Served under the moon.</p>
        <a href="#content"><button>Find us</button></a>
      </div>
    </div>

    <div id="content">
    <h1>Explore Our Franchise</h1>
    <div id="restaurant-list"></div>
    <button id="load-more">Load more</button>
    </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurants();
    const restaurantsCount = restaurants.length;
    const restaurantsContainer = document.querySelector("#restaurant-list");
    restaurantsContainer.innerHTML = "Loading...";
    const loadButton = document.querySelector("#load-more");

    let dataRequested = 3;

    // display restaurant data function
    const displayRestaurantList = () => {
      restaurantsContainer.innerHTML = restaurants
        .slice(0, dataRequested)
        .map((restaurant) => createRestaurantItemTemplate(restaurant)).join("");
    };

    // load restaurant data when load element loaded
    loadButton.addEventListener("load", displayRestaurantList());

    // load new data function
    const loadNewData = () => {
      dataRequested += 3;
      if (dataRequested >= restaurantsCount) loadButton.remove();
      displayRestaurantList();
    };

    // load new data on button click
    loadButton.addEventListener("click", loadNewData);
  },
};

export default Home;
