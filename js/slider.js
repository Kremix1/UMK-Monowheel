var swiper = new Swiper(".mySwiper", {
    spaceBetween: 15,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".arrows__right-arrow",
      prevEl: ".arrows__left-arrow",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    },
  });

  var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".arrows__right-arrow-1",
      prevEl: ".arrows__left-arrow-1",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    },
  });


  let newSlider = document.getElementById('new-slider')
  let newLink = document.getElementById('new-link');
  let popularSlider = document.getElementById('popular-slider')
  let popularLink = document.getElementById('popular-link');
    newLink.onclick = function() {
        popularSlider.style.display = "none";
        newSlider.style.display = "flex";

        newLink.style.textDecorationLine = "underline";
        newLink.style.color = "#000";
        popularLink.style.textDecorationLine = "none";
        popularLink.style.color = "#777777";

        document.getElementById('carousel__arrows').style.display = "none";
        document.getElementById('carousel__arrows1').style.display = "flex";
    };

    popularLink.onclick = function() {
        popularSlider.style.display = "flex";
        newSlider.style.display = "none";

        newLink.style.textDecorationLine = "none";
        newLink.style.color = "#777777";
        popularLink.style.textDecorationLine = "underline";
        popularLink.style.color = "#000";

        
        document.getElementById('carousel__arrows').style.display = "flex";
        document.getElementById('carousel__arrows1').style.display = "none";
    };