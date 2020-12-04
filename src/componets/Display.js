import React from "react";
import Volume from "./Volume";

const Display = ({ changeBank, switchPower, power }) => {
  return (
    <div id="display">
      <div className="power">
        <p>Power</p>
        <button className="switchPower" onClick={switchPower}>
          <div className="square"></div>
        </button>
      </div>
      <div className="sounds-names">
        <p></p>
      </div>
      <Volume power={power} />
      <div className="bank">
        <p>Bank</p>
        <button onClick={changeBank}>
          <div className="square"></div>
        </button>
      </div>
    </div>
  );
};

export default Display;
