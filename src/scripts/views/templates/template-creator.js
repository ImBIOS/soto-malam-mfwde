import CONFIG from "../../globals/config";

// function to truncate exceeding text
const truncate = (input, max = 100) => (input.length > max
  ? `${input.substring(0, max)}...` : input);

const createRestaurantDetailTemplate = (restaurant) => `
<div class="hero-image" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
url('${`${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}`}');">
      <div class="hero-text">
        <h1>${restaurant.name}</h1>
        <p>${restaurant.city} City</p>
      </div>
</div>
    <div id="content">
      <h1><span class="fa fa-star checked"></span> ${restaurant.rating}</h1>
      <div id="restaurant_overview">
        <h2>Address</h2>
        <p>${restaurant.address}</p>
        <h2>Menu Category</h2>
        <p>${restaurant.categories.map((category) => `&nbsp;<span>${category.name}</span>`)}</p>
        <h2>Food Menu</h2>
        <p style="text-transform: capitalize;">${restaurant.menus.foods.map((food) => `&nbsp;<span>${food.name}</span>`)}</p>
        <h2>Beverage Menu</h2>
        <p style="text-transform: capitalize;">${restaurant.menus.drinks.map((drink) => `&nbsp;<span>${drink.name}</span>`)}</p>
        <h2>Description</h2>
        <p>${restaurant.description}</p>
        <h2>Reviews</h2>
        <div id="restaurant__info">
        ${restaurant.customerReviews.map((data) => `
        <div class="restaurant-item">
          <div class="detail">
            <h2 class="restaurant-name">${data.name}</h2>
            <p>${truncate(data.review)}</p>
            <p>${data.date}</p>
          </div>
        </div>
        `).join("")}
        </div>
      </div>
    </div>
`;

// eslint-disable-next-line no-lone-blocks
{ /* <h2 class="restaurant__title">${restaurant.name}</h2>
<img class="restaurant__poster"
src="${`${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}`}"
alt="${restaurant.name}" />
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
</div> */ }

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
