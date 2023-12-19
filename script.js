function speakText() {
    const textToSpeak = document.getElementById('textToSpeak').value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Optional: Configure voice and other settings if needed
    // utterance.voice = speechSynthesis.getVoices()[0];
    // utterance.rate = 1; // Speed

    speechSynthesis.speak(utterance);
}
