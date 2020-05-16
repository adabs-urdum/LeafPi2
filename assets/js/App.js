import React, { Component, Fragment } from "react";
import LeafPi from "./components/LeafPi";
import GUI from "./components/GUI";
import Lights from "./components/gui/Lights";

class App extends Component {
  constructor(props) {
    super(props);

    const leafPi = new LeafPi({
      buttonGetToken: document.getElementById("getToken"),
    });

    const gui = new GUI({
      container: document.getElementById("lightsWrapper"),
    });

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Lights />
      </Fragment>
    );
  }
}

export default App;
