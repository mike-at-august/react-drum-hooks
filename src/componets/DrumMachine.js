import React, { useState } from "react";
import Display from "./Display";
import DrumPads from "./DrumPads";

const DrumMachine = ({ sounds }) => {
  const [bank, setBank] = useState(false);
  const [power, setPower] = useState(true);

  const switchPower = () => {
    let powerButton = document.querySelector(".power button .square");
    if (power) {
      setPower(false);
      powerButton.style.transform = "translateX(0%)";
      document.querySelector(".sounds-names p").innerHTML = "";
    } else {
      setPower(true);
      powerButton.style.transform = "translateX(100%)";
    }
  };

  const changeBank = () => {
    if (power) {
      setBank(!bank);
      if (!bank) {
        document.querySelector(".bank .square").style.transform =
          "translateX(100%)";
      } else {
        document.querySelector(".bank .square").style.transform =
          "translateX(0%)";
      }
    }
  };

  return (
    <div
      id="drum-machine"
      className="d-flex justify-content-between align-items-center"
    >
      <DrumPads
        sounds={bank ? sounds.secondSounds : sounds.firstSounds}
        power={power}
      />
      <Display
        changeBank={changeBank}
        switchPower={switchPower}
        power={power}
      />
    </div>
  );
};

export default DrumMachine;
