import React, { Component } from "react";
import env from "./../../env";
import axios from "axios";

class Tft32 extends Component {
  constructor(props) {
    super(props);

    this.turnOnAll = props.turnOn;
    this.turnOffAll = props.turnOff;
    this.setPreset = props.setPreset;
    this.toggle = props.toggle;

    const presetList = ["cold100", "cold75", "cold50", "cold25"];

    this.state = {
      lights: env.lights,
      light: env.lights.find((light) => light.id === "eingang"),
      presetList: presetList,
    };
  }

  componentDidMount = () => {
    this.getInfo();
  };

  getInfo = () => {
    axios
      .get(`/info/${this.state.light.ip}/${this.state.light.key}`)
      .then((response) => {
        // console.log(response);
        if (this.state.on !== response.data.state.on.value) {
          this.setState({
            on: response.data.state.on.value,
          });
        }
      });
  };

  onClickToggle = (e) => {
    this.toggle(this.state.light.ip, this.state.light.key, this.state.on);
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    const presetListJsx = this.state.presetList.map((preset) => {
      return (
        <button
          key={preset}
          className={`lights__preset lights__preset--${preset}`}
          onClick={(e) =>
            this.setPreset(preset, this.state.light.ip, this.state.light.key)
          }
        >
          <canvas
            width="1"
            height="1"
            className="lights__squareSpreader"
          ></canvas>
        </button>
      );
    });

    return (
      <div className="tft32">
        <div className="tft32__current">
          <button className="button" onClick={this.onClickToggle}>
            toggle
          </button>
        </div>

        <div className="tft32__presets">{presetListJsx}</div>

        <div className="tft32__all">
          <button className="button" onClick={this.turnOnAll}>
            all on
          </button>
          <button className="button" onClick={this.turnOffAll}>
            all off
          </button>
        </div>
      </div>
    );
  }
}

export default Tft32;
