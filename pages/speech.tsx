import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone1 = () => {
const [message, setMessage] = useState('');
const commands = [
   {
     command: 'reset',
     callback: () => resetTranscript()
   },
   {
     command: 'shut up',
     callback: () => setMessage('I wasn\'t talking.')
   },
   {
     command: 'Hello',
     callback: () => setMessage('Hi there!')
   },
]
const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
} = useSpeechRecognition({ commands });

useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
}, [interimTranscript, finalTranscript]);
if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   return null;
}

if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
}
const listenContinuously = () => {
   SpeechRecognition.startListening({
     continuous: true,
     language: 'en-GB',
   });
};
return (
   <div>
     <div>
       <span>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
       </span>
       <div>
         <button className="uppercase btn btn-sm border bg-secondary-color cursor-pointer text-white my-1.5 active:opacity-0 dark:text-white py-2 px-8 rounded-lg w-full"
                   style={{ letterSpacing: 1, backgroundColor: "#008000" }} type="button" onClick={resetTranscript}>Reset</button>
         <button className="uppercase btn btn-sm border bg-secondary-color cursor-pointer text-white my-1.5 active:opacity-0 dark:text-white py-2 px-8 rounded-lg w-full"
                   style={{ letterSpacing: 1, backgroundColor: "#008000" }} type="button" onClick={listenContinuously}>Listen</button>
         <button className="uppercase btn btn-sm border bg-secondary-color cursor-pointer text-white my-1.5 active:opacity-0 dark:text-white py-2 px-8 rounded-lg w-full"
                   style={{ letterSpacing: 1, backgroundColor: "#008000" }} type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
       </div>
     </div>
     <div>
       {message} message
     </div>
     <div>
       <span>{transcript} transcript</span>
     </div>
   </div>
);
};

export default Dictaphone1;