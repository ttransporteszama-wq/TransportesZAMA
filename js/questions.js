document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    const title = question.querySelector('.question__title');
    const answer = question.querySelector('.question__answer');

    if (!title || !answer) return;

    title.addEventListener('click', () => {
      const isActive = question.classList.contains('active');

      questions.forEach(item => {
        item.classList.remove('active');
        const itemAnswer = item.querySelector('.question__answer');
        if (itemAnswer) itemAnswer.style.height = '0px';
      });

      if (!isActive) {
        question.classList.add('active');
        answer.style.height = `${answer.scrollHeight}px`;
      }
    });
  });
});
