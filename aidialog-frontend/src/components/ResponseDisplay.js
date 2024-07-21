import React from 'react';


const ResponseDisplay = ({ response }) => {
  return (
    <div className="response-container">
      <h2>Response</h2>
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
    </div>
  );
};

export default ResponseDisplay;

