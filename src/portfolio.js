/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pooja Amin",
  title: "Hi! I'm Pooja",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Angular / JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1CK_8FEJ6ZO0gmcatRfTT4o2iK5ZN6ihP/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/poojanamin",
  linkedin: "https://www.linkedin.com/in/pooja-amin-2819b71bb/",
  gmail: "poojanamin0408@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/GALogo.png"),
      subHeader:
        "Master of Science in Computer Science with a Specialization in Machine Learning",
      duration: "January 2024 - May 2025"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "University of California San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Bachelor of Science in Mathematics and Economics",
      duration: "September 2019 - March 2022"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/infosysLogo.jpg"),
      date: "August 2024 – January 2025",
      descBullets: [
        "Designed and developed a dynamic web application using Angular 16 for clients, delivering scalable solutions that enhanced user experience and met critical business objectives",
        "Optimized front-end performance through lazy loading, code splitting, and asset minimization strategies, achieving 50% improvement in load times and significantly elevating user satisfaction scores",
        "Implemented comprehensive unit testing using Jasmine and Karma with 85%+ code coverage, ensuring application reliability and reducing post-deployment defects by establishing robust quality assurance standards",
        "Integrated RESTful APIs and third-party libraries to enable seamless front-end and back-end communication, supporting complex business workflows and data synchronization requirements",
        "Mentored 4 junior developers on Angular best practices, code review processes, and modern development workflows, accelerating their technical growth and contributing to improved team output",
        "Supported CI/CD pipeline deployment processes, automating build and deployment workflows that increased release frequency and reduced deployment time by 40%"
      ]
    },
    {
      role: "Software Developer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tataLogo.png"),
      date: "July 2022 – July 2024",
      descBullets: [
        "Developed a high-performance web application serving 3M+ monthly visitors across AutoNation platforms using Angular 13, delivering responsive interfaces that drove improved user engagement and conversion rates",
        "Built personalized recommendation engine for AutoNation’s automated vehicle marketplace, driving measurable increases in conversion rates and average order value through targeted campaign features",
        "Optimized application performance by implementing lazy loading and code-splitting strategies, reducing initial load times by 50% and improving user retention across high-traffic e-commerce flows",
        "Leveraged RXJS operators and NGRX for state management in large-scale applications, ensuring smooth data flow and real-time responsiveness for complex transactional workflows",
        "Accelerated sprint velocity by consistently exceeding story point commitments and taking on additional high-priority features, enabling the 15-person team to deliver projects ahead of schedule",
        "Designed and maintained reusable component libraries that reduced development time by 30%, establishing scalable architecture patterns adopted across multiple client projects",
        "Collaborated within an Agile (Scrum) environment, participating in sprint planning, daily stand-ups, and retrospectives to ensure alignment with client expectations and seamless project delivery"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/austin.jpg"),
      projectName: "Where to Live",
      projectDesc: "I designed and built an algorithm to rank the best places to live in America by analyzing a dataset of over 10,000 cities using economic, social, and environmental factors. To make the results easy to interpret, I developed a fully interactive Tableau dashboard that combined insights generated with R, Python, SQL, and JavaScript. I also created a dynamic D3.js visualization that allowed users to explore city rankings in real time, turning complex data into clear, intuitive insights. Throughout the project, I focused on precision and user experience, ensuring the tool could guide users toward smart, data-backed decisions about where to live.",
      footerLink: [
        {
          name: "View Project",
          url: "https://public.tableau.com/app/profile/pooja.amin7793/viz/WheretoLiveProject/Tellusaboutyourself"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/femfitLogo.png"),
      projectName: "FemFit",
      projectDesc: "I conceptualized and launched a fitness and wellness app designed to deliver truly personalized health coaching for women. I led the full development process—from designing an intuitive user experience to building secure authentication, managing databases, and ensuring front-end scalability using FlutterFlow, Firebase, and Python. I also integrated multiple APIs to provide real-time fitness, nutrition, and menstrual tracking, while connecting users to an AI-driven virtual wellness coach that delivers customized advice. Beyond tracking health metrics, I focused on creating a platform that proactively educates and supports women through every stage of their wellness journey.",
      footerLink: [
        {
          name: "View Project",
          url: "https://apps.apple.com/us/app/femfit-womens-health/id6741535859"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(609)598-3842",
  email_address: "poojanamin0408@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

