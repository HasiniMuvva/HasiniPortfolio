import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `I’m a dedicated full stack developer who loves creating efficient and user-friendly web applications. With experience in agile methodologies and proficiency in Java, Python, JavaScript. I excel in both front-end and back-end development. I'm eager to take on new challenges in full stack, back-end, front-end, or cloud roles, always ready to learn and contribute to the team's success. When not coding, you’ll find me either annoying my pet dog, Jakku or immersed in a fantasy adventure movie, or exploring new technologies.
`

export const ABOUT_TEXT = `I am currently pursuing a master’s in Software Engineering Systems at Northeastern University. As an avid coder with a knack for solving challenges and crafting creative solutions, I have worked with various technologies such as React, Node.js, Next.js, Spring, MongoDB, MySQL, and PostgreSQL. I have hands-on experience implementing RESTful APIs using Node.js and deploying them on Google Cloud Platform (GCP). Previously, as a Test Automation Engineer at Accenture, I designed and automated test cases to ensure comprehensive coverage of software functionalities. I prepared clear documentation, explained test scenarios to clients, conducted performance testing with over 100 virtual users, and generated detailed reports to drive effective issue resolution and continuous software improvement.I consistently deliver high-quality code and bring a keen eye for detail to every project. With a strong commitment to continuous learning and a passion for technology, I am eager to tackle new challenges and contribute to the success of innovative projects.`

export const EXPERIENCES = [
  {
    year: "October 2022 - August 2023",
    role: "Test Automation Engineer",
    company: "Accenture",
    description: `In the banking project Raise, I implemented numerous test cases, managed 1000+ test suite migrations, and adjusted the framework as needed. I also conducted knowledge transfer sessions to equip clients with essential technical skills.`,
    technologies: ["Java", "Spring", "Selenium", "TestNG", "Junit", "Cucumber", "Postman", "Jmeter", "Vugen"],
  },
  {
    year: "June 2021 - August 2021",
    role: "Machine Learning Engineer",
    company: "Indian Servers",
    description: `Developed a real time image processing system using OpenCV for hand gesture recognition and tracking, enabled users to choose from a variety of colors and brush sizes.
    Led and Implemented an auto-encoder neural network using TensorFlow. Trained the model on a dataset of MNIST and achieved a loss of just  0.0484.`,
    technologies: ["OpenCV", "Python", "Matplotlib", "Tensor flow", "Scikit-learn"],
  },
];

export const PROJECTS = [
  {
    title: "Restaurant Management System",
    image: project1,
    description:
      "It is a software system designed to streamline restaurant operations, including order management, reservation handling, customer feedback collection, and inventory management. It employs Oracle SQL and PL/SQL for creating views, executing queries, and managing data with DML and DDL operations, utilizing functions and stored procedures for efficient task handling.",
    technologies: ["Oracle SQL", "PL/SQL", "DDL/DML", "TCL"],
    link: "https://github.com/Sai-Geeta-Acharya/DMDD_DineEase" // Add the link here
  },
  {
    title: "Cloud Native Webapp",
    image: project2,
    description:
      "Implemented secure RESTful APIs with Node.js and Sequelize ORM in a microservices architecture, integrating user management, CRUD operations, and automated email verification. Utilized serverless computing and Pub/Sub for scalability. Managed GCP infrastructure with Terraform, designed custom compute engine images, implemented encryption and SSL certificates, and facilitated seamless updates through continuous deployment and rolling updates.",
    technologies: ["Node.js", "Sequelize ORM","MicroServices", "Pub/Sub", "Terraform", "GCP","Basic Auth Authentication", "SSL Certificates", "CI/CD", "Linux", "Bash"],
    link: "https://github.com/CloudCourseSpring2024/webapp" // Add the link here
  },
  {
    title: "Library Management System",
    image: project3,
    description:
      "Library management application efficiently handles user registration and login, book and student management, and real-time status updates for borrowing activities. Implemented with Java and Swing for the GUI, it uses NetBeans as the IDE and MySQL for the database.",
    technologies: ["JAVA", "SWING", "MySQL"],
    link: "https://github.com/CSYE6200-Object-Oriented-DesignFall2023/final-project-final-group-8" // Add the link here
  },
  {
    title: "NammaBnB",
    image: project4,
    description:
      "Successfully executed Nammabnb project, seamlessly integrating front-end and back-end functionalities. Enabled hosts to showcase properties and guests to securely explore and book accommodations. Adhered to CRUD operations, routing, Redux, internationalization, and PWA standards for a professional-grade UI and intuitive user experience.",
    technologies: ["React", "Tailwind", "Prisma", "MongoDB", "NextAuth."],
    link: "https://github.com/info-6150-fall-2023/final-project-techno-sync" // Add the link here
  },
  {
    title: "Plant Disease Detection",
    image: project7,
    description:
      "Developed a robust plant disease detection system using Convolutional Neural Networks (CNN) with a remarkable accuracy rate on the Plant Village dataset, showcasing expertise in computer vision and machine learning for agricultural applications.",
    technologies: ["Python", "Keras", "sklearn", "Tensorflow"],
    link: "https://drive.google.com/file/d/19ICrBQTujWQjGt4zBujUb1u7S62csnJn/view?usp=sharing" // Add the link here
  },
  {
    title: "Hospital Database Management",
    image: project5,
    description:
      "creating and managing multiple tables to store information about doctors, patients, rooms, visitors, in-patients, out-patients, transaction types, and pharmacy. The project involved implementing primary and foreign keys, constraints, and inserting records to ensure data integrity and relationships between the entities. This setup allowed for efficient organization and retrieval of hospital-related data.",
    technologies: ["Oracle SQL", "LucidChart"],
    link: "https://drive.google.com/file/d/12Xiouvo7FGNgvyFpTjGoMDuAmKs_hghb/view?usp=sharing" // Add the link here
  },
  {
    title: "University Database Management",
    image: project6,
    description:
      "I worked on the Glearn student portal for GITAM University, a subpart of the university database. I identified entities and relationships, determined cardinalities, and defined attributes for the database. I normalized the database to 3NF. The website provides hassle-free transactions for students and administration and is maintained by the department to ensure efficient usage.",
    technologies: ["SQL", "Draw.io", "DDL/DML", "3NF"], 
    link: "https://drive.google.com/file/d/14t0dqEXAmr5PBnm3iG28ns-rrrIzh0yf/view?usp=sharing" // Add the link here
  },
];

export const CONTACT = {
  address: "75 saint alphonsus street, Boston, MA, 02120",
  phoneNo: "+1 (857) 961-7812",
  email: "hasini.muvva0123@gmail.com",
};
