import runtime from "serviceworker-webpack-plugin/lib/runtime";

const swRegister = async () => {
  if ("serviceWorker" in navigator) {
    await runtime.register({ scope: "./" }).then((reg) => {
      console.log(`Successfully registered. Scope is ${reg.scope}`);
    }).catch((error) => {
      console.log(`Registering failed ${error}`);
    });
    return;
  }
  console.log("Service worker not supported in this browser");
};

export default swRegister;
