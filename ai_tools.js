
// AI Tools Integration

async function playTextToSpeech() {
    const text = document.getElementById("reading-text").textContent;

    try {
        const response = await fetch("https://api.freetts.com/v1/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: text, // The text you want to convert to speech
                voice: "en-US", // Language and accent (change as needed)
                speed: 1.0, // Speaking speed (1.0 is normal)
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch audio from Free TTS.");
        }

        const data = await response.json();

        // Play the returned audio URL
        const audio = new Audio(data.audioUrl);
        audio.play();
    } catch (error) {
        console.error("Error with Free TTS API:", error);
        alert("There was an issue generating speech. Please try again.");
    }
}


function startSpeechRecognition() {
    console.log("Speech recognition started.");
    alert("Start speaking... (Placeholder for Speech Recognition API)");
}

function analyzePronunciation() {
    const text = document.getElementById("reading-text").textContent;
    console.log("Analyzing pronunciation for: " + text);
    alert("Analyzing pronunciation... (Placeholder for Pronunciation API)");
}
