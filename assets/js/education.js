const education_cards = document.querySelector(".education-cards");
const professional_education = [
    {
        title: `M.Sc in Artificial Intelligence`,
        institution: "Universidad Internacional de la Rioja (UNIR)",
        cardImage: "assets/img/education/unir.png",
        place: "Bogotá, Colombia",
        time: "2021 - Current (On Hold)",
        dissertation_title: `Análisis para la identificación del trastorno depresivo mediante Twitter`,
        link_dt: `#`
    },
    {
        title: `B.Sc in Computer Science`,
        institution: "Escuela Colombiana de Ingeniería Julio Garavito (ECI)",
        cardImage: "assets/img/education/eci.png",
        place: "Bogotá, Colombia",
        time: "2011 - 2016",
        dissertation_title: `Minería de texto histórica - colaboración al proyecto "Revealing Cooperation and Conflict Project"`,
        link_dt: `https://repositorio.escuelaing.edu.co/handle/001/521`
    },
    {
        title: `B.Sc in Computer Science`,
        institution: "Servicio Nacional de Aprendizaje (SENA)",
        cardImage: "assets/img/education/sena.svg",
        place: "Bogotá, Colombia",
        time: "2009 - 2010",
        dissertation_title: "",
        link_dt: "#"
    }
];

const show_pro_education = () => {
    let output = "";
    professional_education.forEach(({ title, institution, cardImage, place, time, dissertation_title, link_dt }) => {

        const titleArray = title.split(" ");
        const titleColor = titleArray.slice(0, 1).map((item) => `<span class="color-primary">${item}</span>`).join("");
        const titleText = titleArray.slice(1, titleArray.length).map((item) => `${item}`).join(" ");

        const fullTitle = titleColor + " " + titleText;

        dissertation_title_div = "";

        if (dissertation_title != "") {
            dissertation_title_div = `
                <div>
                    <p>
                        <span class="color-primary"><strong>Dissertation Title:</strong></span>
                        <a href="${link_dt}" target="_blank">
                            ${dissertation_title}
                        </a>
                    </p>
                </div>`;
        }

        output += `
            <div class="resume-item">
                <h4>${fullTitle}</h4>
                <h5 class="item-date">
                    <i class="fas fa-calendar-alt icon" style="margin-right:10px"></i>
                    ${time}
                </h5>
                <div class="items-container">
                    <div class="company-name">
                        <img
                            src="${cardImage}"
                            alt=""
                            width="24px"
                            height="24px"
                            style="background-color: white; padding: 2px; border-radius: 25%;"
                        >
                        ${institution}
                    </div>
                    <!--
                    <div class="company-place">
                        ${place}
                    </div>
                    -->
                </div>
                ${dissertation_title_div}
            </div>`;

    });

    education_cards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", show_pro_education);


// MOOCs
const education_mooc_cards = document.querySelector(".education-moocs-cards");
const mooc_education = [
    {
        title: `Professional Certificate in Google Project Management`,
        platform: "Coursera",
        cardImage: "assets/img/education/coursera.svg",
        instructor: "Google",
        time: "2024 - Current",
        courses: [
            {
                title: `Foundations of Project Management`,
                link: `https://www.coursera.org/account/accomplishments/verify/48BMTF6WDHTV`
            },
            {
                title: `Project Initiation: Starting a Successful Project`,
                link: `#`
            },
        ]
    },
    {
        title: `Professional Certificate in Back-End Developer`,
        platform: "Coursera",
        cardImage: "assets/img/education/coursera.svg",
        instructor: "Meta ",
        time: "2023 - Current",
        courses: [
            {
                title: `Introduction to Back-End Development`,
                link: `https://www.coursera.org/account/accomplishments/verify/4NXTQH73HGDJ`
            },
            {
                title: `Programming in Python`,
                link: `https://www.coursera.org/account/accomplishments/verify/TFN7GK64HHUZ`
            },
            {
                title: `Version Control`,
                link: `https://www.coursera.org/account/accomplishments/verify/2RL7LZBNLB7H`
            },
            {
                title: `Introduction to Databases for Back-End Development`,
                link: `https://www.coursera.org/account/accomplishments/verify/F83EQUF7CUYK`
            },
            {
                title: `Django Web Framework`,
                link: `https://www.coursera.org/account/accomplishments/verify/QVSHK2G6MZ66`
            },
            {
                title: `APIs`,
                link: `#`
            },
        ]
    },
    {
        title: `Specialization in Project Management Principles and Practices`,
        platform: "Coursera",
        cardImage: "assets/img/education/coursera.svg",
        instructor: "University of California, Irvine",
        time: "2022 - 2022",
        courses: [
            {
                title: `Initiating and Planning Projects`,
                link: `https://www.coursera.org/account/accomplishments/verify/6YQGFE8U3AMW`
            },
            {
                title: `Budgeting and Scheduling Projects`,
                link: `https://www.coursera.org/account/accomplishments/verify/3L9P8D9R9JUW`
            },
            {
                title: `Managing Project Risks and Changes`,
                link: `https://www.coursera.org/account/accomplishments/verify/SZWNWBBZNU9J`
            },
        ]
    },
    {
        title: `Specialization in Deep Learning`,
        platform: "Coursera",
        cardImage: "assets/img/education/coursera.svg",
        instructor: "DeepLearning.AI",
        time: "2020 - 2021",
        courses: [
            {
                title: `Neural Networks and Deep Learning`,
                link: `https://www.coursera.org/account/accomplishments/certificate/PRNK9S36YTRA`
            },
            {
                title: `Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization`,
                link: `https://www.coursera.org/account/accomplishments/certificate/LKKGSFVC28W4`
            },
            {
                title: `Structuring Machine Learning Projects`,
                link: `https://www.coursera.org/account/accomplishments/certificate/R7BB5VQC54JL`
            },
        ]
    },
    {
        title: `Specialization in Data Science`,
        platform: "EdX",
        cardImage: "assets/img/education/edx-1.svg",
        instructor: "Harvard University",
        time: "2018 - 2019",
        courses: [
            {
                title: `R Basics`,
                link: `https://courses.edx.org/certificates/5683d6e296224883a12702078d7070a9`
            },
            {
                title: `Visualization`,
                link: `https://courses.edx.org/certificates/5eb6a36558d6410f8e936388019ece8`
            },
            {
                title: `Probability`,
                link: `https://courses.edx.org/certificates/eb9991dfe81e47a2aa7d8bdef2f95477`
            },
            {
                title: `Inference and Modeling`,
                link: `https://courses.edx.org/certificates/7ccdd2c76e1d44e2b55fb7391367249b`
            },
            {
                title: `Productivity Tools`,
                link: `https://courses.edx.org/certificates/75d2137639184ceeb862424a5ec8d264`
            },
            {
                title: `Data Wrangling`,
                link: `ttps://courses.edx.org/certificates/0b27c1ec1fd343988532bb44dee28e89`
            },
            {
                title: `Linear Regression`,
                link: `https://courses.edx.org/certificates/637a7c1596cc45c58d588eea3027f99d`
            },
            {
                title: `Machine Learning`,
                link: `https://courses.edx.org/certificates/0ea156f762a74462930d03d7a8379596`
            },
        ]
    }
];

const show_mooc_education = () => {
    let output = "";
    mooc_education.forEach(({ title, platform, cardImage, instructor, time, courses }) => {

        const titleArray = title.split(" in ");
        const titleColor = titleArray.slice(0, 1).map((item) => `<span class="color-primary">${item}</span>`).join("");
        const titleText = titleArray.slice(1, titleArray.length).map((item) => `${item}`).join(" ");

        const fullTitle = titleColor + " " + titleText;

        courses_div = "";

        courses.forEach(({ title, link }) => {
            courses_div += `
                        <div class="item">
                            <i class="fa-solid fa-chevron-right icon color-primary"></i>
                            <a href="${link}" target="_blank">${title}</a>
                        </div>`;
        });

        output += `
            <div class="resume-item">
                <h4>${fullTitle}</h4>
                <h5 class="item-date">
                    <i class="fas fa-calendar-alt icon" style="margin-right:10px"></i>
                    ${time}
                </h5>
                <div class="items-container">
                    <div class="company-name">
                        <img
                            src="${cardImage}"
                            alt=""
                            width="24px"
                            height="24px"
                            style="background-color: white; padding: 2px; border-radius: 25%;"
                        >
                        ${instructor} at ${platform}
                    </div>

                </div>
                ${courses_div}
            </div>`;

    });

    education_mooc_cards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", show_mooc_education);