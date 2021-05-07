const blogAccordion = () => {
  document.querySelector('.accordion__main-link').addEventListener('click', () => {
    const mainAccordion = document.querySelector('.blog-accordion__main');
    mainAccordion.classList.toggle('accordion__main-active');
  });
};

export default blogAccordion;
