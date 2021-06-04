const CONFIG = {
  KEY: "12345", // 112345 for testing
  BASE_URL: "https://restaurant-api.dicoding.dev/",
  BASE_IMAGE_URL: "https://restaurant-api.dicoding.dev/images/",
  DEFAULT_LANGUAGE: "en-us",
  //   CACHE_NAME: "SotoMalam-V1", // for prod only
  CACHE_NAME: new Date().toISOString(), // for dev only
  DATABASE_NAME: "soto-malam-database",
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: "restaurants",
};

export default CONFIG;
