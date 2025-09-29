const quizData = [
    {
        question: "O que caracteriza um Data Clump?",
        options: [
            "Funções com muitos parâmetros não relacionados",
            "Grupos de dados que aparecem juntos repetidamente",
            "Uso excessivo de herança",
            "Métodos muito longos"
        ],
        answer: 1
    },
    {
        question: "Qual é uma consequência do Data Clumps?",
        options: [
            "Código mais fácil de manter",
            "Menos bugs",
            "Aumento de inconsistências e erros",
            "Melhor encapsulamento"
        ],
        answer: 2
    },
    {
        question: "Como resolver um Data Clump?",
        options: [
            "Remover todos os dados",
            "Encapsular os dados em uma classe ou estrutura",
            "Duplicar os dados",
            "Ignorar o problema"
        ],
        answer: 1
    }
];

function renderQuiz() {
    const form = document.getElementById('quiz-form');
    form.innerHTML = '';
    quizData.forEach((q, idx) => {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = q.question;
        fieldset.appendChild(legend);

        q.options.forEach((opt, optIdx) => {
            const label = document.createElement('label');
            label.style.display = 'block';
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'q' + idx;
            input.value = optIdx;
            label.appendChild(input);
            label.appendChild(document.createTextNode(' ' + opt));
            fieldset.appendChild(label);
        });

        const feedback = document.createElement('div');
        feedback.className = 'quiz-feedback';
        fieldset.appendChild(feedback);

        form.appendChild(fieldset);
    });
    document.getElementById('quiz-result').textContent = '';
    document.getElementById('quiz-restart').style.display = 'none';
}

function checkQuiz(e) {
    e.preventDefault();
    let correct = 0;
    quizData.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        const feedback = document.querySelectorAll('.quiz-feedback')[idx];
        if (selected && Number(selected.value) === q.answer) {
            feedback.textContent = 'Correto!';
            feedback.style.color = 'green';
            correct++;
        } else {
            feedback.textContent = 'Incorreto.';
            feedback.style.color = 'red';
        }
    });
    const result = document.getElementById('quiz-result');
    if (correct === quizData.length) {
        result.textContent = 'Parabéns! Você acertou todas as perguntas.';
    } else {
        result.textContent = `Você acertou ${correct} de ${quizData.length}.`;
    }
    document.getElementById('quiz-restart').style.display = 'inline-block';
}

document.getElementById('quiz-submit').onclick = checkQuiz;
document.getElementById('quiz-restart').onclick = function() {
    renderQuiz();
};

renderQuiz();
