import React, { useState } from "react";

const Volume = ({ power }) => {
  const [volume, setVolume] = useState(30);

  const updateVolume = (e) => {
    if (power) {
      setVolume(Number(e.target.value));
      if (volume === -1) {
        setVolume(0);
      }
      document
        .querySelectorAll(".clip")
        .forEach((clip) => (clip.volume = volume / 100));
      document.querySelector(".sounds-names p").innerHTML = `volume: ${volume}`;
      setTimeout(function () {
        document.querySelector(".sounds-names p").innerHTML = "";
      }, 1000);
    }
  };

  return (
    <div className="volume">
      <input
        type="range"
        id="vol"
        name="vol"
        min="-1"
        max="100"
        value={volume}
        onChange={updateVolume}
        step="-1"
      />
    </div>
  );
};

export default Volume;
