import React from "react";
import Volume from "./Volume";

class Display extends React.Component {
  render() {
    return (
      <div id="display">
        <div className="power">
          <p>Power</p>
          <button className="switchPower" onClick={this.props.switchPower}>
            <div className="square"></div>
          </button>
        </div>
        <div className="sounds-names">
          <p></p>
        </div>
        <Volume power={this.props.power} />
        <div className="bank">
          <p>Bank</p>
          <button onClick={this.props.changeBank}>
            <div className="square"></div>
          </button>
        </div>
      </div>
    );
  }
}

export default Display;
