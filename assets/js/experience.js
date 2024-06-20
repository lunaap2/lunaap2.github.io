const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
        title: `Developer Engineer`,
        company: "BODHITRI",
        cardImage: "assets/img/experience/bodhitri.jpg",
        place: "Bogotá, Colombia",
        time: "Jun. 2024 - Current",
        desp:
            `Writing effective and scalable codes,`
            + `Improve functionality of existing systems,`
            + `Provide technical solutions to user requirements,`
            + `Designing and implementing robust applications,`
            + `Maintain and upgrade existing systems,`
            + `Aligned architecture with business requirements,`
            + `Delivered data-driven solutions that met the needs of the organization,`
            + `Mentored junior data engineers and analysts,`
    },
    {
        title: `Professor of Data Structures`,
        company: "INTER",
        cardImage: "assets/img/experience/inter.jpg",
        place: "Bogotá, Colombia",
        time: "Feb. 2024 - Current",
        desp:
            `Developed and delivered lectures,`
            + `Developed and graded assignments,`
            + `Developed and graded quizzes and exams,`
            + `Developed and graded projects,`
            + `Developed and graded labs,`
    },
    {
        title: `Data Lead`,
        company: "Dentsu",
        cardImage: "assets/img/experience/dentsu.jpeg",
        place: "Bogotá, Colombia",
        time: "Ago. 2023 - Feb. 2024",
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
        title: `Professor of Data Structures and Data Bases`,
        company: "INTER",
        cardImage: "assets/img/experience/inter.jpg",
        place: "Bogotá, Colombia",
        time: "Ago. 2023 - Dec. 2023",
        desp:
            `Professor of the course "Data Structures" and "Data Bases",`
            + `Developed and delivered lectures,`
            + `Developed and graded assignments,`
            + `Developed and graded quizzes and exams,`
            + `Developed and graded projects,`
            + `Developed and graded labs,`
    },
    {
        title: `Data Developer`,
        company: "HAVAS Media Group",
        cardImage: "assets/img/experience/havas-media.jpg",
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
        cardImage: "assets/img/experience/klym.jpg",
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
        cardImage: "assets/img/experience/ntt-data.jpg",
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
        cardImage: "assets/img/experience/uzacatecas.jpg",
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
        cardImage: "assets/img/experience/rollup-consulting.jpg",
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
        cardImage: "assets/img/experience/rollup-consulting.jpg",
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

const show_experience = () => {
    let output = "";
    exp.forEach(({ title, cardImage, company, place, time, desp }) => {
        const despArray = desp.split(",");
        const despList = despArray.slice(0, -1).map((item) => `
      <div class="item">
        <i class="fa-solid fa-chevron-right icon color-primary"></i>
        ${item}
      </div>`).join("");

        const titleArray = title.split(" ");
        const titleColor = titleArray.slice(0, 1).map((item) => `<span class="color-primary">${item}</span>`).join("");

        const titleText = titleArray.slice(1, titleArray.length).map((item) => `${item}`).join(" ");

        const fullTitle = titleColor + " " + titleText;

        output += `
            <div class="resume-item">
                <h4>${fullTitle}</h4>
                <h5 class="item-date">
                    <i class="fas fa-calendar-alt icon" style="margin-right:10px"></i> ${time}
                </h5>
                <div class="items-container">
                    <div class="company-name">
                        <img
                            src="${cardImage}"
                            alt="${company}"
                            width="24px"
                            height="24px"
                            style="border-radius: 25%;"
                        >
                        ${company}
                    </div>
                    <!--
                    <div class="company-place">
                        ${place}
                    </div>
                    -->
                </div>
                ${despList}
            </div>`;

    });

    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", show_experience);
