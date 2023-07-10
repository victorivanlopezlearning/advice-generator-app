
const adviceId = document.querySelector('#adviceId'),
      adviceDescription = document.querySelector('#adviceDescription'),
      btnAdvice = document.querySelector('#btnAdvice'),
      spinner = document.querySelector('#spinner');

const initApp = () => {
  btnAdvice.addEventListener('click', async () => {
    adviceId.textContent = '';
    adviceDescription.textContent = '';
    btnAdvice.disabled = true;
    spinner.classList.remove('d-none');
    
    const data = await getAdvice();
    renderAdvice(data.slip);
  });
}

document.addEventListener('DOMContentLoaded', initApp);

/**
 * Get random Advice
 * @returns {Promise}
 */
const getAdvice = async () => {
  const url = 'https://api.adviceslip.com/advice';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

/**
 * Render Advice in HTML
 * @param {Promise} data 
 */
const renderAdvice = ( data ) => {
  const { id, advice } = data;

  adviceId.textContent = `Advice #${id}`;
  adviceDescription.textContent = advice;
  btnAdvice.disabled = false;
  spinner.classList.add('d-none');
}