const question = document.querySelector('.question_container');
const choiceA = document.querySelector('.choiceA');
const choiceB = document.querySelector('.choiceB');
const choiceC = document.querySelector('.choiceC');
const choiceD = document.querySelector('.choiceD');
const progressBarFull = document.getElementById('progressBarFull');
const score = document.querySelector('.score');
const progressText = document.getElementById('progressText');
const quizContainer = document.querySelector('.quiz_container');
const startBtn = document.querySelector('.startBtn');
const nextBtn = document.querySelector('.nextBtn');
const loader = document.querySelector('.loader');

var currentQuestion;



let totalQuestions = [
    {
        question: "Which of the following card games revolves around numbers and basic math?",
        choiceA: "Go Fish",
        choiceB: "Twister",
        choiceC: "Munchkin",
        choiceD: "Uno",
        correct: "D"
    },
    {
        question: "What is the nickname of the US state of California?",
        choiceA: "Bay Area",
        choiceB: "Golden State",
        choiceC: "Sunshine State",
        choiceD: "Treasure State",
        correct: "C"
    },
    {
        question: "Which sign of the zodiac is represented by the Crab?",
        choiceA: "Acquarius",
        choiceB: "Cancer",
        choiceC: "Sagittarius",
        choiceD: "Virgo",
        correct: "C"
    },
    {
        question: "Which former US president was nicknamed Teddy after he refused to shoot a defenseless black bear?",
        choiceA: "Roosevelt",
        choiceB: "Monroe",
        choiceC: "Lincoln",
        choiceD: "Thoreau",
        correct: "A"
    },
    {

     question: "How many sides does a trapezium have?",
    choiceA: "2",
    choiceB: "6",
    choiceC: "4",
    choiceD: "7",
    correct: "C"
},
    {
        question: "Which of these Disney classics was released in 1970?",
        choiceA: "Bambi",
        choiceB: "Mulan",
        choiceC: "Aristocats",
        choiceD: "Peter Pan",
        correct: "C"
    },
    {
        question: "What is the theme song of Neon Genesis Evangelion?",
        choiceA: "Lightning Realms",
        choiceB: "Cruel Angel Thesis",
        choiceC: "Redemption through fire",
        choiceD: "Lance of Longinus",
        correct: "B"
    },
    {
     question: "What is the name of the last episode of Breaking bad?",
    choiceA: "the 27 Club",
    choiceB: "Last pill in Ibiza",
    choiceC: "Felina",
    choiceD: "Walters Last Dance",
    correct: "C"

},
    {
        question: "Which one of these is a Pink Floyd Song?",
        choiceA: "Cherish",
        choiceB: "Another sting brings my fall",
        choiceC: "Time",
        choiceD: "Pasta Paste",
        correct: "C"
    },
    {

    question: "Which is the name of the main character in Half Life?",

    choiceA: "Richard Peabody",
    choiceB: "Bradley Cooper",

    choiceC: "Harold Klein",
    choiceD: "Gordon Freeman",
    correct: "D"

    }];
const bonusScore = 25;
const MAX_QUESTIONS = 10;

// load Game

function startGame(){
    currentScore = 0;
    startBtn.style.display = 'none';
    setTimeout(function(){
        quizContainer.style.display = 'block';
    }, 0);
    questionCounter = 0;
    NextQuestion();
}

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', NextQuestion)


// find current Question, cycle until all questions answers

function NextQuestion(){

    document.querySelectorAll('.choice').forEach(v=> {
        v.disabled = false;
    });


    const random = Math.floor(Math.random() * totalQuestions.length);
    question.textContent = totalQuestions[random].question;
    choiceA.textContent = totalQuestions[random].choiceA;
    choiceB.textContent = totalQuestions[random].choiceB;
    choiceC.textContent = totalQuestions[random].choiceC;
    choiceD.textContent = totalQuestions[random].choiceD;
    currentQuestion =  totalQuestions.splice(random, 1)[0];
    questionCounter++;
    progressText.textContent = `${"Question " + questionCounter + " / 10"}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


    if(totalQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("results.html");

    }

}

// check if answer is correct, freeze buttons

function checkAnswer(e) {
    if(currentQuestion.correct === e){
        document.querySelector(".choice"+ e).classList.add("green");
        document.querySelectorAll('.choice').forEach( v=> {
            v.disabled = true;
    })
        setTimeout(function () {
            document.querySelector(".choice"+ e).classList.remove("green");
            incrementScore(bonusScore);
        }, 1000)

    } else {
        document.querySelector(".choice"+ e).classList.add("red");
        document.querySelectorAll('.choice').forEach( v=> {
            v.disabled = true;
        })
        setTimeout(function () {
            document.querySelector(".choice"+ e).classList.remove("red");
        }, 1000)
    }
}

// event listener on all button choices

choiceA.addEventListener('click', function(){
    checkAnswer("A");
});
choiceB.addEventListener('click', function(){
    checkAnswer("B");
});
choiceC.addEventListener('click', function(){
    checkAnswer("C");
});
choiceD.addEventListener('click', function(){
    checkAnswer("D");
});



// score increase

function incrementScore(num){
    currentScore += num;
    score.innerText = currentScore;
}




// show and hide loader

function show (){
    loader.style.display = 'block';
quizContainer.style.display = 'none';
}

function hide(){
    loader.style.display = 'none';
    quizContainer.style.display = 'block';

}


nextBtn.addEventListener('click', function(e){
    e.preventDefault();
    show();
    setTimeout(function(){
       hide();
    }, 1000)
});















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































