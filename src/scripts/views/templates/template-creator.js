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

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
      <h3 class="city">${restaurant.city || "-"} City</h3>
      <img src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId || "-"}" alt="${restaurant.name || "-"}">
      <div class="detail">
        <h4><span class="fa fa-star checked"></span> ${restaurant.rating || "-"}</h4>
        <h2 class="restaurant-name">${restaurant.name || "-"}</h2>
        <p>${truncate(restaurant.description) || "-"}</p>
        <p><a href="#/detail/${restaurant.id || "-"}">Detail</a></p>
      </div>
    </div>
  `;

const createRestaurantBItemTemplate = (restaurant) => `
<div class="restaurant-item">
<div class="restaurant-item__header">
    <img class="restaurant-item__header__poster" alt="${restaurant.title || "-"}"
        src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}` : "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}">
    <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.vote_average || "-"}</span></p>
    </div>
</div>
<div class="restaurant-item__content">
    <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.title || "-"}</a></h3>
    <p>${restaurant.overview || "-"}</p>
</div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantBItemTemplate,
};
