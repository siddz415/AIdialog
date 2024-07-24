import React, { useState } from 'react'
import "../css/Container.css";
import ResponseDisplay from './ResponseDisplay';
import axios from 'axios';
import AudioRecorder from './Audio/AudioRecorder';
const Container = () => {
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
  return (
    <div className='main-container'>
        <div className='query-disp'>
            {/* <QueryForm onSubmit={handleQuerySubmit}/> */}
            <AudioRecorder onSubmits={handleQuerySubmit}/>
        </div>

        <div className='response-disp'>
            <ResponseDisplay response={response}/>
        </div>
    </div>
  )
}

export default Container