import React, { Component, Fragment } from "react";
import axios from "axios";
import Light from "./Light";
import env from "./../../env";

class Lights extends Component {
  constructor(props, data) {
    super(props);
    // console.log(env);
  }

  turnOn = () => {
    env.lights.forEach((light) => {
      axios.get(`/power/${light.ip}/${light.key}/false`).then((response) => {
        this.forceUpdate();
      });
    });
  };

  turnOff = () => {
    env.lights.forEach((light) => {
      axios.get(`/power/${light.ip}/${light.key}/true`).then((response) => {
        this.forceUpdate();
      });
    });
  };

  onClickPreset = (e) => {
    const preset = e.currentTarget.value;

    env.lights.forEach((light) => {
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
      axios.get(`/hue/${light.ip}/${light.key}/${hue}`).then(() => {
        axios
          .get(`/brightness/${light.ip}/${light.key}/${brightness}`)
          .then(() => {
            axios.get(`/sat/${light.ip}/${light.key}/${sat}`).then(() => {
              this.forceUpdate();
            });
          });
      });
    });
  };

  render() {
    const lightsJsx = env.lights.map((light) => {
      return (
        <Light
          key={light.id}
          id={light.id}
          ip={light.ip}
          authKey={light.key}
          name={light.name}
        />
      );
    });

    return (
      <Fragment>
        <section className="lights__controlsAll">
          <button onClick={this.turnOn} className="button">
            LIGHTS ON
          </button>
          <button
            className="lights__presetAll lights__presetAll--cold100"
            value="cold100"
            onClick={this.onClickPreset}
          >
            <canvas width="1" height="1"></canvas>
          </button>
          <button
            className="lights__presetAll lights__presetAll--cold75"
            value="cold75"
            onClick={this.onClickPreset}
          >
            <canvas width="1" height="1"></canvas>
          </button>
          <button
            className="lights__presetAll lights__presetAll--cold50"
            value="cold50"
            onClick={this.onClickPreset}
          >
            <canvas width="1" height="1"></canvas>
          </button>
          <button
            className="lights__presetAll lights__presetAll--cold25"
            value="cold25"
            onClick={this.onClickPreset}
          >
            <canvas width="1" height="1"></canvas>
          </button>
          <button onClick={this.turnOff} className="button">
            LIGHTS OFF
          </button>
        </section>
        <section id="lightsWrapper" className="lights">
          {lightsJsx}
        </section>
      </Fragment>
    );
  }
}

export default Lights;
