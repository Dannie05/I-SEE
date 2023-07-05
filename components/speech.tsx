import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const sppechRecognise= window.SpeechRecognitionResult
export default function Speech() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <p>speech to text unsupported by browser</p>;
  }
  return (
    <div className="self-center">
      <p>microphone:{listening ? "on" : "off"}</p>
      <button
        className="border mx-4 "
        onClick={()=>SpeechRecognition.startListening()}
      >
        start
      </button>
      <button
        className="border mx-4 "
        onClick={SpeechRecognition.stopListening}
      >
        stop
      </button>
      <button className="border mx-4 " onClick={resetTranscript}>
        reset
      </button>
      <p className="text-center ">{transcript}</p>
    </div>
  );
}
