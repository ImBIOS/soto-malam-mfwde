import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantApiSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    // return response.json();
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantApiSource;