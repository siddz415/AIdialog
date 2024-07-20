# AIdialog
AIdialog is a live voice assistant application that leverages the capabilities of AssemblyAI for speech recognition and text-to-speech, and Ollama for natural language processing. This project provides a seamless interface for users to interact with AI through voice commands, and receive spoken responses.

# Table of Contents
Features
Technologies Used
Prerequisites
Installation
Running the Application
Usage
Project Structure
Contributing
License
Features
Voice-to-text transcription using AssemblyAI
Text-to-voice synthesis using AssemblyAI
Natural language processing with Ollama
Interactive voice-based query and response system
Technologies Used
Backend: Flask, Python, AssemblyAI API, Ollama API
Frontend: React, JavaScript, Axios
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14.x or later)
npm
Python (v3.7 or later)
pip
Installation
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/aidialog.git
cd aidialog
Navigate to the Backend Directory

bash
Copy code
cd backend
Create a Virtual Environment

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install Backend Dependencies

bash
Copy code
pip install -r requirements.txt
Create a .env File

Create a .env file in the backend directory and add your API keys:

makefile
Copy code
ASSEMBLYAI_API_KEY=your_assemblyai_api_key
OLLAMA_API_KEY=your_ollama_api_key
Frontend Setup
Navigate to the Frontend Directory

bash
Copy code
cd ../frontend
Install Frontend Dependencies

bash
Copy code
npm install
Running the Application
Start the Backend Server
bash
Copy code
cd backend
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
flask run
Start the Frontend Server
bash
Copy code
cd frontend
npm start
The frontend will run on http://localhost:3000 and the backend will run on http://localhost:5000.

# Usage
Open the Application

Navigate to http://localhost:3000 in your web browser.

Record and Submit a Voice Query

Use the recording button to capture your voice query and submit it.

Receive the Response

The system will transcribe your query, process it, and provide a spoken response.

# Project Structure
bash
Copy code
aidialog/
│
├── backend/
│   ├── app.py                # Flask application
│   ├── requirements.txt      # Backend dependencies
│   ├── .env                  # Environment variables
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── QueryForm.js   # Form for submitting voice queries
│   │   │   ├── ResponseDisplay.js  # Display the response
│   │   │   └── ...
│   │   ├── App.js            # Main React application
│   │   └── ...
│   ├── package.json          # Frontend dependencies
│   └── ...
│
├── README.md                 # Project documentation
└── ...
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.


