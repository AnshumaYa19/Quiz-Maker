document.getElementById('quizForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const question = document.getElementById('question').value;
  const options = [...document.querySelectorAll('.option')].map(opt => opt.value);
  const correctAnswer = document.getElementById('correct').value;

  const quiz = {
    title: title,
    questions: [{
      question,
      options,
      correctAnswer
    }]
  };

  const res = await fetch('/api/quizzes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quiz)
  });

  const data = await res.json();
  alert(data.message);
});
