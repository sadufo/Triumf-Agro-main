// top slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// open item
const btn = document.querySelector('.weHave-btn');
function openItems(){
  const itemBlock = document.querySelector('.weHave__list');
  itemBlock.style.display = itemBlock.style.display === 'none' ? 'flex' : 'none';

}
openItems()
btn.addEventListener("click", openItems);



// aboutUs slider
const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
    let currentIndex = 0;

    function showImage(index) {
      const sliderContent = document.querySelector(".slider-content");
      sliderContent.style.transform = `translateX(-${index * 100}%)`;

      const paginationDots = document.querySelectorAll(".pagination .dot");
      paginationDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function changeImage() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }

    function initSlider() {
      const sliderContent = document.querySelector(".slider-content");
      const pagination = document.querySelector(".pagination");

      // Создаем элементы пагинации на основе количества изображений
      for (let i = 0; i < images.length; i++) {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", () => {
          currentIndex = i;
          showImage(currentIndex);
        });
        pagination.appendChild(dot);
      }

      showImage(currentIndex);
      setInterval(changeImage, 3000); // Изменяйте интервал между сменой изображений по своему усмотрению
    }

    initSlider();

    // burger
    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('menu');
    var bmLink = document.querySelectorAll('.bm__item');
    burgerMenu.addEventListener('click',function(){
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
    });

    bmLink.forEach(function(el) {
        el.addEventListener('click', function() {
          burgerMenu.classList.remove('close');
          overlay.classList.remove('overlay');
        });
      });

    // close form

    function formClose() {
      const closeForm = document.querySelector(".form__close");
      const form = document.querySelector(".form");
      closeForm.addEventListener('click', function() {
        form.style.display = 'none';
      });
    }
    

    formClose()

