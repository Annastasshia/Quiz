
//Variables for start button and set timer

var quizBtn = document.querySelector("#startButton");
var timeEl = document.querySelector("#timer");
var secondsLeft = 1000*60;

quizBtn.addEventListener("click", function() {
    console.log("ive been clicked");
    $("#intro").hide();
    $("#startButton").hide();
    $("#nextButton").text("Next Question");
    startQuiz();
    coundownTimer();
});

var nextBtn = document.querySelector("#nextButton");

nextBtn.addEventListener("click", function() {
  $("#answerCheck").empty()
  startQuiz();
});

//Quiz timer
function coundownTimer() {
  var counter = 60;
  var interval = setInterval(function() {
    counter--;
    
    if (counter <= 0) {
     		clearInterval(interval);
      	$('#timer').text("--");  
        return;
    }else{
    	$('#timer').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1000);
 }
  

//Variables for high scores
var highscore = $("#highscore");
var scoreList = [];
let score = 0
var highScoresBtn = document.getElementById("highscores");
let storedArray = JSON.parse(window.localStorage.getItem(scoreList));

// variables for the quiz
var question = document.getElementById("question");
var choices = document.getElementById("answerChoices");

// Question Bank Array
var questions = [
    {question: "What does the acronym DOM stand for?",
      a: "Driving over Muffins",
      b: "Delivering Optimistic Monkeys",
      c: "Document Object Model",
      d: "Data Ordinance Machine",
      correctAnswer: "Document Object Model",
      wrongReply: "YOU ARE INCORRECT! Choice 'c' is the correct answer.",
      rightReply: "YOU ARE CORRECT!",
      
    },
    {question: " The JSON.stringify() method converts a JavaScript object or value into a what?",
      a: "string",
      b: "container",
      c: "array",
      d: "class",
      correctAnswer: "string",
      wrongReply: "YOU ARE INCORRECT! Choice 'a' is the correct answer.",
      rightReply: "YOU ARE CORRECT!",
      
    },
    {question: "what is the meaning of a || operation? ",
      a: "both",
      b: "and",
      c: "also",
      d: "or",
      correctAnswer: "or",
      wrongReply: "YOU ARE INCORRECT! Choice 'd' is the correct answer.",
      rightReply: "YOU ARE CORRECT!",
     
    },
    {question: "what does shadowing mean?",
      a: "overriding prestored functions with something else ",
      b: "copy another persons code",
      c: "to create spyware",
      d: "to save versions of your code",
      correctAnswer: "overriding prestored functions with something else ",
      wrongReply: "YOU ARE INCORRECT! Choice 'a' is the correct answer.",
      rightReply: "YOU ARE CORRECT!",
      
    },
    {question: "what is the meaning of a || operation? ",
      a: "both",
      b: "and",
      c: "also",
      d: "or",
      correctAnswer: "or",
      wrongReply: "YOU ARE INCORRECT! Choice 'd' is the correct answer.",
      rightReply: "YOU ARE CORRECT!",
     
    },
    
];

//variables for answer choice buttons
var aSelected = document.querySelector("#a");
var bSelected = document.querySelector("#b");
var cSelected = document.querySelector("#c");
var dSelected = document.querySelector("#d");
var userSelected = ""
var i = 0

//function to begin quiz
  function startQuiz() {
      
      $("#question").text(questions[i].question)
      $("#a").text("a: " + questions[i].a);
      $("#b").text("b: " + questions[i].b);
      $("#c").text("c: " + questions[i].c);
      $("#d").text("d: " + questions[i].d);

      aSelected.addEventListener("click", function() {
        event.stopPropagation();
        console.log("User answer has picked choice: a");
        userSelected = questions[i].a
        checkAnswer();
      });

      bSelected.addEventListener("click", function() {
        event.stopPropagation();
        console.log("User answer has picked choice: b");
        userSelected = questions[i].b
        checkAnswer();
      });

      cSelected.addEventListener("click", function() {
        event.stopPropagation();
        console.log("User answer has picked choice: c");
        userSelected = questions[i].c
        checkAnswer();
      });

      dSelected.addEventListener("click", function() {
        event.stopPropagation();
        console.log("User answer has picked choice: d");
        userSelected = questions[i].d
        checkAnswer();
      });
      
      //check it see if selection was correct
    function checkAnswer () {
      console.log(userSelected.text);

      if (userSelected === questions[i].correctAnswer) {
        score ++;
        $("#score").append(score);
        $("#answerCheck").append(questions[i].rightReply);
        i++;
      } else {
        $("#answerCheck").append(questions[i].wrongReply);
        i++;
      } 
    }
};

//I tried a for loop and it displayed all the questions at once :( Still working on it sorry)