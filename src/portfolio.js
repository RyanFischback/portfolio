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
  username: "Ryan Fischback",
  title: "Hi there, I'm Ryan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with extensive experience building Web and Mobile applications with TypeScript / ReactJS / Python / NodeJS / .NET / C# and some other cool libraries and frameworks!"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1GXTi_5XO-QIUHuOUQIyBSOLa8HfsL6oJ9xW3P5ysDuI/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/ryanfischback",
  linkedin: "https://www.linkedin.com/in/ryanfischback/",
  gmail: "rfischback2@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "RESULTS-ORIENTED FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front End / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Build simple, scalable, and effective backend techonlogies to cut costs, implement new features, and maintain and optimize systems"
    ),
    emoji(
      "⚡ Integration of third party services such as AWS / Jenkins / Terraform"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dalhousie University",
      logo: require("./assets/images/dalLogo.jpg"),
      subHeader: "Bachelor of Applied Computer Science",
      duration: "Janurary 2021 - April 2023",
      desc: "Took courses about Software Engineering, Project Management, Mobile Development, Technology Innovation, ...",
      descBullets: [
        "3x Sexton Scholar Award (Top Academic Standing)",
        "Overall GPA of 3.91"
      ]
    },
    {
      schoolName: "Nova Scotia Community College",
      logo: require("./assets/images/nsccLogo.jpg"),
      subHeader: "College Diploma in IT Programming",
      duration: "September 2018 - April 2020",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, Software Development Life Cycle, ...",
      descBullets: ["Overall Grade of 88 / 100"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Dev-Ops",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "VGen",
      companylogo: require("./assets/images/vglogo.png"),
      date: "Oct 2024 – Present",
      descBullets: [
        "Built and shipped software solutions serving 320,000+ registered users, ensuring seamless, scalable experiences.",
        "Optimized cloud infrastructure and deployment pipelines to support 50,000+ concurrent users with zero downtime during updates.",
        "Delivered performance enhancements and live updates that improved reliability and boosted user engagement."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Modest Tree Media Inc",
      companylogo: require("./assets/images/modesttree.png"),
      date: "May 2023 – June 2024",
      descBullets: [
        "Led a team to integrate an LLM-powered chatbot (Python, TypeScript, Docker), improving client data workflows and accelerating operations.",
        "Architected and containerized full-stack apps with Docker, streamlining CI/CD and reducing onboarding time for developers.",
        "Developed analytics dashboards for product and admin teams, enabling data-driven decision-making.",
        "Maintained and optimized React, TypeScript, and .NET applications, enhancing software stability and user experience."
      ]
    },
    {
      role: "Software Developer / Data Steward (Multiple Roles)",
      company: "Clearwater Seafoods LP",
      companylogo: require("./assets/images/clearwater.png"),
      date: "May 2019 – Aug 2022",
      descBullets: [
        "Designed and implemented automated C# and SQL data-entry solutions, eliminating 100% of manual input and saving 2+ hrs/day.",
        "Built SSRS data reporting systems that informed executive decision-making and improved client visibility.",
        "Developed a computer vision proof-of-concept (Python, OpenCV, TensorFlow) that reduced product waste with real-time alerts.",
        "Maintained and enhanced ASP.NET applications, improving functionality and user satisfaction across multiple departments."
      ]
    },
    {
      role: "Software Developer (Internship)",
      company: "Garvin-Allen Solutions Ltd",
      companylogo: require("./assets/images/gaLogo.jpg"),
      date: "May 2021 – Aug 2021",
      descBullets: [
        "Engineered automated test suites with Ranorex, reducing manual QA time and increasing release confidence.",
        "Improved data quality processes, raising software reliability across core product lines."
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
  title: "More Projects",
  subtitle:
    "SOME COOL PROJECTS I'VE WORKED ON (For Clients & Personal Projects)",
  projects: [
    {
      image: require("./assets/images/coverly.png"),
      projectName: "Coverly (Personal Project)",
      projectDesc:
        "Coverly is a user-friendly web application designed to streamline the process of generating professional cover letters through user-provided prompts. This project aims to offer a seamless and efficient experience, enabling users to create personalized and impactful cover letters with minimal effort. ",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://coverly.ca/"
        }
      ]
    },
    {
      image: require("./assets/images/dalLogo.png"),
      projectName: "The Green Card (Client: Dalhousie University)",
      projectDesc:
        "The Green Card is a MVP web application implemented for the purpose of converting an informational brochure to be used by Nova Scotia health professionals.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://w2023-gpgc.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/clearwater.png"),
      projectName: "Object Tracker (Client: Clearwater Seafoods LP)",
      projectDesc:
        "Computer vision project that tracks specific objects using the Euclidean distance algorithm. The project focuses on accurately identifying and monitoring objects in real-time.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/RyanFischback/ObjectTracking"
        }
        //  you can add extra buttons here.
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Cloud Architecture: Design Decisions",
      subtitle: "LinkedIn Learning course covering Cloud-Native Architecture",
      image: require("./assets/images/caCert.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/55c1979351e25bc805340af113627013e32a176a7824588823e53a7bf4acdd70"
        }
        // {
        //   name: "Award Letter",
        //   url: ""
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: ""
        // }
      ]
    }
    // {
    //   title: "",
    //   subtitle:
    //     "",
    //   image: ,
    //   imageAlt: "",
    //   footerLink: [
    //     {
    //       name: "",
    //       url: ""
    //     }
    //   ]
    // },

    // {
    //   title: "",
    //   subtitle: "",
    //   image: ,
    //   imageAlt: "",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: ""
    //     }
    //   ]
    // }
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
      url: "",
      title: "",
      description: ""
    },
    {
      url: "",
      title: "",
      description: ""
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
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "rfischback2@gmail.com"
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
