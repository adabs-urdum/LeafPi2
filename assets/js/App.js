import React, { Component, Fragment } from "react";
import LeafPi from "./components/LeafPi";
import GUI from "./components/GUI";
import Lights from "./components/gui/Lights";
import Tft32 from "./components/gui/tft32";
import env from "./env";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    const leafPi = new LeafPi();

    const gui = new GUI({
      container: document.getElementById("lightsWrapper"),
    });

    this.state = {
      currentPath: props.currentPath,
    };
  }

  turnOnAll = () => {
    env.lights.forEach((light) => {
      axios.get(`/power/${light.ip}/${light.key}/false`).then((response) => {
        this.forceUpdate();
      });
    });
  };

  turnOffAll = () => {
    env.lights.forEach((light) => {
      axios.get(`/power/${light.ip}/${light.key}/true`).then((response) => {
        this.forceUpdate();
      });
    });
  };

  toggle = (ip, authKey, state) => {
    axios.get(`/power/${ip}/${authKey}/${state}`);
  };

  setPreset = (preset, ip, authKey) => {
    let brightness, hue, sat;
    switch (preset) {
      case "cold25":
        brightness = 25;
        hue = 200;
        sat = 10;
        break;
      case "cold50":
        brightness = 50;
        hue = 200;
        sat = 10;
        break;
      case "cold75":
        brightness = 75;
        hue = 200;
        sat = 10;
        break;
      case "cold100":
        brightness = 100;
        hue = 200;
        sat = 10;
        break;
      case "warm25":
        brightness = 25;
        hue = 30;
        sat = 10;
        break;
      case "warm50":
        brightness = 50;
        hue = 30;
        sat = 10;
        break;
      case "warm75":
        brightness = 75;
        hue = 30;
        sat = 10;
        break;
      case "warm100":
        brightness = 100;
        hue = 30;
        sat = 10;
        break;
      case "magenta":
        brightness = 100;
        hue = 300;
        sat = 100;
        break;
      case "cyan":
        brightness = 100;
        hue = 180;
        sat = 100;
        break;
      case "yellow":
        brightness = 100;
        hue = 60;
        sat = 100;
        break;
      case "green":
        brightness = 100;
        hue = 90;
        sat = 100;
        break;
      default:
        break;
    }
    axios.get(`/hue/${ip}/${authKey}/${hue}`);
    axios.get(`/brightness/${ip}/${authKey}/${brightness}`);
    axios.get(`/sat/${ip}/${authKey}/${sat}`);

    this.setState({
      on: true,
      effect: null,
    });
  };

  render() {
    let elements = (
      <Lights
        turnOn={this.turnOnAll}
        turnOff={this.turnOffAll}
        toggle={this.toggle}
        setPreset={this.setPreset}
      />
    );

    if (this.state.currentPath == "tft32") {
      elements = (
        <Tft32
          turnOn={this.turnOnAll}
          turnOff={this.turnOffAll}
          setPreset={this.setPreset}
          toggle={this.toggle}
        />
      );
    }

    return <Fragment>{elements}</Fragment>;
  }
}

export default App;
