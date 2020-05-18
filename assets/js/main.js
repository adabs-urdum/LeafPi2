"use strict";

import "babel-polyfill";
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";

Array.prototype.shuffle = function () {
  return this.sort(function () {
    return Math.random() - 0.5;
  });
};

Array.prototype.getRandomValue = function () {
  return this.shuffle()[0];
};

Array.prototype.uniqueValues = function () {
  return [...new Set(this)];
};

document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.getElementById("main");
  const currentPath = window.location.pathname.substr(1);
  mainElement.dataset["path"] = currentPath;

  if (mainElement) {
    ReactDOM.render(<App currentPath={currentPath} />, mainElement);
  }
});
