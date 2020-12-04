import React from "react";
import ReactDOM from "react-dom";
import DrumMachine from "./componets/DrumMachine";
import "./style.css";

document.querySelectorAll(".clip").forEach((clip) => (clip.volume = 0.3));

const sounds = {
  firstSounds: [
    {
      letter: "Q",
      name: "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      letter: "W",
      name: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      letter: "E",
      name: "Heater 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      letter: "A",
      name: "Heater 4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      letter: "S",
      name: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      letter: "D",
      name: "Open HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      letter: "Z",
      name: "Kick n'Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      letter: "X",
      name: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      letter: "C",
      name: "Closed HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ],
  secondSounds: [
    {
      letter: "Q",
      name: "Chord 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      letter: "W",
      name: "Chord 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      letter: "E",
      name: "Chord 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      letter: "A",
      name: "Shaker",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      letter: "S",
      name: "Open HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      letter: "D",
      name: "Closed HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      letter: "Z",
      name: "Punchy Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      letter: "X",
      name: "Side Stick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      letter: "C",
      name: "Snare",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <DrumMachine sounds={sounds} />
  </React.StrictMode>,
  document.getElementById("root")
);
