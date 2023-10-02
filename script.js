const startbtn= document.querySelector('.start-button');
const popup= document.querySelector('.popup');
const exitBtn= document.querySelector('.exit-btn');
const main= document.querySelector('.main');
const continueBtn= document.querySelector('.continue-btn');
const quizSection= document.querySelector('.quiz-content');
const quizBox= document.querySelector('.quiz-box');
const resultBox= document.querySelector('.result-box');
const tryAgainBtn= document.querySelector('.tryAgain-btn');
const goHomeBtn= document.querySelector('.goHome-btn');




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
    quesCounter(1);
    headerScore();

}


tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');


    quescount= 0;
    quesno=1;
    userscore = 0;
    ShowQues(quescount);
    quesCounter(quesno);

    headerScore();
}


goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');


     quescount= 0;
     quesno=1;
     userscore = 0;
    ShowQues(quescount);
    quesCounter(quesno);

    headerScore();
}



let quescount= 0;
let quesno=1;
let userscore = 0;
//move to next question
const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (quescount < questions.length-1){
    quescount++;
    ShowQues(quescount);

    quesno++;
    quesCounter(quesno);

    nextBtn.classList.remove('active');

}
else{
    console.log('Question Completed');
    showResultBox();
}

}

const optionList = document.querySelector('.option-list')

//getting ques and opt from array
function ShowQues(index) {
    const quesText = document.querySelector('.ques-text');
    quesText.textContent = `${questions[index].no} . ${questions[index].question}` ;

    let optionTag= ` <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;


    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i=0;i<option.length;i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}


function optionSelected(ans){
    let userAns = ans.textContent;
    let correctans = questions[quescount].ans;
    let allOptions = optionList.children.length;
    
    if (userAns == correctans){
        ans.classList.add('correct');
        userscore+=1;
        headerScore();
    }
    else {
        ans.classList.add('incorrect');
        
        //if ans is incorrect auto select correct ans
        for (let i=0 ; i<allOptions ; i++){
            if ( optionList.children[i].textContent == correctans){
                optionList.children[i].setAttribute('class' , 'option correct')
            }
        }
    }

    //if an option is selected disable all options
    for (let i=0; i<allOptions;i++){
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');

}


//to display question number (question {} of 5 ) 
function quesCounter(index){
    const quesTot = document.querySelector('.question-total');
    quesTot.textContent = `${index} of ${questions.length} Questions`;

}

function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userscore} / ${questions.length}`;

}

function showResultBox(){
    quizBox.classList.remove('active')
    resultBox.classList.add('active')

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = ` Your Score ${userscore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');

    let progressValueStart = -1 ;
    let progressValuEnd = (userscore/questions.length) * 100 ;
    let speed =20 ;

    let progress = setInterval(()=> {
        progressValueStart++;
        // console.log(progressValueStart);
        progressValue.textContent= `${progressValueStart}%`;
        circularProgress.style.background = `conic-gradient( #2d78a7 ${progressValueStart * 3.6 }deg , rgba(255, 255, 255, .1) 0deg)`;
        if ( progressValueStart == progressValuEnd) {
            clearInterval(progress);
        }
    }, speed );
    
    
}



//timer code
// time = 

