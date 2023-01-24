const quizData = [
    {
        question: "How satisfied are you with our products?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5",
    },
    {
        question: "How fair are the prices compared to similar retailers?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5",
    },
    {
        question: "How satisfied are you with the value for money of your purchase?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5",
    },
    {
        question: "What could we do to improve our service?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5",
    },
    {
        question: "On a scale of 1-5 how would you recommend us to your friends and family?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       
       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } 
       else {
           quiz.innerHTML = `
           <h2>THANK YOU FOR YOUR RESPONSE !!!</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})