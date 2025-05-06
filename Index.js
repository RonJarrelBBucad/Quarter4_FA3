<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shape Generator & Contacts List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #shapeOutput {
            margin-top: 20px;
            font-family: monospace;
            white-space: pre;
        }
        #contactsSection {
            margin-top: 40px;
        }
        #output {
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Shape Generator</h1>
    <div id="shapeOutput"></div>

    <div id="contactsSection">
        <h2>Contacts List Manager</h2>
        <input type="text" id="nameInput" placeholder="Enter name">
        <button onclick="addContact()">Add</button>
        <button onclick="removeContact()">Remove</button>
        <p id="output">Contacts: </p>
    </div>

    <script>
        // PART 1: Shape Generator
        let userInput;
        do {
            userInput = prompt("Please enter a number:");
        } while (isNaN(userInput) || userInput.trim() === "");

        const number = parseInt(userInput);
        const shapeDiv = document.getElementById("shapeOutput");
        shapeDiv.innerHTML += "Number inputted: " + number + "\n";

        if (number % 2 !== 0) {
            // Odd: Rectangle
            for (let i = number; i >= 1; i--) {
                let line = "";
                for (let j = 0; j < number; j++) {
                    line += i + " ";
                }
                shapeDiv.innerHTML += line.trim() + "\n";
            }
        } else {
            // Even: Triangle
            for (let i = number; i >= 1; i--) {
                let line = "";
                for (let j = 0; j < i; j++) {
                    line += i + " ";
                }
                shapeDiv.innerHTML += line.trim() + "\n";
            }
        }

        // PART 2: Contacts List Manager
        let contacts = [];

        function updateDisplay() {
            document.getElementById("output").innerText = "Contacts: " + contacts.join(", ");
        }

        function addContact() {
            const name = document.getElementById("nameInput").value.trim();
            if (name === "") return;

            if (contacts.length === 7) {
                contacts.shift(); // remove first
            }
            contacts.push(name);
            updateDisplay();
            document.getElementById("nameInput").value = ""; // clear input
        }

        function removeContact() {
            contacts.pop(); // remove last
            updateDisplay();
        }
    </script>
</body>
</html>
