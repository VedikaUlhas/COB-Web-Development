const quiz = [
    {
        question: "Q.Who is the father of Computers?",
        ans1text: "James Gosling",
        ans2text: "Charles Babbage",
        ans3text: "Dennis Ritchie",
        ans4text: "Bjarne Stroustrup",
        answer: "Charles Babbage",
    },
    {
        question: "Q.The average of first 50 natural numbers is",
        ans1text: "25.30",
        ans2text: "25.5",
        ans3text: "25.00",
        ans4text: "12.25",
        answer: "25.5",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    },{
        question: "Q.When was Chhatrapati Shivaji Maharaj born? ",
        ans1text: " 19th Feb 1630",
        ans2text:"15th April 1766",
        ans3text: "20th March 1645",
        ans4text: "18th Jan 1789",
        answer: " 19th Feb 1630",
    },{
        question: "Q.Which of the following language does the computer understand?",
        ans1text: " Computer understands only C Language",
        ans2text: " Computer understands only Assembly Language",
        ans3text: "Computer understands only Binary Language",
        ans4text: "Computer understands only BASIC",
        answer: "Computer understands only Binary Language",
    },{
        question:  "Q.The World Largest desert is ?",
        ans1text:"Thar",
        ans2text: "Kalahari",
        ans3text: "Sahara",
        ans4text: "Sonoran",
        answer: "Sahara",
    },{
        question: "Q.Which of following is used in pencils ?",
        ans1text:"Graphite",
        ans2text: "Charcoal",
        ans3text: "Silicon",
        ans4text: "Posphorous",
        answer: "Graphite",
    },{
        question: "Q.Who wrote down epic Mahabharata while Vyasa was dictating ?",
        ans1text:"Narada",
        ans2text: "Vishwakarma",
        ans3text: "Ganesh",
        ans4text:"Shiv",
        answer:"Ganesh",
    },{
        question: "Q.60 Times of 8 Equals to",
        ans1text:"480",
        ans2text: "300",
        ans3text: "250",
        ans4text: "400",
        answer: "480",
    },
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

const quiz1 = document.querySelector("#quiz1");

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;

        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            //alert("Your score is " + score + " out of " + quiz.length);
           // location.reload();
            quiz1.innerHTML = `
            <div class = "result">
                <h2>🏆 Your Score : ${score}/${quiz.length} Correct Answers</h2>
                <p>Congratulations on completing this quiz 🎉</p>
                <button class ="reload-button" onclick="location.reload()">Play Again 🔁</button>
           </div>
            `;
        }

    }
});
