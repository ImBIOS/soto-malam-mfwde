const assert = require("assert");

Feature("Liking Restaurants");

Before((I) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", (I) => {
  I.seeElement("#query");
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see("Tidak ada restaurant untuk ditampilkan", ".restaurant-item__not__found");
});

Scenario("liking one restaurant", (I) => {
  I.see("Tidak ada restaurant untuk ditampilkan", ".restaurant-item__not__found");

  I.amOnPage("/");
  // … kita akan mengisi uji coba berikutnya …
});

Scenario("liking one restaurant", (I) => {
  I.see("Tidak ada restaurant untuk ditampilkan", ".restaurant-item__not__found");

  I.amOnPage("/");

  I.seeElement(".detail p a");
  I.click(locate(".detail p a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");
});

Scenario("liking one restaurant", async (I) => {
  I.see("Tidak ada restaurant untuk ditampilkan", ".restaurant-item__not__found");

  I.amOnPage("/");

  I.seeElement(".detail p a");

  const firstRestaurant = locate(".detail p a").first();
  const firstRestaurantTitle = await I.grabTextFrom(locate(".restaurant-name").first());
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant__title");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("searching restaurants", async (I) => {
  I.see("Tidak ada restaurant untuk ditampilkan", ".restaurant-item__not__found");

  I.amOnPage("/");

  I.seeElement(".detail p a");

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate(".detail p a").at(i));
    I.seeElement("#likeButton");
    I.click("#likeButton");
    titles.push(await I.grabTextFrom(".hero-text h1"));
    I.amOnPage("/");
  }

  I.amOnPage("/#/favorite");
  I.seeElement("#query");

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField("#query", searchQuery);
  I.pressKey("Enter");

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements(".restaurant-item");
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate(".restaurant__title").at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
