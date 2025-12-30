const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
const PORT = 3000;

const answer = [
    "Yes",
    "Yessir",
    "No sir",
    "It is certain",
    "No",
    "Don't count on it",
    "Ask again later",
    "Cannot predict now",
    "Hell Yeah!",
    "Hell No!",
    "Definitely",
    "Maybe",
    "It is doubtful"
];

//helmet to add security headers
app.use(helmet());

//static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

//API endpoint to get random answer
app.get('/api/random-answer', (req, res) => {
    const randomAnswer = answer[Math.floor(Math.random() * answer.length)];
    res.json({answer: randomAnswer});
});

//handle errors
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
});



//Start the server
app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});

