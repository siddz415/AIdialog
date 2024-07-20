import React from 'react';

const ResponseDisplay = ({ response }) => {
  return (
    <div>
      <h2>Response</h2>
      {response ? (
        <div>
          <p>{response.transcript}</p>
          <p>{response.response_text}</p>
          <audio controls src={`data:audio/mp3;base64,${response.audio_response}`} />
        </div>
      ) : (
        <p>No response yet.</p>
      )}
    </div>
  );
};

export default ResponseDisplay;
