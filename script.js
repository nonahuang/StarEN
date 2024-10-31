let currentQuiz = 0;
let score = 0;
const quizzes = document.querySelectorAll('.quiz');
const resultDiv = document.getElementById('result');

function showQuiz() {
    quizzes.forEach((quiz, index) => {
        quiz.classList.remove('active');
        if (index === currentQuiz) {
            quiz.classList.add('active');
        }
    });
}

function handleAnswer(selectedQuiz) {
    const selectedOption = document.querySelector(`input[name="q${selectedQuiz}"]:checked`);
    if (selectedOption) {
        // Cek apakah jawaban benar
        if (selectedOption.value === quizzes[selectedQuiz - 1].getAttribute('data-answer')) {
            score++;
        }

        // Pindah ke kuis berikutnya
        currentQuiz++;
        if (currentQuiz < quizzes.length) {
            showQuiz();
        } else {
            // Tampilkan skor di akhir
            displayResult();
        }
    }
}

function displayResult() {
    resultDiv.innerHTML = `Your score: ${score} out of ${quizzes.length}`;
    resultDiv.classList.add('active');
    quizzes.forEach(quiz => quiz.remove()); // Hapus semua pertanyaan
}

// Mulai kuis
showQuiz();

// Sembunyikan hasil skor di awal
resultDiv.style.display = 'none';

// Tampilkan hasil saat selesai
function displayResult() {
    resultDiv.innerHTML = `<p>Congratulation! <span> Your scores are ${score} out of ${quizzes.length} </span> </p>  <a href="learn.html" class="done" id="done">Done</a>`;
    resultDiv.style.display = 'block'; // Tampilkan hasil
    quizzes.forEach(quiz => quiz.remove()); // Hapus semua pertanyaan
}
