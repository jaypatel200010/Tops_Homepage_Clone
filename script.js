function filterForm(formType) {
  const f = document.getElementsByClassName("m-box");
  const list = document.querySelectorAll(".register_form li");
  for (let j = 0; j < list.length; j++) {
    if (formType !== list[j].classList[0]) {
      list[j].classList.remove("active");
    } else {
      list[j].classList.add("active");
    }
  }
  if (formType == "all") {
    formType = "";
  }
  for (let i = 0; i < f.length; i++) {
    f[i].classList.remove("show");
    if (f[i].className.indexOf(formType) > -1) {
      setTimeout(() => {
        f[i].classList.add("show");
      }, 200);
    }
  }
}

function filterLife(formType) {
  const f = document.getElementsByClassName("life_card");
  const list = document.querySelectorAll(".life_tab li");
  for (let j = 0; j < list.length; j++) {
    if (formType !== list[j].classList[0]) {
      list[j].classList.remove("active");
    } else {
      list[j].classList.add("active");
    }
  }
  for (let i = 0; i < f.length; i++) {
    f[i].classList.remove("show_life");
    if (f[i].className.indexOf(formType) > -1) {
      f[i].classList.add("show_life");
    }
  }
}
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".main-menu").classList.toggle("show");
  let bar = document.querySelector(".menu-btn i").className.indexOf("fa-bars");

  if (bar > -1) {
    document.querySelector(".menu-btn i").classList.remove("fa-bars");
    document.querySelector(".menu-btn i").classList.add("fa-xmark");
  }else{
    document.querySelector(".menu-btn i").classList.remove("fa-xmark");
    document.querySelector(".menu-btn i").classList.add("fa-bars");
  }
});

$(document).ready(function () {
  $(".coll_university").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".webinar_slides_container").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".review_carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
