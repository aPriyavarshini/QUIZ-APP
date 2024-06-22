const startButton=document.getElementById("start-btn");
const nextButton=document.getElementById("next-btn");
const questionContainerElement=document.getElementById("question-container");
const questionElement=document.getElementById("question");
const answerButtonElement=document.getElementById("answer-buttons");
startButton.addEventListener('click',startGame);
nextButton.addEventListener("click",()=>
    {
        currentQuestionIndex++;
        setNextQuestion();
    }
);
let shuffledQuestions,currentQuestionIndex;
function startGame()
{
    startButton.classList.add("hide");
    shuffledQuestions=questions.sort(()=>Math.random()-0.5);
    currentQuestionIndex=0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}
function setNextQuestion()
{
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question)
{
    questionElement.innerText=question.question;
    question.answers.forEach((answer)=>{
        const button=document.createElement("button");
        button.innerText=answer.text;
        button.classList.add("btn");
        if(answer.correct)
            {
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click",selectAnswer);
            answerButtonElement.appendChild(button);
    });
}
function resetState()
{
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(answerButtonElement.firstChild)
        {
            answerButtonElement.removeChild(answerButtonElement.firstChild);
        }
}
function selectAnswer(e)
{
    const selectedButton=e.target;
    const correct=selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButtonElement.children).forEach((button)=>
       {
        setStatusClass(button,button.dataset.correct);
       }
    );
    if(shuffledQuestions.length>currentQuestionIndex+1)
        {
            nextButton.classList.remove("hide");
        }
    else
        {
            startButton.innerText="Restart Game";
            startButton.classList.remove("hide");
        }
}
function setStatusClass(element,correct)
{
    clearStatusClass(element);
        if(correct)
        {
            element.classList.add("correct");
        }
        else
        {
            element.classList.add("wrong");
        }
}
function clearStatusClass(element)
{
    element.classList.remove("wrong");
    element.classList.remove("correct");
}
const questions=[
    {
        question:"Which of the following is not a primitive data type in Java?",
        answers:
        [
            {
                text:"int",correct:false
            },
            {
                text:"float",correct:false
            },
            {    
                text:"boolean",correct:false
            },
            {    
                text:"string",correct:true
            },
        ],
    },
    {
        question:"In JavaScript, what is the result of'typeof null'?",
        answers:
        [
            {
                text:"object",correct:true
            },
            {
                text:"null",correct:false
            },
            {
                text:"undefined",correct:false
            },
            {
                text:"string",correct:false
            },
        ],
    },
    {
        question:"Which sorting algorithm typically has the worst time complexity?",
        answers:
        [
            {
                text:"Quick Sort",correct:false
            },
            {
                text:"Bubble Sort",correct:true
            },
            {
                text:"Insertion Sort",correct:false
            },
            {
                text:"Merge Sort",correct:false
            },
        ],
    },
    {
        question:"What does CSS stand for?",
        answers:
        [
            {
                text:"Computer Style Sheets",correct:false
            },
            {
                text:"Cascading Style Sheets",correct:true
            },
            {
                text:"Creative Style Sheets",correct:false
            },
            {
                text:"Colorful Style Sheets",correct:false
            },
        ],
    },
    {
        question:"In Java, what does the'static'keyword mean when used with a method?",
        answers:
        [
            {
                text:"The method belongs to the class rather than any specific instance of the class.",correct:true
            },
            {
                text:"The method is called automatically when the class is instantiated.",correct:false
            },
            {
                text:"The method cannot be overridden in subclasses.",correct:false
            },
            {
                text:" The method can only be accessed by other static methods in the same class.",correct:false
            },
        ],
    },
    {
        question:"Which of the following is not a valid JavaScript variable name?",
        answers:
        [
            {
                text:"2myVar",correct:true
            },
            {
                text:"_myVar",correct:false
            },
            {
                text:"myVar2",correct:false
            },
            {
                text:"my_Var",correct:false
            },
        ],
    },
    {
        question:"What is the result of'3 + 4 * 2'in most programming languages?",
        answers:
        [
            {
                text:"14",correct:false
            },
            {
                text:"11",correct:true
            },
            {
                text:"19",correct:false
            },
            {
                text:"10",correct:false
            },
        ],
    },
    {
        question:"What does HTML stand for?",
        answers:
        [
            {
                text:"Hyperlinks and Text Markup Language",correct:false
            },
            {
                text:"Hyper Text Manipulation Language",correct:false
            },
            {
                text:"Home Tool Markup Language",correct:false
            },
            {
                text:"Hyper Text Markup Language",correct:true
            },
        ],
    },
    {
        question:"What is the time complexity of inserting an element in the middle of a singly linked list?",
        answers:
        [
            {
                text:"O(1)",correct:false
            },
            {
                text:"O(log n)",correct:false
            },
            {
                text:"O(n)",correct:true
            },
            {
                text:"O(n^2)",correct:false
            },
        ],
    },
    {
        question:"Which programming language is known as'the language of the web'?",
        answers:[
            {
                text:"Java",correct:false
            },
            {
                text:"C++",correct:false
            },
            {
                text:"Python",correct:false
            },
            {
                text:"Javascript",correct:true
            },
        ],
    },
];
