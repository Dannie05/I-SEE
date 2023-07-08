import { useEffect, useState } from "react";

export default function SpeechToText() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  let recognition = null;

  useEffect(() => {
    const initializeRecognition = () => {
      recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = (event) => {
        const interimTranscript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");

        setTranscript(interimTranscript);
      };
    };

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      initializeRecognition();
    } else {
      console.error("Speech recognition not supported by the browser.");
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const handleStartListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const handleStopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div>
      <button className="border mx-4" onClick={handleStartListening} disabled={listening}>
        Start
      </button>
      <button className="border mx-4 cursor-pointer" onClick={handleStopListening} disabled={!listening}>
        Stop
      </button>
      {listening && <p>Listening...</p>}
      <p>{transcript}</p>
    </div>
  );
}
