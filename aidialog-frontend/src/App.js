import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file
import QueryForm from './components/QueryForm';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {
  const [response, setResponse] = useState(null);

  const handleQuerySubmit = async (audioFile) => {
    const formData = new FormData();
    formData.append('audio', audioFile);

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
    <div className="app-container">
      <h1>AIdialog</h1>
      <QueryForm onSubmit={handleQuerySubmit} />
      <div className="response-container">
        <ResponseDisplay response={response} />
      </div>
    </div>
  );
};

export default App;

