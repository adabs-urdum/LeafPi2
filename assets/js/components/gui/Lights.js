import React, { Component, Fragment } from "react";
import axios from "axios";
import Light from "./Light";
import env from "./../../env";

class Lights extends Component {
  constructor(props, data) {
    super(props);
    // console.log(env);

    this.turnOn = props.turnOn;
    this.turnOff = props.turnOff;
    this.toggle = props.toggle;
    this.setPreset = props.setPreset;
  }

  onClickPreset = (e) => {
    const preset = e.currentTarget.value;
    env.lights.forEach((light) => {
      this.setPreset(preset, light.ip, light.key);
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
          toggle={this.toggle}
          setPreset={this.setPreset}
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
