import React from "react";
import DrumPad from "./DrumPad";
import "./DrumMachine.css";

function DrumMachine() {
  const bankOne = [
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Kick-n-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const handleClick = (keyTrigger) => {
    const audio = document.querySelector(`#${keyTrigger}`);
    const display = document.querySelector(`#display`);

    audio.currentTime = 0; // Rewind to the start
    if (!audio) return; // Stop the function from running all together
    audio.play().catch((e) => {
      console.log(e);
    });
    display.innerHTML = audio.parentNode.id;
  };

  return (
    <div id="drum-machine">
      <div className="left-board">
        {bankOne.map((key) => {
          const { keyCode, keyTrigger, id, url } = key;

          return (
            <DrumPad
              key={id}
              id={id}
              keyCode={keyCode}
              keyTrigger={keyTrigger}
              url={url}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      <div className="right-board">
        <div id="display"></div>
      </div>
    </div>
  );
}

export default DrumMachine;
