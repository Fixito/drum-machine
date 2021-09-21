import React, { useState, useEffect } from "react";
import "./DrumPad.css";

function DrumPad({ keyTrigger, id, url, handleClick }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    handleClick(keyTrigger);
    setIsPlaying(true);
  };

  const handleKeyPress = (e) => {
    if (e === keyTrigger) {
      play();
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      handleKeyPress(e.key.toUpperCase());
    });

    return () =>
      window.removeEventListener("keypress", (e) => {
        handleClick(e.key.toUpperCase());
      });
  });

  const removeTransition = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="drum-pad"
      id={id}
      onClick={play}
      onTransitionEnd={removeTransition}
      style={{ backgroundColor: isPlaying ? "orange" : "" }}
    >
      <audio src={url} className="clip" id={keyTrigger}></audio>
      {keyTrigger}
    </div>
  );
}

export default DrumPad;
