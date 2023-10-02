const slides2 = document.querySelectorAll(".slide2");
    let container2 = 0;
    const totalSlides2 = slides2.length;

    slides2.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });

    const back2 = () => {
      if (container2 > 0) {
        container2--;
        slideImage2();
      }
    }

    const next2 = () => {
      if (container2 < totalSlides2 - 1) {
        container2++;
        slideImage2();
      }
    }

    const slideImage2 = () => {
      slides2.forEach((slide) => {
        slide.style.transform = `translateX(-${container2 * 100}%)`;
      });
    }



    let openBtn = document.querySelector(".open-menu");
    let closeBtn = document.querySelector(".close-menu");
    let navList = document.querySelector("nav ul");

    openBtn.addEventListener("click", function() {
      navList.classList.add("active");
    })

    closeBtn.addEventListener("click", function() {
      navList.classList.remove("active");
    })