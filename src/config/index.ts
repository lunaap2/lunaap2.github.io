import type { SiteConfig, SiteContent } from "../types";

const name = "Sebastián Martínez";
const specialty = "Data Nerd & Python Engineer";
const email = "sebastian.martinez.serna@gmail.com";
const summary =
  "I am a passionate data with 9 years of experience in the field. I have a strong background in machine learning, artificial intelligence, and data analysis. I am skilled in using Python, SQL, NoSQL, and other data science tools to extract insights from data and build models that solve real-world problems. I am a team player and I am always eager to learn new things.";

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
        "Develop and deliver comprehensive coursework on data structures, with a strong emphasis on practical applications and real-world problem-solving. Topics covered include arrays, stacks, queues, linked lists, trees, and graph traversal techniques. By aligning lessons with industry trends, students gain applicable skills to meet workforce demands.",
        "Pioneered a project-based learning methodology that emphasizes hands-on experience. Notable projects include console-based games like Sokoban, chess and Sudoku, which challenge students to utilize data structures for algorithm design and optimization. These projects foster critical thinking and teamwork while connecting theoretical concepts with tangible outcomes.",
        "Redesigned the curriculum to integrate NoSQL databases, specifically focusing on MongoDB. Students were guided through the migration of relational models to NoSQL schema designs, enabling them to understand performance optimizations and the advantages of flexible data models. Workshops and case studies ensured deep comprehension and readiness for professional challenges."
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
        "Spearheaded the development and optimization of large-scale data pipelines to enable analytics. Introduced innovative processing techniques that reduced latency by 40%, empowering teams with faster access to actionable insights.",
        "Collaborated with stakeholders across marketing, operations, and product development to define data-driven strategies. Delivered state-of-the-art dashboards and reports, enhancing decision-making processes and driving a 20% increase in campaign efficiency.",
        "Oversaw the transformation of traditional workflows into modern, data-centric approaches. By implementing advanced data platforms and leveraging automation, operational efficiency improved by 25%, and accuracy in reporting was enhanced significantly."
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
        "Designed and deployed scalable data solutions tailored to support high-volume environments, automating ETL pipelines to streamline operations. Efforts led to a 50% reduction in manual processing time and enhanced data availability for analytics.",
        "Optimized backend systems to handle complex queries and large datasets, resulting in a 35% improvement in performance. This enhancement significantly supported real-time reporting capabilities and critical business insights.",
        "Built strong relationships with internal stakeholders, ensuring alignment between technical solutions and business objectives. Delivered training and support to non-technical teams, enabling better utilization of data resources and fostering a culture of data-driven decision-making."
      ],
      "stack": {
        "Development": ["Python", "NoSQL", "Containers", "GNU/Linux", "Git"],
        "Data Warehouses": ["NoSQL: BigQuery"],
        "DataViz Tools": ["Power BI", "Looker"],
        "ETL Frameworks": ["Apache Spark", "Apache Airflow", "PySpark"],
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
        "Developed and maintained scalable, robust data pipelines capable of processing millions of data points daily. The system ensured seamless data flow, supporting real-time analytics and machine learning initiatives.",
        "Reengineered database schemas and implemented indexing strategies, reducing query execution times by 25%. Improvements enabled faster access to critical business metrics, significantly enhancing decision-making efficiency.",
        "Collaborated with data scientists and analysts to implement predictive models, integrating them into production workflows. This collaboration provided actionable insights that improved key business processes and customer satisfaction."
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
        "Designed and implemented data processing frameworks to handle high-velocity, high-volume data streams. Solutions enabled real-time insights, directly impacting strategic initiatives and customer engagement.",
        "Led the migration of legacy systems to cloud-based platforms, reducing infrastructure costs and enhancing scalability. Efforts minimized downtime during migration, maintaining uninterrupted service availability.",
        "Worked closely with data scientists and IT teams to optimize workflows for model deployment. Streamlined processes improved the accuracy and speed of delivering AI-driven insights to production environments."
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
        "Led the development of a deep learning model for emotion recognition using voice data. Achieved an 65% accuracy rate by implementing advanced optimization techniques and rigorous cross-validation, exceeding project expectations.",
        "Integrated machine learning models into real-time systems for enhanced user experiences, leveraging AI capabilities to deliver innovative product features. The implementation improved user satisfaction metrics by 15%.",
        "Ensured strict adherence to data ethics and privacy standards while managing large-scale datasets. Delivered robust AI models that balanced performance with compliance to regulatory requirements."
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
        "Designed and implemented Python-based applications, focusing on performance and scalability. Enhanced system efficiency by reducing processing times by 20% through effective code optimization.",
        "Developed RESTful APIs to facilitate seamless integration with third-party systems. Improved interoperability and reduced deployment times, enabling faster delivery of business solutions.",
        "Migrated legacy systems to modern architectures, minimizing disruptions and ensuring smooth transitions. Introduced robust security measures that fortified system reliability and compliance."
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
        "Designed and deployed advanced dashboards and scalable data warehouses to support real-time analytics. Delivered insights that drove a 15% increase in operational efficiency across key departments.",
        "Streamlined ETL workflows by integrating automation tools, reducing processing times by 35%. Enhanced data reliability and consistency for internal and external reporting needs.",
        "Conducted extensive training sessions on BI tools and reporting methodologies for non-technical teams. Improved data literacy and enabled a broader organizational shift towards data-driven decision-making."
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
      degree: `Professional Certificate in Back-End Developer`,
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
      institution: "Coursera",
      instructor: "University of California, Irvine",
      startDate: "2022",
      endDate: "2022",
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
      ]
    },
    {
      educationType: "Informal",
      degree: `Specialization in Deep Learning`,
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
          certificate: `https://www.coursera.org/account/accomplishments/certificate/PRNK9S36YTRA`
        },
        {
          name: `Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization`,
          certificate: `https://www.coursera.org/account/accomplishments/certificate/LKKGSFVC28W4`
        },
        {
          name: `Structuring Machine Learning Projects`,
          certificate: `https://www.coursera.org/account/accomplishments/certificate/R7BB5VQC54JL`
        },
      ]
    },
    {
      educationType: "Informal",
      degree: `Specialization in Data Science`,
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
          certificate: `https://courses.edx.org/certificates/5eb6a36558d6410f8e936388019ece8`
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
      I'm Sebastián Martínez, a data and artificial intelligence systems engineer with a passion for using technology to solve real-world problems.
      I have over 9 years of experience in the industry, and I've worked on a variety of projects, from developing data pipelines to building machine learning models.
      I'm always looking for new challenges, and I'm excited to use my skills to make a difference in the world.
      If you're looking for a data and AI engineer who is passionate about their work, then I'm your guy.
      Get in touch with me today to learn more about my work and how I can help you achieve your goals.
    `,
    image: "/me/me.webp",
  },
};
