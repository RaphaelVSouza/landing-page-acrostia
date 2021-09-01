import Carousel from './carousel.js';
import fetchData from './fetchData.js';
import fakeResponse from './utils/fakeResponse.js';
import Loading from './components/Loading.js';
import burgerMenu from './burgerMenu.js';

const $contactForm = document.querySelector('.contact-form');
const $emailInput = document.querySelector('.contact-form [name="email"]');
const $linkItems = document.querySelectorAll('.heading__menu .list .item');

$linkItems.forEach((link) => {
  link.addEventListener('click', (event) => {
    $linkItems.forEach((link) => {
      link.style['background-color'] = 'transparent';
    });
    link.style['background-color'] = event.currentTarget.dataset.color;
  });
});

function setLoading(isLoading, previousElement) {
  if (isLoading) {
    previousElement.replaceWith(
      Loading({ imageUrl: '../dist/img/loading.svg' }),
    );
  } else {
    document.querySelector('.loading').replaceWith(previousElement);
  }
}

async function handleContactSubmit(event) {
  event.preventDefault();
  let previousElement = document.querySelector('.contact-form button');
  setLoading(true, previousElement);
  await fakeResponse();
  setLoading(false, previousElement);
  alert(
    `Question send, we will send a response later on your email ${$emailInput.value}`,
  );
}

document.addEventListener('scroll', () => {});

async function Main() {
  const carousel = await new Carousel({
    carousel: document.querySelector('.carousel__container'),
    fetchFn: fetchData,
    prevBtn: document.querySelector('.carousel__prev-btn'),
    nextBtn: document.querySelector('.carousel__next-btn'),
    navDots: document.querySelector('.nav-dots'),
  });

  burgerMenu();
  carousel.setCarousel();
  $contactForm.addEventListener('submit', handleContactSubmit);
}

Main().then((init) => init);
