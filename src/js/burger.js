const burger = () => {
  document.querySelector('.burger-inner').addEventListener('click', () => {
    const header = document.querySelector('header');
    header.classList.toggle('header-active');
  });
};

export default burger;
