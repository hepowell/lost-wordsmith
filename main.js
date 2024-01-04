document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    const gameContainer = document.getElementById('game-container');

    // Initial game setup
    const welcomeMessage = 'In a world where words have power, a legendary wordsmith has disappeared, leaving behind a series of cryptic clues that only a true wordsmith can decipher... Are you up to the challenge?'
    typeWriter(welcomeMessage);

    let puzzle = 0; // 0 means not in a puzzle

    input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            if (puzzle === 0) {
                handleInput(input.value);
            } else if (puzzle === 1) {
                puzzleOneAnswer(input.value);
            } else if (puzzle === 2) {
                puzzleTwoAnswer(input.value);
            } else if (puzzle === 3) {
                puzzleThreeAnswer(input.value);
            }
            input.value = '';
        }
    });

    function handleInput(inputText) {
        // Process the input and generate the appropriate response
        const response = processInput(inputText);

        // Display user input
        output.innerHTML += `<p>> ${inputText}</p>`;

        // Simulate typewriter effect for the computer's response
        typeWriter(response);
    }

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

    function clearInput() {
        input.value = '';
    }

    function processInput(inputText) {
        if (inputText.toLowerCase() === "yes" || inputText.toLowerCase() === "y") {
            return startGame();
        }
        else if (inputText.toLowerCase() === "help" || inputText.toLowerCase() === "h") {
            return "This is a series of puzzles, there is a clue to the answer in each question. Read carefully.";
        }
        else {
            return "Please type 'yes' or 'y' to start the game.";
        }
    }

    function startGame() {
        clearInput();
        puzzle = 1;
        return puzzleOne();
    }

    function puzzleOne() {
        clearInput();
        const questionOne = "\n \n The Enchanted Forest: A mystical creature whispers, 'In this room, a secret does loom.' The flowers respond, revealing the secret of growth. Find the word that makes the flowers respond and proceed."
        output.innerHTML += `<p>> ${questionOne}</p>`
    }

    function puzzleOneAnswer(answer) {
        if (answer.trim().toLowerCase() === "bloom") {
            puzzle = 2;
            puzzleTwo();
        } else {
            output.innerHTML += "<p>> Incorrect answer. Try again.</p>";
        }
    }

    function puzzleTwo() {
        // Implement the logic for the second puzzle here
        clearInput();
        const questionTwo = "\n \n The Garden of the Lost: A snake is hanging from a forbidden tree disguised as a vine. The snake hisses, 'Madam, in Eden, I'm Adam.' The tree responds, revealing the secret of the forbidden fruit. 'And who are you?' the snake asks. Find the word that makes the tree respond and proceed."
        output.innerHTML += `<p>> ${questionTwo}`
    }

    function puzzleTwoAnswer(answer) {
        if (answer.trim().toLowerCase() === "eve") {
            puzzle = 3;
            puzzleThree();
        } else {
            output.innerHTML += "<p>> Incorrect answer. Try again.</p>";
        }
    }

    function puzzleThree() {
        // Implement the logic for the third puzzle here
        clearInput();
        const questionThree = "Your third puzzle goes here."
        output.innerHTML += `<p>> ${questionThree}`
    }
});

