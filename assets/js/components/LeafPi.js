import env from "./../env.js";

class LeafPi {
  constructor(data) {
    this.bindEvents();
    // console.log("onWindowResize");
  }

  bindEvents = () => {
    window.addEventListener("resize", this.onWindowResize);
  };

  onWindowResize = (e) => {};
}

export default LeafPi;
