const notWorking = () => {
  document.querySelectorAll('.fab').forEach(item =>
    item.addEventListener('click', () => {
      alert('We are working on it).');
    })
  );

  document.querySelectorAll('button').forEach(item =>
    item.addEventListener('click', () => {
      alert('We are working on it).');
    })
  );
};

export default notWorking;
