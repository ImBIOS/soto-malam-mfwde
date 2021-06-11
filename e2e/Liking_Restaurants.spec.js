Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty favprited restaurants", ({ I }) => {
  I.seeElement("#query");
  I.see("Tidak ada restoran untuk ditampilkan", ".restaurant-item__not__found");
});
