AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/browse/data-science",
    mockPlatform: "Coursera",
  },
  {
    title: "Cryptography",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/cryptography-for-beginners/",
  mockPlatform: "Coursera",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/machine-learning",
    mockPlatform: "Coursera",
  },
  {
    title: "Introduction to HTML 5",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
    mockPlatform: "Coursera",
  },
  {
    title: "Introduction to CSS 3",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
    mockPlatform: "Coursera",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
    mockPlatform: "Coursera",
  },
  {
    title: "Bootstrap 4",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
    mockPlatform: "Coursera",
  },
  {
    title: "Intro to React",
    cardImage: "assets/images/education-page/edx.svg",
    moocLink: "https://www.edx.org/learn/reactjs",
    mockPlatform: "Coursera",
  },
  {
    title: "Intro to React Native",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:
      "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
    mockPlatform: "Coursera",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
    mockPlatform: "Coursera",
  },
  {
    title: "XML-AJAX",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
    mockPlatform: "Coursera",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink:
      "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
    mockPlatform: "Coursera",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, moocLink, mockPlatform}) =>
    (output += `
        <div class="col-6 column">
          <i class="fa-solid fa-chevron-right icon color-primary"></i>
          <span class="color-secondary fw-bold">${mockPlatform} : </span>
          <a href="${moocLink}" class="link-neon" target="_blank">
            ${title}
          </a>
        </div>
      `)
  );
  // moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 850) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }
    $(".timeline-content").removeClass("timeline-item-bg");

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

});
