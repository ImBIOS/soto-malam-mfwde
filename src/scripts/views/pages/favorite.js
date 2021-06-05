import FavoriteRestaurantIdb from "../../data/database";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
          <div id="content">
            <h1>Your Favorite Restaurants</h1>
            <div id="restaurant-list"></div>
          </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector("#restaurant-list");
    restaurantsContainer.innerHTML = "Loading...";
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML = "";
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
