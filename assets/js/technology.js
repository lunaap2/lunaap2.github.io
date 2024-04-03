
const tech_stack = [
    {
        name: "Python",
        svg: "python",
        css: ""
    },
    {
        name: "C/C++",
        svg: "c",
        css: "mt-4 mt-md-0"
    },
    {
        name: "Go",
        svg: "go-8",
        css: "mt-4 mt-md-0"
    },
    {
        name: "Spark / PySpark",
        svg: "apache-spark-5",
        css: "mt-4 mt-lg-0"
    },
    {
        name: "Bash",
        svg: "bash-2",
        css: "mt-4"
    },
    {
        name: "Docker",
        svg: "docker-4",
        css: "mt-4"
    },
    {
        name: "django",
        svg: "django",
        css: "mt-4"
    },
    {
        name: "git / GitHub / GitLab",
        svg: "git-icon",
        css: "mt-4"
    },
    {
        name: "BigQuery",
        svg: "google-bigquery-logo-1",
        css: "mt-4"
    },
    {
        name: "Looker",
        svg: "looker-1",
        css: "mt-4"
    },
    {
        name: "Google Cloud Platform",
        svg: "google-cloud-1",
        css: "mt-4"
    },
    {
        name: "Data Science",
        svg: "data-science-icon",
        css: "mt-4"
    },
    {
        name: "Power BI",
        svg: "power-bi",
        css: "mt-4"
    },
    {
        name: "Qlik Sense",
        svg: "qlik-1",
        css: "mt-4"
    },
    {
        name: "PostgreSQL",
        svg: "postgresql",
        css: "mt-4"
    },
    {
        name: "Pandas",
        svg: "pandas",
        css: "mt-4"
    },
    {
        name: "TensorFlow",
        svg: "tensorflow-2",
        css: "mt-4"
    },
    {
        name: "Mongo DB",
        svg: "mongodb-icon-1",
        css: "mt-4"
    },
    {
        name: "GNU/Linux",
        svg: "tux",
        css: "mt-4"
    },
    {
        name: "Matplotlib",
        svg: "matplotlib-1",
        css: "mt-4"
    }
];

const tech_stack_query = document.querySelector(".tech_stack");


// function for rendering project cards data
const show_stack_tech = () => {
    let output = "";
    tech_stack.forEach(({ name, svg, css }) => {
    output += `
        <div class="col-lg-3 col-md-4 ${css}">
            <div class="icon-box">
                <img
                    src="assets/img/svg/${svg}.svg"
                    alt="${name}"
                    width="50"
                    height="50"
                >
                <h3>${name}</h3>
            </div>
        </div>`;
    });
    tech_stack_query.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", show_stack_tech);
