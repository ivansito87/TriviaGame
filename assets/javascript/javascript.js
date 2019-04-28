var allQuestions = [{
    question: "Before Mt. Everest was discovered, whaich mountain was considered to be the highest mountain in the world?",
    choices: ["Mt. Kilimanjaro", "Kanchenjunga", "Mount Everest"],
    correctAnswer: 1
},

{
    question: "Does England have a 4th of July?",
    choices: ["Yes", "No", "I don't know"],
    correctAnswer: 0
},

{
    question: "What is Rupert the bear's middle name?",
    choices: ["Bear", "He doesn't have one!", "The", "Rupert"],
    correctAnswer: 2
},

{
    question: " What can you never eat for breakfast? ",
    choices: ["Dinner", "Something sugary", "Lunch", "Supper"],
    correctAnswer: 0
},

{
    question: "If there are three apples and you took two away, how many do you have?",
    choices: ["One", "Two", "None"],
    correctAnswer: 1
},

{
    question: "Spell 'Silk' out loud, 3 times in a row. What do cows drink?",
    choices: ["Milk", "Water", "Juice", "Cows can't drink"],
    correctAnswer: 1
},

{
    question: "Which is heavier, 100 pounds of rocks or 100 pounds of gold? ",
    choices: ["100 pounds of rocks", "100 pounds of rocks", "They weigh the same"],
    correctAnswer: 2
},

{
    question: "Can you spell 80 in two letters?",
    choices: ["AI-TY", "It's not possible", "EIGH-TY", "A-T"],
    correctAnswer: 3
},

{
    question: "What question must always be answered ''Yes''?",
    choices: ["What does Y-E-S spell?", "Will everyone die someday?", "Does everyone have a biological mother?", "Are you a human?"],
    correctAnswer: 0
},

{
    question: "How many sides does a circle have?",
    choices: ["The back", "None. It's a circle", "Two", "Four"],
    correctAnswer: 2
},

{
    question: "What has a tail but no body?",
    choices: ["A human", "A coin", "A cloud"],
    correctAnswer: 1
},

{
    question: "What word in the English language is always spelled incorrectly?",
    choices: ["It's possible to spell anything right as long as you learn it", "Shakespeare", "Onomatopoeia", "Incorrectly"],
    correctAnswer: 3
},

{
    question: "When do you stop at green and go at red?",
    choices: ["Watermelon!", "Traffic light!", "Garden"],
    correctAnswer: 0
},

{
    question: "What rotates but still remains in the same place?",
    choices: ["Bottle (spin the bottle game)", "Clock", "Stairs"],
    correctAnswer: 2
},

{
    question: "How can you lift an elephant with one hand?",
    choices: ["Truck", "Use both hands!", "Use a lever", "There is no such thing"],
    correctAnswer: 3
}
];

var currentQuestion = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('Taking a break...');
    await sleep(3000);
    console.log('Two seconds later');
    nextQuestion();
}


$(document).ready(function () {
    $(".btns").on("click", function () {
       
       
       
       
       
       
        console.log("Working!")
        gameStarts();
    
    
    
    });
});

function gameStarts() {
    $("#question").text(allQuestions[0].question);
    $(".btns").hide();
    renderChoices();
}

function renderChoices() {
    let count = 0;
    allQuestions[currentQuestion].choices.forEach(function (element) {
        console.log(element);
        $("#choice" + count).text(`\u21D2 ${element}`); 
       count++;
    });

}

function userChoice(userPicked) {
    clearChoices();

    console.log("testing user" + userPicked);
    console.log("testing machine" + allQuestions[currentQuestion].correctAnswer);
    allQuestions[currentQuestion].correctAnswer
    if (parseInt(userPicked) === allQuestions[currentQuestion].correctAnswer) {   
    console.log("works!")
        $("#question").text(`Yup! you got it right. `);
    } else {
        $("#question").text(`Nope! the correct answer is: ` + allQuestions[currentQuestion].choices[allQuestions[currentQuestion].correctAnswer]);
    }
    if (currentQuestion < allQuestions.length) {
        currentQuestion ++;
    } else { gameEnds();

    }
    demo();
    
}

$(".choices").on("click", function () {
    let userPicked = $(this).attr("data-answer");
    console.log(userPicked);
    userChoice(userPicked); 
    
});

function clearChoices() {
    $(".choices").text("");
}

function gameEnds() {
    console.log("Game over!");
}

function nextQuestion() {
    $("#question").text(allQuestions[currentQuestion].question);
    renderChoices();
}





$(document).scroll(function() {
  navbarScroll();
});

function navbarScroll() {
  var y = window.scrollY;
  if (y > 10) {
    $('.header').addClass('small');
  } else if (y < 10) {
    $('.header').removeClass('small');
  }
}