const predefinedAnswer = "باريس";

function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim();
    const answerDisplay = document.getElementById('answerDisplay');

    if (userAnswer === "") {
        answerDisplay.textContent = "يرجى إدخال الإجابة.";
        answerDisplay.style.backgroundColor = "#ffeb3b"; // لون أصفر
    } else if (userAnswer === predefinedAnswer) {
        answerDisplay.textContent = "إجابة صحيحة! عاصمة فرنسا هي باريس.";
        answerDisplay.style.backgroundColor = "#c8e6c9"; // لون أخضر فاتح
    } else {
        answerDisplay.textContent = "إجابة خاطئة! الإجابة الصحيحة هي باريس.";
        answerDisplay.style.backgroundColor = "#ffcdd2"; // لون أحمر فاتح
    }

    answerDisplay.style.display = "block";
}
