import { createRestaurantBItemTemplate } from "../../templates/template-creator";

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
       <div class="content">
       <input id="query" type="text">
       <h2 class="content__heading">Your Liked Restaurant</h2>
       <div id="content">
           <div id="restaurant-list" class="restaurant-list">
                      
           </div>
        </div>
       </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById("query").addEventListener("change", (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantBItemTemplate(restaurant)), "");
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById("restaurant-list").innerHTML = html;

    document.getElementById("restaurant-list").dispatchEvent(new Event("restaurant-list:updated"));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
