const getYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
};

window.onload = () => {
  document.getElementById(
    'footer__title-h3'
  ).innerHTML = `Made with &#128153; by RAFALAZAR\nCopyright &copy; ${getYear()}`;
};
