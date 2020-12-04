import React from "react";
import Audio from "./Audio";

const DrumPads = ({ power, sounds }) => {
  const playAudio = (e) => {
    if (power) {
      let letter = e.target.textContent;
      document.getElementById(letter).currentTime = 0;
      document.getElementById(letter).play();
      e.target.style.backgroundColor = "#85D4FF";
      setTimeout(function () {
        e.target.style.backgroundColor = "#00507A";
      }, 100);
      let currentText = sounds.filter((sound) => sound.letter === letter)[0]
        .name;
      document.querySelector(".sounds-names p").innerHTML = currentText;
    }
  };

  return (
    <div id="drum-pads">
      <div className="row">
        <button className="drum-pad btn" onClick={playAudio} id="Q-btn">
          Q
          <Audio sounds={sounds} letter="Q" />
        </button>
        <button className="drum-pad btn" onClick={playAudio} id="W-btn">
          W
          <Audio sounds={sounds} letter="W" />
        </button>
        <button className="drum-pad btn" onClick={playAudio} id="E-btn">
          E
          <Audio sounds={sounds} letter="E" />
        </button>
      </div>
      <div className="row">
        <button className="drum-pad btn" onClick={playAudio} id="A-btn">
          A
          <Audio sounds={sounds} letter="A" />
        </button>
        <button className="drum-pad btn" onClick={playAudio} id="S-btn">
          S
          <Audio sounds={sounds} letter="S" />
        </button>
        <button className="drum-pad btn" onClick={playAudio} id="D-btn">
          D
          <Audio sounds={sounds} letter="D" />
        </button>
      </div>
      <div className="row">
        <button className="drum-pad btn" onClick={playAudio} id="Z-btn">
          Z
          <Audio sounds={sounds} letter="Z" />
        </button>
        <button className="drum-pad btn" onClick={playAudio} id="X-btn">
          X
          <Audio sounds={sounds} letter="X" />
        </button>
        <button className="drum-pad btn" onClick={playAudio} id="C-btn">
          C
          <Audio sounds={sounds} letter="C" />
        </button>
      </div>
    </div>
  );
};

export default DrumPads;
