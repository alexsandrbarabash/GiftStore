const blogCart = () => {
  document.querySelectorAll('.blog__card-link').forEach(item =>
    item.addEventListener('click', e => {
      const prevElement = e.target.previousElementSibling;
      if (prevElement.textContent.length <= 112) {
        prevElement.textContent = prevElement.getAttribute('data-text');
        return;
      }

      prevElement.textContent = prevElement.textContent.substring(0, 109) + '...';

      return;
    })
  );
};

export default blogCart;
