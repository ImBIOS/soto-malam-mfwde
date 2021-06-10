import RestaurantApiSource from "../../data/data-source";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import UrlParser from "../../routes/url-parser";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = "Loading...";

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    restaurant = restaurant.restaurant;
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
