import os
import requests
from flask import Flask, request, jsonify
from pydub import AudioSegment
import time
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Retrieve API keys from environment variables
ASSEMBLYAI_API_KEY = os.getenv('ASSEMBLYAI_API_KEY')
#OLLAMA_API_KEY = os.getenv('OLLAMA_API_KEY')

ASSEMBLYAI_API_URL = "https://api.assemblyai.com/v2"
OLLAMA_API_URL = " http://localhost:11434/api/generate"

@app.route('/api/voice_query', methods=['POST'])
def voice_query(): # Main function to handle voice query
    audio_file = request.files['audio']
    transcript = transcribe_speech(audio_file)
    response_text = query_ollama(transcript)
    audio_response = synthesize_speech(response_text)

    return jsonify({'transcript': transcript, 'response_text': response_text, 'audio_response': audio_response})

def transcribe_speech(audio_file): # Function to transcribe speech using AssemblyAI
    headers = {
        'authorization': ASSEMBLYAI_API_KEY,
        'content-type': 'application/json'
    }
    audio_data = audio_file.read()
    response = requests.post(f"{ASSEMBLYAI_API_URL}/upload", headers=headers, files={'file': audio_data})
    audio_url = response.json()['upload_url']

    response = requests.post(
        f"{ASSEMBLYAI_API_URL}/transcript",
        json={'audio_url': audio_url},
        headers=headers
    )
    transcript_id = response.json()['id']

    while True:
        response = requests.get(f"{ASSEMBLYAI_API_URL}/transcript/{transcript_id}", headers=headers)
        if response.json()['status'] == 'completed':
            return response.json()['text']
        elif response.json()['status'] == 'failed':
            return "Transcription failed"
        
        time.sleep(1)

def query_ollama(query): # Function to query Ollama API
    response = requests.post(
        OLLAMA_API_URL,
        json={'model':"llama3", 'prompt': query}
        #headers={'Authorization': f'Bearer {OLLAMA_API_KEY}'}
    )
    result = response.json()
    return result.get('response', '')

def synthesize_speech(text): # Function to synthesize speech using AssemblyAI
    headers = {
        'authorization': ASSEMBLYAI_API_KEY,
        'content-type': 'application/json'
    }
    response = requests.post(
        f"{ASSEMBLYAI_API_URL}/text-to-speech",
        json={'text': text},
        headers=headers
    )
    return response.content

if __name__ == '__main__': # Run the Flask app
    app.run(debug=True, port=5000)
