
const adviceId = document.querySelector('#adviceId'),
      adviceDescription = document.querySelector('#adviceDescription'),
      btnAdvice = document.querySelector('#btnAdvice');

const initApp = () => {
  btnAdvice.addEventListener('click', () => {
    adviceId.textContent = '';
    adviceDescription.textContent = 'Loading...';
    btnAdvice.disabled = true;
    getAdvice();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initApp();
})

const getAdvice = async () => {
  const url = 'https://api.adviceslip.com/advice';
  const response = await fetch(url);
  const data = await response.json();

  renderAdvice(data.slip);
}

const renderAdvice = ( data ) => {
  const { id, advice } = data;

  adviceId.textContent = `Advice #${id}`;
  adviceDescription.textContent = advice;
  btnAdvice.disabled = false;
}