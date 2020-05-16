import React, { Component, Fragment } from "react";
import env from "./../env.js";
import Light from "./gui/Light";

class GUI {
  constructor(data) {
    this.container = data.container;
    this.lights = {};
    // this.createLights();
    this.render();
  }

  createLights = () => {
    env.lights.forEach((light) => {
      const guiLight = new Light(light);
      this.lights[guiLight.id] = guiLight;
      this.container.appendChild(guiLight.getMarkup());
    });
  };

  render = () => {};
}

export default GUI;
