import { useState, useEffect } from "react";

const Reader = ({text}) => {
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      setSynth(synth);
    }
  }, []);

  const speakText = (text) => {
    if (synth && synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };
};
