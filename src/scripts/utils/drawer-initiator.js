const DrawerInitiator = {
  init({
    button, drawer, close, body,
  }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    close.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });

    body.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });

    drawer.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("open");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};

export default DrawerInitiator;
