import React from "react";

const Audio = (props) => {
  let currentSound = props.sounds.filter(
    (sound) => sound.letter === props.letter
  )[0];
  return (
    <audio
      className="clip"
      id={currentSound.letter}
      src={currentSound.src}
      type="audio/mpeg"
    ></audio>
  );
};

export default Audio;
