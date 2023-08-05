AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: `Data Lead`,
    company: "Dentsu",
    cardImage: "assets/images/experience-page/dentsu.jpeg",
    place: "Bogotá, Colombia",
    time: "Ago. 2023 - Current",
    desp:
        `Developed constructed tested and maintained data architectures,`
      + `Developed data set processes,`
      + `Identified ways to improve data,`
      + `Aligned architecture with business requirements,`
      + `Conducted research for industry and business questions,`
      + `Developed and maintained backend process and platform,`
      + `Lead a team of data engineers and analysts,`
      + `Mentored junior data engineers and analysts,`
      + `Delivered data-driven solutions that met the needs of the organization,`
  },
  {
    title: `Data Developer`,
    company: "HAVAS Media Group",
    cardImage: "assets/images/experience-page/havas-media.jpg",
    place: "Bogotá, Colombia",
    time: "Dec. 2022 - Jul. 2023",
    desp:
        `Develop construct test and maintain data architectures,`
      + `Develop data set processes,`
      + `Identify ways to improve data,`
      + `Align architecture with business requirements,`
      + `Conduct research for industry and business questions,`
      + `Develop and maintain backend process and platform,`
  },
  {
    title: `Data Engineer`,
    company: "KLYM",
    cardImage: "assets/images/experience-page/klym.jpg",
    place: "Bogotá, Colombia",
    time: "May. 2022 - Dec. 2022",
    desp:
        `Develop construct test and maintain data architectures,`
      + `Develop data set processes,`
      + `Identify ways to improve data,`
      + `Align architecture with business requirements,`
      + `Conduct research for industry and business questions,`
      + `Develop and maintain backend process and platform,`
  },
  {
    title: `Data Engineer`,
    company: "NTT Data",
    cardImage: "assets/images/experience-page/ntt-data.jpg",
    place: "Bogotá, Colombia",
    time: "Oct. 2021 - Apr. 2022",
    desp:
        `Develop construct test and maintain data architectures,`
      + `Develop data set processes,`
      + `Identify ways to improve data,`
      + `Align architecture with business requirements,`
      + `Conduct research for industry and business questions,`
      + `Maintain and upgrade existing systems,`
  },
  {
    title: `Business practices in AI`,
    company: "Universidad Autonoma de Zacatecas",
    cardImage: "assets/images/experience-page/uzacatecas.jpg",
    place: "Zacatecas, Méxoco",
    time: "Mar. 2021 - Jul. 2021",
    desp:
        `Develop a deep learning model to identify emotions over speech recognition,`
      + `Search and collect data preparation,`
      + `Deployment and integration,`
      + `Model training and evaluation,`
      + `Collaborate with stakeholders to define ethical considerations,`
  },
  {
    title: `Python Developer`,
    company: "Rollup Consulting",
    cardImage: "assets/images/experience-page/rollup-consulting.jpg",
    place: "Bogotá, Colombia",
    time: "Nov. 2019 - Oct. 2021",
    desp:
        `Writing effective and scalable codes,`
      + `Improve functionality of existing systems,`
      + `Provide technical solutions to user requirements,`
      + `Designing and implementing robust applications,`
      + `Developing and maintaining APIs,`
      + `Maintain and upgrade existing systems,`
  },
  {
    title: `BI Consultant`,
    company: "Rollup Consulting",
    cardImage: "assets/images/experience-page/rollup-consulting.jpg",
    place: "Bogotá, Colombia",
    time: "Apr. 2017 - Oct. 2021",
    desp:
        `Develop and maintain reports and dashboards,`
      + `Develop and maintain data flows,`
      + `Develop and maintain data warehouses,`
      + `Develop and maintain ETL processes,`
      + `Provide user support,`
      + `Collaborate with other team members and stakeholders,`
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(({ title, cardImage, company, place, time, desp }) => {
    const despArray = desp.split(",");
    const despList = despArray.slice(0, -1).map((item) => `
      <div class="item">
        <i class="fa-solid fa-chevron-right icon color-primary"></i>
        ${item}
      </div>`).join("");

    const titleArray = title.split(" ");
    const titleColor = titleArray.slice(0, 1).map((item) => `
      <span class="color-primary">${item}</span>`).join("");

    const titleText = titleArray.slice(1, titleArray.length).map((item) => `
      ${item}`).join("");

    const fullTitle = titleColor + titleText;

    output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="items-container">
              <div class="fw-company-title">
                <i class="fa-solid fa-briefcase icon"></i> ${fullTitle}
              </div>
              <div class="item-date">
                <i class="fas fa-calendar-alt icon"></i> ${time}
              </div>
            </div>
            <div class="items-container">
              <div class="company-name">
                ${company}
              </div>
              <!--
              <div class="company-place">
                ${place}
              </div>
              -->
            </div>

            ${despList}
          </header>
        </article>
      </div>
    </div>
  `;
  });

  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
