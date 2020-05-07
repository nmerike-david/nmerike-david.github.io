let questions = [

    {
        question: 'What does HTML stand for ?',
        options: ['Hypertext Markup Language',
            'HyperLink and Text MarkUp Language',
            'Home Tool MarkUp Language'],
        answer: 0,
    },
    {
        question: 'What is the correct sequence of HTML tags for starting a webpage?',
        options: ['Head, Title, HTML', 'Title, Head, HTML', 'HTML, Head, Title'],
        answer: 2,
    },
    {
        question: 'Choose the correct HTML tag for the largest heading.',
        options: ['H1', 'Heading', 'H6'],
        answer: 0,
    },
    {
        question: 'How can you make a list that lists the items with bullets?',
        options: ['Dl', 'Ul', 'Ol'],
        answer: 1,
    },
    {
        question: 'The element tag <img> is used for which of the following purpose',
        options: ['Paragraph','image','Sub-Heading'],
        answer: 1,
    }
]

let count = 0;
let options = document.querySelector('.options')
let score = document.getElementById('score');
let button = document.getElementById('button');
let question = document.getElementById('question');
let answer = document.querySelector(".options");
let span;
let selected;
let label;



answer.addEventListener('click', (e) => {
    if (e.target.name === "option") {
        selected = e.target.value
        span = document.getElementById(`${e.target.value}`);
        label = document.getElementById(`option-${e.target.value}`);
        button.innerText = 'Submit';
    }

})

const allQuestions = () => {
    if (button.innerText === 'Next') {
        options.style.pointerEvents = 'all';
        label.style.color = 'black';
        span.style.backgroundColor = 'transparent'
    };
    button.innerText = 'Next';

    question.innerText = questions[count].question
    for (let i = 0; i < questions[count].options.length; i++) {
        let option = document.getElementById(`option-${i}`)
        option.innerText = questions[count].options[i]
    }
}



button.addEventListener('click', (e) => {
    if (button.innerText === 'Submit') {
        options.style.pointerEvents = 'none';
        // check the answer
        if (questions[count].answer == selected) {
            span.style.backgroundColor = 'green';
            label.style.color = 'white';
            let curScore = Number(score.innerText)
            score.innerText = ++curScore;
        } else {
            label.style.color = 'white';
            span.style.backgroundColor = 'red'
        }

    } else {
        if (count < questions.length - 1){
            // next question 
            if(selected){
                count++
                allQuestions()
            }
        }
        selected=undefined;
    }


    button.innerText='Next'

})


allQuestions()


