document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    const gameContainer = document.getElementById('game-container');

    // Initial game setup
    const welcomeMessage = 'In a world where words have power, a legendary wordsmith has disappeared, leaving behind a series of cryptic clues that only a true wordsmith can decipher... Are you up to the challenge?'
    typeWriter(welcomeMessage);


    // Event listener for user input
    input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleInput(input.value);
            input.value = '';
        }
    });

    // Function to handle user input and update game output
    function handleInput(inputText) {

        // Process the input and generate the appropriate response
        const response = processInput(inputText);

        // Display user input
        output.innerHTML += `<p>> ${inputText}</p>`;

        // Simulate typewriter effect for the computer's response
        typeWriter(response);
    }

    // Function to simulate typewriter effect
    function typeWriter(text) {
        let index = 0;
        const speed = 40; //(lower value for faster typing)

        function type() {
            if (index < text.length) {
                output.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    }


    // Function to process user input and generate a response
    function processInput(inputText) {
        // Check inputText against expected answers and return the corresponding response

        if (inputText.toLowerCase() === 'yes' || inputText.toLowerCase() === "y") {
            return puzzleOne()
        }
        else if (inputText.toLowerCase() === "hello" || inputText.toLowerCase() === "hi") {
            return "Do you care to answer my question? Are you ready?"
        }
        else if (inputText.toLowerCase() === "okay" || inputText.toLowerCase() === "ok") {
            return puzzleOne()
        }
        else if (inputText.toLowerCase() === "no" || inputText.toLowerCase() === "n") {
            return "What a shame, maybe some other time"
        }
         else {
            return "I didn't understand that.";
        }
    }

    function puzzleOne() {
        return "The Enchanted Garden: A mystical creature whispers, 'In this room, a secret does loom.' The flowers respond, revealing the secret of growth. Find the word that makes the flowers respond and proceed."
    }
});