const services_cards = document.querySelector(".services-cards");
const services = [
    {
        service: `Advanced Artificial Intelligence Training`,
        subtitle: "Unlock Advanced AI Skills",
        description: "Specialized courses to develop skills in areas such as GPT, Midjourney, DALL-E, among others, in prompt engineering.",
        fa_image: "bx bxl-dribbble",
        align_bst: "",
    },
    {
        service: `Advanced Analytics Model Implementation`,
        subtitle: "Power Up Your Analytics",
        description: "Services to implement advanced analytics models optimizing data-driven decisions, such as trend prediction and process optimization.",
        fa_image: "bx bx-file",
        align_bst: "mt-4 mt-md-0",
    },
    {
        service: `Data Engineering and Architecture`,
        subtitle: "Engineer Data Excellence",
        description: "Develop, construct, test, and maintain data architectures, data set processes, and backend processes and platforms.",
        fa_image: "bx bx-tachometer",
        align_bst: "mt-4 mt-lg-0",
    },
    {
        service: `Data Science and Machine Learning`,
        subtitle: "Gain Data Mastery",
        description: "Develop and deliver data-driven solutions that meet the needs of the organization, such as predictive models and recommendation systems.",
        fa_image: "bx bx-world",
        align_bst: "mt-4",
    },
    {
        service: `Data Strategy and Governance`,
        subtitle: "Ensure Data Integrity",
        description: "Identify ways to improve data, align architecture with business requirements, and conduct research for industry and business questions.",
        fa_image: "bx bx-slideshow",
        align_bst: "mt-4",
    },
    {
        service: `Data Visualization and Storytelling`,
        subtitle: "Visualize Success",
        description: "Develop and deliver data visualizations that communicate insights effectively, such as dashboards and reports.",
        fa_image: "bx bx-arch",
        align_bst: "mt-4",
    },

];

const show_services = () => {
    let output = "";
    services.forEach(({ service, subtitle, description, fa_image, align_bst }) => {

        output += `
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch ${align_bst}">
                <div class="icon-box">
                    <div class="icon"><i class="${fa_image}"></i></div>
                    <h4><a href="">${service}</a></h4>
                    <h5><a href="">${subtitle}</a></h5>
                    <p>${description}</p>
                </div>
            </div>`;

    });

    services_cards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", show_services);