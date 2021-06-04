import CONFIG from "../../globals/config";

// function to truncate exceeding text
const truncate = (input, max = 100) => (input.length > max
  ? `${input.substring(0, max)}...` : input);

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${`${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}`}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
      <h3 class="city">${restaurant.city} City</h3>
      <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="detail">
        <h4><span class="fa fa-star checked"></span> ${restaurant.rating}</h4>
        <h2 class="restaurant-name">${restaurant.name}</h2>
        <p>${truncate(restaurant.description)}</p>
        <p><a href="#/detail/${restaurant.id}">Detail</a></p>
      </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
