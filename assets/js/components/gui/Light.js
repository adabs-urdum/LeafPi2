import React, { Component, Fragment } from "react";
import axios from "axios";

class Light extends Component {
  constructor(props) {
    super(props);
    this.setPreset = props.setPreset;
    const presetList = [
      "cold100",
      "cold75",
      "cold50",
      "cold25",
      "warm100",
      "warm75",
      "warm50",
      "warm25",
      "cyan",
      "magenta",
      "yellow",
      "green",
    ];
    this.toggle = props.toggle;
    this.state = {
      name: props.name,
      id: props.id,
      ip: props.ip,
      authKey: props.authKey,
      presetList: presetList,
      serialNumber: null,
      effectsList: [],
      on: null,
      brightness: null,
      sat: null,
      hue: null,
      effect: null,
    };
  }

  componentDidMount = () => {
    this.getInfo();
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    this.getInfo();
  };

  getInfo = () => {
    axios
      .get(`/info/${this.state.ip}/${this.state.authKey}`)
      .then((response) => {
        // console.log(response);
        if (this.state.on !== response.data.state.on.value) {
          this.setState({
            serialNumber: response.data.serialNo,
            effectsList: response.data.effects.effectsList,
            on: response.data.state.on.value,
            brightness: response.data.state.brightness,
            sat: response.data.state.sat,
            hue: response.data.state.hue,
          });
        }
      });
  };

  onChangeEffect = (e) => {
    const effect = e.currentTarget.value;
    axios
      .get(`/effect/${this.state.ip}/${this.state.authKey}/${effect}`)
      .then((response) => {
        this.setState({
          effect: effect,
        });
      });
  };

  onClickPowerSwitch = () => {
    new Promise((resolve, reject) => {
      this.toggle(this.state.ip, this.state.authKey, this.state.on);
      setTimeout(() => resolve(), 250);
    }).then(() => {
      this.getInfo();
    });
  };

  render() {
    const effectsListJsx = this.state.effectsList.map((effect) => {
      return (
        <label
          key={effect}
          htmlFor={this.state.id + effect.split(" ").join("")}
          className="lights__effectsLabel"
        >
          <input
            className="lights__effectInput"
            type="radio"
            name={this.state.id}
            id={this.state.id + effect.split(" ").join("")}
            value={effect}
            onChange={this.onChangeEffect}
            checked={this.state.effect == effect ? true : false}
          ></input>
          <span>{effect}</span>
        </label>
      );
    });

    const presetListJsx = this.state.presetList.map((preset) => {
      return (
        <button
          key={preset}
          className={`lights__preset lights__preset--${preset}`}
          onClick={(e) =>
            this.setPreset(preset, this.state.ip, this.state.authKey)
          }
        >
          <canvas
            width="6"
            height="4"
            className="lights__squareSpreader"
          ></canvas>
        </button>
      );
    });

    return (
      <div className="lights__light" data-id={this.state.id}>
        <div className="lights__header">
          <button
            className="button lights__powerSwitch"
            onClick={this.onClickPowerSwitch}
          >
            <canvas
              width="1"
              height="1"
              className="lights__squareSpreader"
            ></canvas>
          </button>
          <h3 className="lights__name">
            {this.state.name}{" "}
            <span className="lights__status">
              {this.state.on ? "ON" : "OFF"}
            </span>
          </h3>
        </div>
        <div className="lights__presetWrapper">
          <h6>Presets</h6>
          <div className="lights__presets">{presetListJsx}</div>
        </div>
        <div className="lights__effectsWrapper">
          <h6>Effects</h6>
          <ul name="colorpanel" className="lights__effectsList">
            {effectsListJsx}
          </ul>
        </div>
      </div>
    );
  }
}

export default Light;
