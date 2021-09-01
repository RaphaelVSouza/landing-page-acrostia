class Carousel {
  constructor({ carousel, fetchFn, prevBtn, nextBtn, navDots }) {
    return (async () => {
      this.items = await fetchFn();
      this.carousel = carousel;
      this.prevBtn = prevBtn;
      this.nextBtn = nextBtn;
      this.navDots = navDots;
      this.currentItem = 0;
      return this;
    })();
  }

  setCarousel() {
    if (this.navDots) {
      this.setNavDots(this.items.length);
    }

    this.items.forEach((item, index) => {
      this.carousel.innerHTML += `
        <div class="item-carousel">
          <div class="image-container">
            <img src=${item.imagem}>
            <div class="carousel-text">
              <h2>${item.titulo}</h2>
            </div>
          </div>
        </div>
        `;

      this.carousel.lastElementChild.style.left = `${index * 100}%`;
    });

    this.nextBtn.addEventListener('click', () => {
      const lastIndex = this.currentItem;
      if (this.currentItem >= this.items.length - 1) {
        this.currentItem = 0;
        this.goToItem();
      } else {
        this.currentItem += 1;
        this.goToItem();
      }

      if (this.navDots) {
        this.setActiveDot(lastIndex, this.currentItem);
      }
    });

    this.prevBtn.addEventListener('click', () => {
      const lastIndex = this.currentItem;
      if (this.currentItem <= 0) {
        this.currentItem = this.items.length - 1;
        this.goToItem();
      } else {
        this.currentItem -= 1;
        this.goToItem();
      }

      this.setActiveDot(lastIndex, this.currentItem);
    });

    if (this.navDots) {
      this.navDots.childNodes.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          this.setActiveDot(this.currentItem, index);
        });
      });
    }
  }

  setActiveDot(lastDot, currentDot) {
    this.navDots.childNodes[lastDot].classList.remove('active');
    this.navDots.childNodes[currentDot].classList.add('active');
    this.currentItem = currentDot;
    this.goToItem();
  }

  setNavDots(numberItems) {
    for (let i = 0; i < numberItems; i += 1) {
      const dot = document.createElement('div');
      dot.classList.add('single-dot');
      this.navDots.appendChild(dot);
      this.navDots.firstElementChild.classList.add('active');
    }
  }

  goToItem() {
    const carouselWidth = this.carousel.firstElementChild.clientWidth;
    this.carousel.style.transform = `translateX(-${
      carouselWidth * this.currentItem
    }px)`;
  }
}

export default Carousel;
