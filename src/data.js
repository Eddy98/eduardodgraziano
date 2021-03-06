import membershpe from './assets/membershpe.webp';
import login from './assets/login.webp';
import register from './assets/register.webp';

import eCommerce from './assets/eCommerce.webp';
import qa from './assets/qa.webp';
import theWorks from './assets/theWorks.webp';

import img from './assets/img.webp';
import img1 from './assets/img1.webp';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import img4 from './assets/img4.webp';

const data = {
  name: 'Eduardo D. Graziano',
  introduction: "Hi! I'm a full-stack software developer based in NYC",
  education: {
    header: 'Education',
    body: [
      {
        college: 'University of Florida, College of Liberal Arts and Sciences',
        degree: 'Bachelor of Science - Computer Science',
        year: 'Class of 2020 - Gainesville, Florida',
      },
    ],
  },
  work: {
    header: 'Work Experience',
    body: [
      {
        company: 'American Express',
        title: 'Engineer II',
        link: 'https://www.americanexpress.com/',
        description: [
          'Worked on multiple features and bug fixes for the non-card lending acquisition oraganization utilizing a React, NodeJS, and Java tech stack',
          'Acted as a key developer on priority features, contributing to end to end integration with dependent teams',
          'Performed discovey work to plan the build process and identify requirements of new features like our migration to java based framework for our back-end',
          'Proficient in QA responsibilities such as automation testing, regression testing, batch testing, unit testing, and virtualization tools to become well versed in the SDET model of development and testing.',
          'Deployed applications to production environments by utilizing the CI/CD pipeline.',
          'Acted as a mentor to new hires and interns through coffee chats, onboarding tech talks, and 1:1 career development conversations',
        ],
      },
      {
        company: 'American Express',
        title: 'Engineer III',
        link: 'https://www.americanexpress.com/',
        description: [
          'Worked on multiple features and bug fixes for the non-card lending organization & the international card applications using Javascript, React, NodeJS',
          'Completed code refactors in different codebases in order to improve code quality and reduce redundant code',
          'Contributed to innovation features to improve technical aspects of our applications such as HTTP-based mocking for our application, improving end-to-end testing and automation',
          'Developed testing suites for the front-end and back-end, involving unit test and automation scripts to ensure code reliability using Jest, Webdriver.io, Selenium, Cucumber',
          'Deployed applications to production environments by utilizing the CI/CD pipeline',
          'Acted temporarily as Scrum Master while still holding my engineeting responsabilties, leading Agile ceremonies and team planning, and collaborating with Product Owner and Tech Lead',
          'Participated in Hackathons and innovation events',
        ],
      },
      {
        company: 'Optym',
        title: 'Software Engineer Intern',
        link: 'https://optym.com/',
        description: [
          'Designed, implemented, tested, and delivered a data visualization web app for Optym using Python and React',
          'Interacted with the Microsoft SQL server, created the backend API using Flask, and created the User Interface',
          'Learned how to start and complete a complex project from scratch, working alongside my mentor fully understanding the business aspect of the application and its impact for the client',
        ],
      },
      {
        company: 'American Express',
        title: 'Software Engineer Intern',
        link: 'https://www.americanexpress.com/',
        description: [
          'Worked on an internal application of American Express in the LETT team, composed of 10 other full-time employees, under the Marketing Insights & Technology',
          'Developed in the front-end of the web application using React, and interacted with the API',
          'Developed multiple tests in the Java back-end using the TestNG testing framework',
        ],
      },
      {
        company: 'Booz Allen Hamilton',
        title: 'Technical Analyst',
        link: 'https://www.boozallen.com/',
        description: [
          'Worked within a multidisciplinary team of 6 to plan, design, and develop an internal use program using business machine learning and data mining with python and multiple libraries, including Scikit-Learn, and Selenium',
          'Developed both the front and back end of the application, to ultimately help increase the efficiency of the partnering process',
        ],
      },
    ],
  },
  skills: {
    header: 'Skills',
    list: [
      'Javascript',
      'ReactJS',
      'React Native',
      'JEST',
      'Selenium',
      'Git',
      'Java',
      'C++',
      'Python',
      'Express.js',
      'NodeJS',
      'GraphQL',
      'SQL',
      'Flask',
      'Django',
      'Angular.js',
      'HTML',
      'CSS',
      'Bootstrap',
      'Semantic UI',
      'Machine Learning',
      'TestNG',
      'Agile/Scrum Development',
    ],
  },
  projects: {
    header: 'Projects',
    body: [
      {
        title: 'MemberShpe',
        description:
          'Lead a team of SHPE students to design and create a functional web application for the club. We used the application to keep track of all the members, including a point/award system, attendance and many other features.',
        pictures: [membershpe, register, login],
      },
      {
        title: 'Canvas By Karen eCommerce',
        description:
          'Created an eCommerce application for the selling of custom shoes and clothing desings for a freelance artist.',
        pictures: [eCommerce, qa, theWorks],
      },
      {
        title: 'News Mobile App',
        description:
          'Created a news mobile app for learning purposes. Used React Native, and a free API to obtain the latest news data',
        pictures: [img, img1, img2, img3, img4],
      },
    ],
  },
};

export default data;
