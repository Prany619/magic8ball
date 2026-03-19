//Array of outcomes
const answer = [
    "Yes",
    "Yessir",
    "It is decidely so",
    "Without a doubt",
    "Most likely",
    "Unlikely",
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
    "It is doubtful",
    "Reply hazy, try again",
    "My reply is no"
];

document.getElementById("response").innerHTML=answer;

/*
Allow program to display different/random answers when user clicks the enter button
Remove the "8" in the middle when user clicks enter
Reset after a couple of seconds
Allow there to be a click sound when user hits Enter
*/

let questionsHistory = [];

function randomAnswer (){
    
    const ball = document.querySelector(".ball");
    const responseElement = document.getElementById("response");

    //add shake animation
    ball.classList.add("ball-shake");

    //remove shake animation when user done turn
    setTimeout(() => {
        ball.classList.remove("ball-shake");
    }, 500);

    const clickSound = document.getElementById("clickSound");
    clickSound.play();

    //Fade-out current response
    //.animate() is Web Animations API
    responseElement.animate(
        [
            {opacity: 0},
            {opacity: 1}    
        ],
        {duration: 1000, fill: "forwards"}
    );

    //Reset the response after the delay
    setTimeout(() => {
        responseElement.animate(
            [
                {opacity: 1},
                {opacity: 0}
            ],
            {duration: 1000, fill: "forwards"}
        ).onfinish = () => {
            //Once faded, reset to "8"
            responseElement.innerHTML = "8";
            responseElement.style.fontSize = "120px";

            //Fade in the "8"
            responseElement.animate(
                [
                    {opacity: 0},
                    {opacity: 1}
                ],
                {duration: 1000, fill: "forwards"}
            );
        };
    }, 4000);

    answer.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=answer[0];
    document.getElementById("response").style.fontSize="20px";
    setTimeout(timeup, 4000);

    function timeup(){
        document.getElementById("response").innerHTML="8";
        document.getElementById("response").style.fontSize="120px";
        document.getElementById("clear").value="";
    }
}