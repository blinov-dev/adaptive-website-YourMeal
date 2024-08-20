const scrollToTopBtn = document.querySelector('.move-up-button');

function getWindowScroll() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;
  if (scrollPosition > (documentHeight - windowHeight) / 2) {
    scrollToTopBtn.style.opacity = '1';
    scrollToTopBtn.addEventListener('click', scrollUp);
  } else {
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.removeEventListener('click', scrollUp);
  }
}

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
function scrollBtn() {
  window.addEventListener('scroll', getWindowScroll);
  scrollToTopBtn.removeEventListener('click', scrollUp);
}

export default scrollBtn;
