const startbtn= document.querySelector('.start-button');
const popup= document.querySelector('.popup');
const exitBtn= document.querySelector('.exit-btn');
const main= document.querySelector('.main');
const continueBtn= document.querySelector('.continue-btn');
const quizSection= document.querySelector('.quiz-content');
const quizBox= document.querySelector('.quiz-box');

// start quiz 
startbtn.onclick = () => {
    popup.classList.add('active');
    main.classList.add('active');
    
}

//exit quiz
exitBtn.onclick = () => {
    popup.classList.remove('active');
    main.classList.remove('active');
}

//continue to start answering questions
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popup.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    ShowQues(0);

}

let quescount= 0;
let quesno=1;
//move to next question
const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (quescount < questions.length-1){
    quescount++;
    ShowQues(quescount);
}
else{
    console.log('Question Completed')
}

}

const optionList = document.querySelector('.option-list')

//getting ques and opt from array
function ShowQues(index) {
    const quesText = document.querySelector('.ques-text');
    quesText.textContent = `${questions[index].no} . ${questions[index].question}` ;

    let optionTag= ` <div class="opt"><span>${questions[index].options[0]}</span></div>
    <div class="opt"><span>${questions[index].options[1]}</span></div>
    <div class="opt"><span>${questions[index].options[2]}</span></div>
    <div class="opt"><span>${questions[index].options[3]}</span></div>`;


    optionList.innerHTML = optionTag;
}

//
function quesCounter(index){
    const quesTot = document.querySelector('.question-total')
}



//timer code
// time = 

