const linkSwiper = document.createElement('link');
linkSwiper.rel = 'stylesheet';
linkSwiper.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';

const linkCustomCSS = document.createElement('link');
linkCustomCSS.rel = 'stylesheet';
linkCustomCSS.type = 'text/css';
linkCustomCSS.href = 'http://localhost:3000/index.css';

document.head.appendChild(linkSwiper);
document.head.appendChild(linkCustomCSS);

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 32,
  slidesOffsetBefore: 80,
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const allButton = document.querySelector('[fs-list-element="clear"]');
  const radioInputs = document.querySelectorAll('input[type="radio"][name="radio"]');

  function updateStates() {
    document.querySelectorAll('.is-list-active').forEach((el) => el.classList.remove('is-active'));

    const checked = document.querySelector('input[type="radio"][name="radio"]:checked');

    if (checked) {
      allButton.classList.remove('is-active');
      const target = checked.closest('.w-radio');
      if (target) target.classList.add('is-active');
    } else {
      allButton.classList.add('is-active');
    }
  }

  radioInputs.forEach((radio) => {
    radio.addEventListener('change', updateStates);
  });

  allButton.addEventListener('click', function (e) {
    e.preventDefault();
    radioInputs.forEach((radio) => (radio.checked = false));
    updateStates();
  });

  updateStates();
});
