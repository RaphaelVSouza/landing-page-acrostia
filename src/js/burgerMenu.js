function BurgerMenu() {
  const $burgerMenu = document.querySelector('.burger-menu');
  const $mbMenu = document.querySelector('.heading__menu');
  const $main = document.querySelector('main');

  $burgerMenu.addEventListener('click', () => {
    $burgerMenu.classList.toggle('change');
    $mbMenu.classList.toggle('active');
  });

  $main.addEventListener('click', () => {
    $burgerMenu.classList.remove('change');
    $mbMenu.classList.remove('active');
  });

  document.addEventListener('scroll', () => {
    $burgerMenu.classList.remove('change');
    $mbMenu.classList.remove('active');
  });
}

export default BurgerMenu;
