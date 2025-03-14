const quiz = [
    {
        question: "Which company developed JavaScript?",
        ans1text: "Microsoft",
        ans2text: "Netscape",
        ans3text: "Google",
        ans4text: "IBM",
        answer: "Netscape",
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        ans1text: "//",
        ans2text: "/* */",
        ans3text: "#",
        ans4text: "--",
        answer: "//",
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        ans1text: "Number",
        ans2text: "Boolean",
        ans3text: "Float",
        ans4text: "String",
        answer: "Float",
    },
    {
        question: "How do you declare a JavaScript variable?",
        ans1text: "var name;",
        ans2text: "variable name;",
        ans3text: "v name;",
        ans4text: "declare name;",
        answer: "var name;",
    },
    {
        question: "Which function is used to print something in JavaScript?",
        ans1text: "log()",
        ans2text: "print()",
        ans3text: "console.log()",
        ans4text: "display()",
        answer: "console.log()",
    },
    {
        question: "Which keyword is used to define a constant variable in JavaScript?",
        ans1text: "var",
        ans2text: "const",
        ans3text: "let",
        ans4text: "static",
        answer: "const",
    },
    {
        question: "What does the 'typeof' operator return for an array?",
        ans1text: "'array'",
        ans2text: "'object'",
        ans3text: "'list'",
        ans4text: "'collection'",
        answer: "'object'",
    },
    {
        question: "Which method is used to remove the last element from an array?",
        ans1text: "pop()",
        ans2text: "push()",
        ans3text: "shift()",
        ans4text: "splice()",
        answer: "pop()",
    },
    {
        question: "Which event is triggered when a user clicks an HTML element?",
        ans1text: "onhover",
        ans2text: "onchange",
        ans3text: "onclick",
        ans4text: "onpress",
        answer: "onclick",
    },
    {
        question: "Which loop is guaranteed to run at least once?",
        ans1text: "for loop",
        ans2text: "while loop",
        ans3text: "do...while loop",
        ans4text: "foreach loop",
        answer: "do...while loop",
    }
]

 const question = document.getElementById("quiz-question");
 console.log(question);
 console.log(question.textContent)
 const option_a = document.getElementById("text_option_a");
 const option_b = document.getElementById("text_option_b");
 const option_c = document.getElementById("text_option_c");
 const option_d = document.getElementById("text_option_d");
 console.log(option_a);
 console.log(option_b);
 console.log(option_c);
 console.log(option_d);
 console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("Submit");

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
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});
