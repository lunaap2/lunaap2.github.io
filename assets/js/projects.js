
const projects_cards = document.querySelector(".projects-cards");
const projects = [
    {
        title: "Power BI - Power Query M\nAdvance Functions",
        subtitle: "Master Data Transformation",
        description: "A repository that contains a collection of custom functions for Power Query M, designed to streamline and optimize data transformation.",
        svg: "power-bi",
        name: "Power BI - Power Query M",
        url: "https://github.com/JuanS3/PowerQueryM",
        align_bst: ""
    },
    // {
    //     service: `Data Engineering and Architecture`,
    //     subtitle: "Engineer Data Excellence",
    //     description: "Develop, construct, test, and maintain data architectures, data set processes, and backend processes and platforms.",
    //     fa_image: "bx bx-tachometer",
    //     align_bst: "mt-4 mt-lg-0",
    // },
    // {
    //     service: `Data Science and Machine Learning`,
    //     subtitle: "Gain Data Mastery",
    //     description: "Develop and deliver data-driven solutions that meet the needs of the organization, such as predictive models and recommendation systems.",
    //     fa_image: "bx bx-world",
    //     align_bst: "mt-4",
    // },
    // {
    //     service: `Data Strategy and Governance`,
    //     subtitle: "Ensure Data Integrity",
    //     description: "Identify ways to improve data, align architecture with business requirements, and conduct research for industry and business questions.",
    //     fa_image: "bx bx-slideshow",
    //     align_bst: "mt-4",
    // },
    // {
    //     service: `Data Visualization and Storytelling`,
    //     subtitle: "Visualize Success",
    //     description: "Develop and deliver data visualizations that communicate insights effectively, such as dashboards and reports.",
    //     fa_image: "bx bx-arch",
    //     align_bst: "mt-4",
    // },
];

const show_projects = () => {
    let output = "";
    projects.forEach(({ title, subtitle, description, svg, name, url, align_bst }) => {

        output += `
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch ${align_bst}">
                <div class="icon-box">
                    <img
                        src="assets/img/svg/${svg}.svg"
                        alt="${name}"
                        width="50"
                        height="50"
                    >
                      <h4><a href="${url}" target="_blank">${title}</a></h4>
                      <h5><a href="${url}" target="_blank">${subtitle}</a></h5>
                      <p>${description}</p>
                </div>
            </div> `;
    });

    projects_cards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", show_projects);
