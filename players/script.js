const fadeInElements = document.querySelectorAll('.fade-in');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const fadeInHandler = () => {
  fadeInElements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', fadeInHandler);
window.addEventListener('load', fadeInHandler);
window.addEventListener('resize', fadeInHandler);
