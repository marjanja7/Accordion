const questions = Array.from (document.getElementById(".question"));

questions.forEach((question) => {
    question.addEventListener("click", questionHandler);
});

function questionHandler (e) {
    e.preventDefault();
    let currentQuestion = e.target.closest(".question");
    let currentAnswer = e.target.nextElementSibling;
    currentQuestion.classList.toggle("active");
    if (currentQuestion.classList.contains("active")) {
        currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
    } else {
        currentAnswer.style.maxHeight = 0;
    }

}