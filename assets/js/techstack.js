AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "A high-level, interpreted programming language known for its simplicity, readability, and flexibility. It is commonly used for data analysis, scientific computing, web development, and artificial intelligence.",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "A version control system used for tracking changes in source code during software development. It allows multiple developers to collaborate on the same codebase, manage versions of their code, and revert to previous versions if necessary.",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"A general-purpose, low-level programming language that is known for its efficiency, speed, and ability to directly manipulate computer memory. It is commonly used for system programming, operating systems, and embedded systems."
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "A general-purpose, high-level programming language that is an extension of the C language. It is known for its flexibility, efficiency, and object-oriented programming capabilities. It is commonly used for developing complex applications, such as video games, operating systems, and scientific simulations.",
  },
  {
    langImage: "assets/images/techstack-page/powerbi.png",
    langName: "PowerBI",
    langDesc: "A business analytics service by Microsoft that provides interactive visualizations and business intelligence capabilities with an interface that is user-friendly for non-technical users. It is used to create reports and dashboards that can be shared with others in an organization."
  },
  {
    langImage: "assets/images/techstack-page/database.png",
    langName: "Database",
    langDesc: " A structured collection of data stored in a computer that can be accessed and managed by computer programs. Databases are commonly used for storing and retrieving information in a systematic way."
  },
  {
    langImage: "assets/images/techstack-page/tensorflow.png",
    langName: "TensorFlow",
    langDesc: "An open-source machine learning library developed by Google for building and training machine learning models. It provides a flexible architecture for building and deploying large-scale machine learning models across different platforms."
  },
  {
    langImage: "assets/images/techstack-page/keras.png",
    langName: "Keras",
    langDesc: "An open-source neural network library written in Python that provides a user-friendly interface for building and training deep learning models. It is built on top of TensorFlow and provides a simpler way to build deep learning models than using TensorFlow directly."
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400">
      <div class="tech_card">
        <div class="card_img">
            <img src ="${stack.langImage}" class="featured_image">
        </div>
        <div class="card_header">
          <header>
            <div class="text-center langName">
                <h4>${stack.langName}</h4>
            </div>
          </header>
          <div class="description">
             ${stack.langDesc}
          </div>
        </div>
      </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
