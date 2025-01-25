import type { SiteConfig, SiteContent } from "../types";

const name = "Sebastián Martínez";
const specialty = "Data Nerd & Python Engineer";
const email = "sebastian.martinez.serna@gmail.com";
const experienceYears = new Date().getFullYear() - 2016;
const summary =
  `As a results-driven data expert with ${experienceYears} years of experience in data engineering, machine learning, AI, data architecture and analytics, I have the skills to contribute to your business.I am proficient in Python, SQL, NoSQL and a range of data science tools, and specialize in designing data architectures, transforming complex data into actionable insights, and building scalable solutions; My experience includes developing data pipelines, creating machine learning models and addressing real-world business challenges. I am a collaborative team player with a passion for continuous learning and am always seeking new opportunities to apply my skills and drive impactful results.`

export const SITE_CONFIG: SiteConfig = {
  title: `${name} — ${specialty}`,
  author: name,
  description: summary,
  lang: "en",
  siteLogo: "/me/me.small.webp",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "Services", href: "#services" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://twitter.com/JuanS3Dev" },
    { text: "BlueSky", href: "https://juans3.bsky.social" },
    { text: "LinkedIn", href: "https://linkedin.com/in/jsebasstian-martinez" },
    { text: "Github", href: "https://github.com/JuanS3" },
    { text: "Gitlab", href: "https://gitlab.com/JuanS3" },
    { text: "Medium", href: "https://medium.com/@JuanS3" },
    { text: "Youtube", href: "https://youtube.com/@datolytix" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: name,
    specialty: specialty,
    summary: summary,
    email: email,
  },

  experience: [
    {
      "company": "INTER",
      "position": "Professor",
      "startDate": "Aug 2023",
      "endDate": "Current",
      "summary": [
        "Developed and delivered comprehensive coursework on data structures, emphasizing practical applications and real-world problem-solving. The curriculum covered core concepts including arrays, stacks, queues, linked lists, trees, and graph traversal techniques, ensuring students gained a robust foundation in fundamental data structures. By aligning lessons with current industry trends and best practices, I aimed to equip students with the skills necessary to meet evolving workforce demands.",
        "Pioneered a project-based learning methodology to provide students with hands-on experience. Notable projects included the development of console-based games such as Sokoban, chess, and Sudoku. These projects challenged students to apply their knowledge of data structures to algorithm design, optimization, and game logic implementation. This approach fostered critical thinking, problem-solving skills, and teamwork while solidifying the connection between theoretical concepts and tangible outcomes.",
        "Led a curriculum redesign initiative to integrate NoSQL databases, with a specific focus on MongoDB. I guided students through the process of migrating relational data models to NoSQL schema designs, explaining the rationale behind different schema choices and emphasizing performance optimizations and the advantages of flexible data models. Hands-on workshops, real-world case studies, and practical exercises ensured a deep comprehension of NoSQL principles and prepared students for professional challenges involving modern data management techniques."
      ],
      "stack": {
        "Development": ["Python", "Java", "Javascript", "Go", "SQL", "NoSQL", "Containers", "Git"],
        "Data Bases": ["SQL: PostgreSQL", "SQL: MySQL", "SQL: Oracle", "SQL: MS SQL Server", "NoSQL: MongoDB"],
      },
      "logo": "/experience/inter.jpg",
    },
    {
      "company": "BODHITRI",
      "position": "Developer Engineer",
      "startDate": "Jun 2024",
      "endDate": "Oct 2024",
      "summary": [
        "Led the end-to-end development of scalable and innovative software solutions, ensuring robust architecture and optimized performance. Collaborated closely with cross-functional teams to gather requirements, define goals, and deliver features that improved system efficiency by 30%.",
        "Conducted extensive refactoring of legacy codebases to improve readability, maintainability, and scalability. Implemented modern design patterns and best practices, which reduced system bugs by 40% and improved deployment cycles by 25%.",
        "Played a pivotal role in mentoring junior developers, introducing agile practices, and fostering a culture of continuous learning. Led code reviews, knowledge-sharing sessions, and workshops on the latest software Development and methodologies, enhancing team productivity."
      ],
      "stack": {
        "Development": ["Python", "SQL", "NoSQL", "Containers", "Git"],
        "Data Bases": ["SQL: PostgreSQL", "SQL: MySQL", "SQL: MS SQL Server", "NoSQL: MongoDB"],
        "Cloud Tools": [
          "AWS: S3", "AWS: Redshift", "AWS: EC2", "AWS: Lambda",
          "GCP: BigQuery", "GCP: Cloud Storage", "GCP: Cloud Functions"
        ],
      },
      "logo": "/experience/bodhitri.jpg",
    },
    {
      "company": "Dentsu",
      "position": "Data Lead",
      "startDate": "Aug 2023",
      "endDate": "Feb 2024",
      "summary": [
        "Spearheaded the development and optimization of large-scale data pipelines to support advanced analytics initiatives across the organization. By introducing innovative data processing techniques and streamlining existing workflows, I achieved a 40% reduction in data latency, empowering business intelligence and analytics teams with faster access to actionable insights and enabling more timely decision-making.",
        "Collaborated closely with stakeholders across marketing, operations, and product development departments to define and implement data-driven strategies. I designed and delivered state-of-the-art dashboards and reports using tools like PowerBI and Looker, providing clear visualizations and insightful analyses of key performance indicators. These efforts demonstrably enhanced decision-making processes and contributed to a 20% increase in overall campaign efficiency.",
        "Oversaw the transformation of traditional, manual workflows into modern, automated, and data-centric approaches. By implementing advanced data platforms on AWS (S3, EC2, Lambda, Redshift, RDS) and leveraging automation tools like Apache Airflow, I significantly improved operational efficiency by 25% and enhanced the accuracy and reliability of reporting processes, minimizing manual errors and freeing up valuable time for strategic initiatives."
      ],
      "stack": {
        "Development": ["Python", "Rust", "SQL", "NoSQL", "Containers", "GNU/Linux", "Git"],
        "Data Warehouses": ["SQL: PostgreSQL", "NoSQL: MongoDB"],
        "DataViz Tools": ["Power BI", "Looker"],
        "ETL Frameworks": ["Apache Spark", "Apache Airflow", "PySpark"],
        "Cloud Tools": [
          "AWS: S3", "AWS: Redshift", "AWS: EC2", "AWS: Lambda",
        ],
      },
      "logo": "/experience/dentsu.jpeg"
    },
    {
      "company": "HAVAS Media Group",
      "position": "Data Developer",
      "startDate": "Dec 2022",
      "endDate": "Jul 2023",
      "summary": [
        "Designed and deployed highly scalable data solutions tailored to support high-volume data environments, with a primary focus on automating ETL (Extract, Transform, Load) pipelines to streamline data operations and improve data accessibility. These efforts resulted in a significant 50% reduction in manual processing time, freeing up data engineers for more complex tasks and enhancing data availability for critical business analytics and reporting.",
        "Optimized backend data systems, including databases and data processing frameworks (Apache Spark, Apache Hadoop, Apache Hive), to efficiently handle complex queries and extremely large datasets. These optimizations resulted in a 35% improvement in overall system performance, significantly enhancing real-time reporting capabilities and facilitating the delivery of timely and accurate business insights to stakeholders.",
        "Focused on building strong working relationships with internal stakeholders across various departments, actively engaging in communication to ensure that technical solutions effectively aligned with overarching business objectives. Delivered targeted training and ongoing support to non-technical teams on data tools and reporting methodologies, empowering them to better utilize available data resources and fostering a strong culture of data-driven decision-making throughout the organization."
      ],
      "stack": {
        "Development": ["Python", "NoSQL", "Containers", "GNU/Linux", "Git"],
        "Data Warehouses": ["NoSQL: BigQuery"],
        "DataViz Tools": ["Power BI", "Looker"],
        "ETL Frameworks": ["Apache Spark", "Apache Airflow", "PySpark", "Apache Hive", "Apache Hadoop"],
        "Cloud Tools": [
          "GCP: BigQuery", "GCP: Cloud Storage", "GCP: Cloud Functions", "GCP: Composer", "GCP: Cloud Run", "GCP: Cloud SQL", "GCP: Dataproc"
        ],
      },
      "logo": "/experience/havas-media.jpg"
    },
    {
      "company": "KLYM",
      "position": "Data Engineer",
      "startDate": "May 2022",
      "endDate": "Dec 2022",
      "summary": [
        "Developed and maintained scalable and robust data pipelines using Python, Apache Airflow, and AWS services (S3, EC2, Lambda, Redshift, RDS), designed to process millions of data points on a daily basis. This system ensured seamless and reliable data flow, providing critical support for real-time analytics dashboards and machine learning initiatives that drove key business decisions.",
        "Reengineered existing database schemas and implemented advanced indexing strategies within PostgreSQL databases to optimize query performance. These improvements resulted in a 25% reduction in average query execution times, enabling faster access to critical business metrics and significantly enhancing overall decision-making efficiency for business analysts and other data consumers.",
        "Worked closely with data scientists and business analysts to implement and integrate predictive models into production workflows. This collaborative effort facilitated the translation of complex analytical insights into actionable business strategies, leading to improvements in key business processes and increased customer satisfaction."
      ],
      "stack": {
        "Development": ["Python", "Django", "NoSQL", "Containers", "GNU/Linux", "Git"],
        "Data Bases": ["SQL: PostgreSQL", "NoSQL: MongoDB", "NoSQL: Redis"],
        "ETL Frameworks": ["Apache Spark", "Apache Airflow", "PySpark"],
        "Cloud Tools": [
          "AWS: S3", "AWS: Redshift", "AWS: EC2", "AWS: Lambda",
        ],
      },
      "logo": "/experience/klym.jpg"
    },
    {
      "company": "NTT Data",
      "position": "Data Engineer",
      "startDate": "Oct 2021",
      "endDate": "Apr 2022",
      "summary": [
        "Designed and implemented robust data processing frameworks using technologies like Apache Spark, Apache Hadoop, and GCP services (BigQuery, Cloud Storage, Cloud Functions) to effectively handle high-velocity and high-volume data streams. These solutions enabled the generation of real-time business insights, which directly impacted strategic initiatives and improved customer engagement strategies.",
        "Led the migration of several legacy on-premise data systems to modern cloud-based platforms on AWS and GCP. This strategic migration reduced infrastructure costs significantly, improved system scalability and reliability, and minimized downtime during the transition, ensuring uninterrupted service availability for business operations.",
        "Collaborated closely with data scientists and IT operations teams to optimize workflows for efficient model deployment and integration into production environments. These streamlined processes significantly improved both the accuracy and speed of delivering AI-driven insights to production systems, enabling faster and more effective implementation of data-driven solutions."
      ],
      "stack": {
        "Development": ["Python", "Scala", "NoSQL", "Containers", "GNU/Linux", "Git"],
        "Data Warehouses": ["SQL: PostgreSQL", "SQL: MySQL", "SQL: Oracle", "SQL: MS SQL Server", "NoSQL: BigQuery"],
        "DataViz Tools": ["Power BI", "Looker"],
        "ETL Frameworks": ["Apache Spark", "Apache Airflow", "PySpark"],
        "Cloud Tools": [
          "AWS: S3", "AWS: Redshift", "AWS: EC2", "AWS: Lambda",
          "GCP: BigQuery", "GCP: Cloud Storage", "GCP: Cloud Functions", "GCP: Composer", "GCP: Cloud Run", "GCP: Cloud SQL", "GCP: Pub/Sub", "GCP: Dataflow", "GCP: Dataproc",
          "MS Azure: Data Factory", "MS Azure: Synapse", "MS Azure: Synapse Analytics", "MS Azure: Synapse SQL", "MS Azure: Synapse Spark"
        ],
      },
      "logo": "/experience/ntt-data.jpg"
    },
    {
      "company": "Universidad Autonoma de Zacatecas",
      "position": "Business Practices in AI",
      "startDate": "Mar 2021",
      "endDate": "Jul 2021",
      "summary": [
        "Led the development and implementation of a deep learning model for emotion recognition using voice data. By employing advanced optimization techniques, including hyperparameter tuning and model architecture exploration, and conducting rigorous cross-validation, I achieved a 65\% accuracy rate, exceeding initial project expectations and demonstrating a strong understanding of deep learning principles and audio processing.",
        "Integrated developed machine learning models into real-time systems to enhance user experiences and deliver innovative product features. By leveraging AI capabilities to personalize user interactions and provide context-aware recommendations, the implementation of these models demonstrably improved user satisfaction metrics by 15\%, demonstrating the value of AI in enhancing user engagement.",
        "Prioritized and ensured strict adherence to data ethics and privacy standards throughout the lifecycle of data management and model development, particularly when working with large-scale datasets. This commitment to responsible AI practices ensured the delivery of robust and compliant AI models that balanced high performance with adherence to all relevant regulatory requirements and ethical considerations."
      ],
      "stack": {
        "Development": ["Python", "NoSQL", "Containers", "GNU/Linux", "Git"],
        "AI Tools": ["TensorFlow", "Keras", "Scikit-learn", "TensorFlow-Audio"],
      },
      "logo": "/experience/uzacatecas.jpg"
    },
    {
      "company": "Rollup Consulting",
      "position": "Python Developer",
      "startDate": "Nov 2019",
      "endDate": "Oct 2021",
      "summary": [
        "Designed, developed, and implemented various Python-based applications, placing a strong emphasis on performance optimization and scalability to meet the demands of growing user bases and increasing data volumes. Through effective code optimization techniques, including algorithmic improvements and efficient data structures, I enhanced overall system efficiency by reducing processing times by 20\%.",
        "Developed and maintained RESTful APIs using frameworks like Django and FastAPI to facilitate seamless integration with various third-party systems and services. This improved interoperability between different software components and significantly reduced deployment times for new features and business solutions, enabling faster delivery of value to clients.",
        "Led the migration of legacy systems to modern cloud-based architectures, minimizing disruptions to ongoing operations and ensuring smooth transitions for users. During these migrations, I introduced robust security measures, including authentication, authorization, and data encryption, which significantly fortified system reliability and ensured compliance with industry security standards and best practices."
      ],
      "stack": {
        "DataViz Tools": ["Power BI", "QlikSense", "Looker", "Python Dash"],
        "Data Warehouses": ["SQL: PostgreSQL", "SQL: MySQL", "SQL: Oracle", "SQL: MS SQL Server"],
        "Development": ["Python", "SQL", "Containers", "GNU/Linux", "Git"],
      },
      "logo": "/experience/rollup-consulting.jpg"
    },
    {
      "company": "Rollup Consulting",
      "position": "BI Consultant",
      "startDate": "Apr 2017",
      "endDate": "Oct 2021",
      "summary": [
        "Designed and deployed advanced business intelligence dashboards and scalable data warehouses to provide comprehensive support for real-time analytics and reporting. By delivering actionable insights derived from the data, I contributed to a 15\% increase in operational efficiency across key departments within the organization.",
        "Streamlined existing ETL (Extract, Transform, Load) workflows by integrating various automation tools and techniques, including scripting and workflow orchestration platforms. These improvements resulted in a 35\% reduction in data processing times, significantly enhancing data reliability and consistency for both internal and external reporting requirements.",
        "Conducted extensive training sessions and workshops on business intelligence tools, data analysis techniques, and reporting methodologies for non-technical teams across the organization. This initiative significantly improved overall data literacy within the company and enabled a broader organizational shift towards data-driven decision-making at all levels."
      ],
      "stack": {
        "DataViz Tools": ["Power BI", "QlikSense", "Looker", "Python Dash"],
        "Data Warehouses": ["SQL: PostgreSQL", "SQL: MySQL", "SQL: Oracle", "SQL: MS SQL Server"],
        "ETL Tools": ["Python", "SQL", "Containers", "GNU/Linux", "IBM Cognos Analytics"],
      },
      "logo": "/experience/rollup-consulting.jpg"
    }
  ],

  education: [
    {
      educationType: "Formal",
      degree: `M.Sc in Artificial Intelligence`,
      certificate: null,
      institution: "Universidad Internacional de la Rioja (UNIR)",
      instructor: null,
      startDate: "2021",
      endDate: "(On Hold)",
      dissertation: `Análisis para la identificación del trastorno depresivo mediante Twitter`,
      dissertationLink: `#`,
      logo: `/education/unir.png`,
      courses: null
    },
    {
      educationType: "Formal",
      degree: `B.Sc in Computer Science`,
      certificate: null,
      institution: "Escuela Colombiana de Ingeniería Julio Garavito (ECI)",
      instructor: null,
      startDate: "2011",
      endDate: "2016",
      dissertation: `Minería de texto histórica - colaboración al proyecto "Revealing Cooperation and Conflict Project"`,
      dissertationLink: `https://repositorio.escuelaing.edu.co/handle/001/521`,
      logo: `/education/eci.png`,
      courses: null
    },
    {
      educationType: "Formal",
      degree: `B.Sc in Computer Science`,
      certificate: null,
      institution: "Servicio Nacional de Aprendizaje (SENA)",
      instructor: null,
      startDate: "2009",
      endDate: "2010",
      dissertation: "",
      dissertationLink: null,
      logo: `/education/sena.svg`,
      courses: null
    },

    {
      educationType: "Informal",
      degree: `Professional Certificate in Google Project Management`,
      certificate: null,
      institution: "Coursera",
      instructor: "Google",
      startDate: "2024",
      endDate: "Current",
      dissertation: "",
      dissertationLink: null,
      logo: `/education/google.webp`,
      courses: [
        {
          name: `Foundations of Project Management`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/48BMTF6WDHTV`
        },
        {
          name: `Project Initiation: Starting a Successful Project`,
          certificate: `#`
        },
      ]
    },
    {
      educationType: "Informal",
      degree: `Professional Certificate in Google Advance Data Analytics`,
      certificate: null,
      institution: "Coursera",
      instructor: "Google",
      startDate: "2024",
      endDate: "Current",
      dissertation: "",
      dissertationLink: null,
      logo: `/education/google.webp`,
      courses: [
        {
          name: `Foundations of Data Science`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/1S89SOVRC75M`
        },
        {
          name: `Get Started with Python`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/JO6RE232IV81`
        },
        {
          name: `Go Beyound the numbers: Translate Data into Insights`,
          certificate: `#`
        },
      ]
    },
    {
      educationType: "Informal",
      degree: `Professional Certificate in Back-End Developer`,
      certificate: null,
      institution: "Coursera",
      instructor: "Meta",
      startDate: "2023",
      endDate: "Current",
      dissertation: null,
      dissertationLink: null,
      logo: `/education/meta.png`,
      courses: [
        {
          name: `Introduction to Back-End Development`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/4NXTQH73HGDJ`
        },
        {
          name: `Programming in Python`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/TFN7GK64HHUZ`
        },
        {
          name: `Version Control`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/2RL7LZBNLB7H`
        },
        {
          name: `Introduction to Databases for Back-End Development`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/F83EQUF7CUYK`
        },
        {
          name: `Django Web Framework`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/QVSHK2G6MZ66`
        },
        {
          name: `APIs`,
          certificate: `#`
        },
      ]
    },
    {
      educationType: "Informal",
      degree: `Specialization in Project Management Principles and Practices`,
      certificate: `https://www.coursera.org/account/accomplishments/specialization/verify/6FSCW9G0M5EI`,
      institution: "Coursera",
      instructor: "University of California, Irvine",
      startDate: "2022",
      endDate: "2025",
      dissertation: null,
      dissertationLink: null,
      logo: `/education/uci.webp`,
      courses: [
        {
          name: `Initiating and Planning Projects`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/6YQGFE8U3AMW`
        },
        {
          name: `Budgeting and Scheduling Projects`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/3L9P8D9R9JUW`
        },
        {
          name: `Managing Project Risks and Changes`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/SZWNWBBZNU9J`
        },
        {
          name: `Project Management Project`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/8BCAET44S58K`
        }
      ]
    },
    {
      educationType: "Informal",
      degree: `Specialization in Deep Learning`,
      certificate: null,
      institution: "Coursera",
      instructor: "DeepLearning.AI",
      startDate: "2020",
      endDate: "2021",
      dissertation: null,
      dissertationLink: null,
      logo: `/education/deeplearningai.png`,
      courses: [
        {
          name: `Neural Networks and Deep Learning`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/PRNK9S36YTRA`
        },
        {
          name: `Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/LKKGSFVC28W4`
        },
        {
          name: `Structuring Machine Learning Projects`,
          certificate: `https://www.coursera.org/account/accomplishments/verify/R7BB5VQC54JL`
        },
      ]
    },
    {
      educationType: "Informal",
      degree: `Specialization in Data Science`,
      certificate: null,
      institution: "EdX",
      instructor: "Harvard University",
      startDate: "2018",
      endDate: "2019",
      dissertation: null,
      dissertationLink: null,
      logo: `/education/harvardx.png`,
      courses: [
        {
          name: `R Basics`,
          certificate: `https://courses.edx.org/certificates/5683d6e296224883a12702078d7070a9`
        },
        {
          name: `Visualization`,
          certificate: `https://courses.edx.org/certificates/5eb6a36558d6410f8e936388019ece83`
        },
        {
          name: `Probability`,
          certificate: `https://courses.edx.org/certificates/eb9991dfe81e47a2aa7d8bdef2f95477`
        },
        {
          name: `Inference and Modeling`,
          certificate: `https://courses.edx.org/certificates/7ccdd2c76e1d44e2b55fb7391367249b`
        },
        {
          name: `Productivity Tools`,
          certificate: `https://courses.edx.org/certificates/75d2137639184ceeb862424a5ec8d264`
        },
        {
          name: `Data Wrangling`,
          certificate: `ttps://courses.edx.org/certificates/0b27c1ec1fd343988532bb44dee28e89`
        },
        {
          name: `Linear Regression`,
          certificate: `https://courses.edx.org/certificates/637a7c1596cc45c58d588eea3027f99d`
        },
        {
          name: `Machine Learning`,
          certificate: `https://courses.edx.org/certificates/0ea156f762a74462930d03d7a8379596`
        },
      ]
    }

  ],

  services: [
    {
      title: "Advanced Data Science and Analytics Services",
      description: "Unlock the full potential of your data with expert data science services. Specializing in predictive modeling, advanced analytics, and actionable business insights using machine learning and statistical techniques. Delivering solutions tailored to your unique business needs with tools like Python, R, and SQL.",
      icon: "/services/data-science.svg",
      technologies: ["Python", "R", "SQL", "Pandas", "Scikit-learn", "TensorFlow", "Power BI", "Tableau"]
    },
    {
      title: "Machine Learning Development and MLOps Solutions",
      description: "Develop and deploy scalable machine learning systems with end-to-end MLOps workflows. From creating proof-of-concept models to production-grade implementations, I ensure seamless integration into your operations. Specialized in TensorFlow, PyTorch, and Kubernetes for reliable and efficient AI solutions.",
      icon: "/services/machine-learning.svg",
      technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "MLflow", "Docker", "Kubernetes"]
    },
    {
      title: "Data Engineering and Big Data Pipeline Development",
      description: "Design and implement robust data pipelines and big data infrastructures to streamline your analytics and machine learning processes. Expertise in ETL development, data warehousing, and real-time data processing using cutting-edge tools like Apache Spark, Kafka, and AWS.",
      icon: "/services/data-engineering.svg",
      technologies: ["Apache Spark", "Airflow", "AWS", "PostgreSQL", "MongoDB", "Kafka", "Docker"]
    },
    {
      title: "Custom API and Backend Development Services",
      description: "Streamline your applications with expertly designed APIs and backends. I specialize in building scalable, secure, and high-performance RESTful and GraphQL services tailored to your business needs, using Python, FastAPI, and cloud-native architectures.",
      icon: "/services/api-development.svg",
      technologies: ["Python", "FastAPI", "Django", "MongoDB", "PostgreSQL", "AWS"]
    },
    {
      title: "AI Consulting for Business Transformation",
      description: "Transform your organization with strategic AI consulting services. I help businesses identify AI opportunities, implement intelligent solutions, and achieve measurable results. Specializing in predictive analytics, process automation, and tailored AI strategies for maximum ROI.",
      icon: "/services/ai-consulting.svg",
      technologies: ["Project Management", "Solution Architecture", "Technical Leadership", "AI Strategy"]
    },
    {
      title: "Business Intelligence Strategy and Consulting",
      description: "Optimize your decision-making with expert BI strategy and consulting services. From data modeling to dashboard development, I enable businesses to harness the power of data for real-time reporting and analytics, using industry-leading tools like Power BI, Tableau, and SQL.",
      icon: "/services/bi-consulting.svg",
      technologies: ["Power BI", "Tableau", "Looker Studio", "SQL", "DAX", "Data Warehousing"]
    },
    {
      title: "Custom Dashboard Creation and Data Visualization Services",
      description: "Transform raw data into compelling, actionable dashboards. I specialize in creating customized data visualizations that empower your team to make informed decisions quickly and confidently. Proficient in Power BI, Tableau, and interactive tools like Plotly.",
      icon: "/services/dashboard-creation.svg",
      technologies: ["Tableau", "Power BI", "Looker Studio", "Matplotlib", "Seaborn", "Plotly"]
    }
  ],


  projects: [
    {
      name: "PowerBI - Advance Functions",
      summary: "A repository that contains a collection of custom functions for Power Query M, designed to streamline and optimize data transformation.",
      linkPreview: "https://github.com/JuanS3/PowerQueryM",
      linkSource: "https://github.com/JuanS3/PowerQueryM",
      image: "/projects/pbiquery.png",
    },
  ],
  about: {
    description: `
      I'm Sebastián Martínez, a computer science graduate with a passion for using technology to solve real-world problems.
      I have over ${experienceYears} years of experience in the industry, and I've worked on a variety of projects, from developing data pipelines to building machine learning models.
      I'm always looking for new challenges, and I'm excited to use my skills to make a difference in the world.
      If you're looking for a data and AI engineer who is passionate about their work, then I'm your guy.
      Get in touch with me today to learn more about my work and how I can help you achieve your goals.
    `,
    image: "/me/me.webp",
  },
};
