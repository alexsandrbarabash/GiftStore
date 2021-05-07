const scroll = () => {
  document.querySelectorAll('.scroll-to-home').forEach(item =>
    item.addEventListener('click', () => {
      document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    })
  );

  document.querySelectorAll('.scroll-to-about-us').forEach(item =>
    item.addEventListener('click', () => {
      document.querySelector('#about-us').scrollIntoView({ behavior: 'smooth' });
    })
  );

  document.querySelectorAll('.scroll-to-services').forEach(item =>
    item.addEventListener('click', () => {
      document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    })
  );

  document.querySelectorAll('.scroll-to-blog').forEach(item =>
    item.addEventListener('click', () => {
      document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' });
    })
  );
};

export default scroll;
