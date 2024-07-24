import React from 'react';
import "../css/ResponseDisplay.css";


const ResponseDisplay = ({ response }) => {
  return (
    <div className="response-container">
      <div className='resp-heading'><h2>Response</h2></div>
      <div className='resp-body'>
      {response ? (
        <div>
          <p>{response.transcript}</p>
          <p>{response.response_text}</p>
          <div className="audio-player">
            <audio controls src={`data:audio/mp3;base64,${response.audio_response}`} />
          </div>
        </div>
      ) : (
        <p>No response yet.</p>
      )}
    </div></div>
  );
};

export default ResponseDisplay;

