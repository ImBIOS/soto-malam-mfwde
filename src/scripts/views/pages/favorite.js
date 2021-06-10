import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
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
    while (!restaurants) {
      restaurantsContainer.innerHTML = "Loading...";
    }
    restaurantsContainer.innerHTML = "";
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
