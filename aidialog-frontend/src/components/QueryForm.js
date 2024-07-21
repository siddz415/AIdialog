import React, { useState } from 'react';
import "../css/QueryForm.css"
import axios from 'axios';


const QueryForm = ({ onSubmits }) => {
  const [recording, setRecording] = useState(false);
  const [audioFile, setAudioFile] = useState(null);

  const handleRecordClick = () => {
    if (recording) {
      // Stop recording
      setRecording(false);
      setAudioFile(audioFile);
      
    } else {
      // Start recording
      setRecording(true);
    }
  };
  const [response, setResponse] = useState(null);
  const handleQuerySubmit = async (audioFile) => {
      const formData = new FormData();
      formData.append('audio', audioFile);
    
      console.log(audioFile);
  
      try {
        const res = await axios.post('http://localhost:5000/api/voice_query', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setResponse(res.data);
      } catch (error) {
        console.error('Error fetching response:', error);
      }
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleQuerySubmit(audioFile);
  };

  return (
    <div className='query-form'>
      <div className='query-heading'>
        <h2>Query</h2>
      </div>
      <div className='query-body'>
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={handleRecordClick}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button type="submit" >
        Submit
      </button>
    </form></div></div>
  );
};

export default QueryForm;


   