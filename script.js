const micBtn = document.getElementById('mic-btn');
const outputDiv = document.getElementById('output');
const infoDiv = document.getElementById('info');
const micIcon = document.getElementById('mic-icon');

let recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.maxResults = 10;

let isListening = false;

const startRecognition = () => {
    recognition.start();
    micIcon.classList.add('listening');
    isListening = true;
}

const stopRecognition = () => {
    recognition.stop();
    micIcon.classList.remove('listening');
    isListening = false;
}

const displayInfo = (message, textColor) => {
    infoDiv.style.display = "inline-block";
    infoDiv.style.color = textColor;
    infoDiv.innerText = message;
    setTimeout(() => {infoDiv.style.display = "none"}, 3000);
}

micBtn.addEventListener('click', () => {
    if (isListening) {
        stopRecognition();
    } else {
        startRecognition();
    }
});

recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    outputDiv.innerText = `You said: ${transcript}`;

    // Navigate to other pages based on voice command
    switch (transcript.toLowerCase()) {
        case 'play gaming radio':
            window.location.href = 'C:/Users/vp1sh/OneDrive/Desktop/Ai Radio/Ai Radio/Game Radio/index.html';
            break;
        case 'play portuguese radio':
            window.location.href = 'C:/Users/vp1sh/OneDrive/Desktop/Ai Radio/Ai Radio/Portugese Radio/indexpor.html';
            break;
        case 'portuguese radio':
            window.location.href = 'C:/Users/vp1sh/OneDrive/Desktop/Ai Radio/Ai Radio/Portugese Radio/indexpor.html';
            break;
        case 'open portuguese radio':
            window.location.href = 'C:/Users/vp1sh/OneDrive/Desktop/Ai Radio/Ai Radio/Portugese Radio/indexpor.html';
            break;
        case 'gaming radio':
            window.location.href = 'C:/Users/vp1sh/OneDrive/Desktop/Ai Radio/Ai Radio/Game Radio/index.html';
            break;
        case 'open gaming radio':
             window.location.href = 'C:/Users/vp1sh/OneDrive/Desktop/Ai Radio/Ai Radio/Game Radio/index.html';
            break;
        default:
            outputDiv.innerText += ' (Invalid command)';
    }
};

recognition.onerror = event => {
    console.error('Error occurred:', event);
};