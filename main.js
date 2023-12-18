document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    const gameContainer = document.getElementById('game-container');

    // Initial game setup
    output.innerHTML = 'In a world where words have power, a legendary wordsmith has disappeared, leaving behind a series of cryptic clues that only a true wordsmith can decipher.';

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
        const speed = 50; // Adjust the speed as needed (lower value for faster typing)

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
        // Add your word puzzle logic here
        // You can check inputText against expected answers and return the corresponding response

        // For example:
        if (inputText.toLowerCase() === 'hello') {
            return 'Hi there!';
        } else {
            return "I didn't understand that.";
        }
    }
});
