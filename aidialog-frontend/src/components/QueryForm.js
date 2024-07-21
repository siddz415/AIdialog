import React, { useState } from 'react';


const QueryForm = ({ onSubmit }) => {
  const [recording, setRecording] = useState(false);
  const [audioFile, setAudioFile] = useState(null);

  const handleRecordClick = () => {
    if (recording) {
      // Stop recording
      setRecording(false);
    } else {
      // Start recording
      setRecording(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(audioFile);
  };

  return (
    <form className="query-form" onSubmit={handleSubmit}>
      <button type="button" onClick={handleRecordClick}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button type="submit" disabled={!audioFile}>
        Submit
      </button>
    </form>
  );
};

export default QueryForm;


   