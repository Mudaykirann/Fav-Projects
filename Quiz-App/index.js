const questions = [
    {
        question:'HTML is a ',
        answers:[
            {text:"Scripting Language",correct:true},
            {text:"Programming Language",correct:false},
            {text:"Assembly Langauge",correct:false},
            {text:"Object Language",correct:false},
        ]
    },

    {
        question:'CSS Stands for ',
        answers:[
            {text:"Cascading Short Sheets",correct:false},
            {text:"Cascading Style Sheets",correct:true},
            {text:"Cascading Sheets Style",correct:false},
            {text:"Cascading  Sheets shorts",correct:false},
        ]
    },

    {
        question:'Strongest Hashira in Demon Slayer Verse?',
        answers:[
            {text:"Shinobi Kocho",correct:false},
            {text:"Sanemi Shinguazwa",correct:false},
            {text:"Gyomei Himezima",correct:true},
            {text:"KokuShibuoa",correct:false},
        ]
    },

    {
        question:'Whom do you Support?',
        answers:[
            {text:"Mikasa Ackerman",correct:false},
            {text:"Zeakea Yeager",correct:false},
            {text:"Marleyan's",correct:false},
            {text:"Eren Yeager",correct:true},
        ]
    }
];

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuizz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);


    })

}

function resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}! Thank You  `;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block"
}



nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuizz();
    }
})
startQuizz();