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
    "A software engineer 🚀 who builds systems that are practical in design, scalable in growth, and aligned with real business impact. Based in Toronto, Canada."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SWs9IWj8EqV0KhzAvFY94Zp7BSMPnL5j/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/ryanfischback",
  linkedin: "https://www.linkedin.com/in/ryanfischback/",
  gmail: "rfischbackdev@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER BUILDING AND SCALING PRODUCT SYSTEMS END TO END",
  skills: [
    emoji(
      "⚡ Take product and technical initiatives end to end, from an ambiguous problem through architecture and delivery"
    ),
    emoji(
      "⚡ Design and build scalable systems across data, messaging, APIs, integrations, and modern product applications"
    ),
    emoji(
      "⚡ Make pragmatic engineering decisions that balance reliability, scalability, complexity, maintainability, and delivery speed"
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

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Rover",
      companylogo: require("./assets/images/rover.jpeg"),
      date: "Nov 2025 - Present",
      descBullets: [
        "Own complex product initiatives end to end, from discovery and product scoping through hands-on implementation and delivery.",
        "Translate ambiguous product problems into technical requirements, architecture, and pragmatic implementation plans.",
        "Design and build integration-heavy systems spanning high-volume, time-sensitive data, messaging, and third-party platforms.",
        "Navigate tradeoffs across reliability, scalability, complexity, and delivery speed while mentoring engineers and providing technical direction."
      ]
    },
    {
      role: "Software Engineer",
      company: "VGen",
      companylogo: require("./assets/images/vglogo.png"),
      date: "Oct 2024 – Nov 2025",
      descBullets: [
        "Owned core features start to finish, from architecture through deployment, transforming complex Figma-based designs into seamless experiences for over 1M+ registered users.",
        "Led internal tooling for operations teams that streamlined moderation workflows, improving efficiency and strengthening platform trust & safety.",
        "Configured GCP infrastructure to support scalable, reliable application performance."
      ]
    },
    {
      role: "Software Engineer",
      company: "Modest Tree",
      companylogo: require("./assets/images/modesttree.png"),
      date: "May 2023 – Oct 2024",
      descBullets: [
        "Led a team in integrating an LLM-powered chatbot (Python, TypeScript, Docker), improving client data operations.",
        "Architected and containerized full-stack apps with Docker, reducing onboarding time and streamlining CI/CD pipelines.",
        "Developed interactive analytics dashboards, enabling product and admin teams to make faster, data-driven decisions."
      ]
    },
    {
      role: "Software Developer / Data Steward",
      company: "Clearwater Seafoods LP",
      companylogo: require("./assets/images/clearwater.png"),
      date: "2019 - 2022",
      descBullets: [
        "Built C# and SQL automation that replaced manual data entry, saving 10 hrs/week and improving data reliability.",
        "Created SSRS reports that gave leadership visibility into product effectiveness and guided strategic decisions.",
        "Developed an object detection system to track and reduce product waste on vessels, improving operational insight."
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
  subtitle: "SOME COOL PROJECTS I'VE CREATED (For Clients & Personal)",
  projects: [
    {
      image: require("./assets/images/vglogo.png"),
      projectName: "#VGenChallenge (VGen)",
      projectDesc:
        "Community art challenges where creators submit work and the audience votes for winners.",
      footerLink: [
        {
          name: "Explore Challenges",
          url: "https://vgen.co/challenge"
        }
      ]
    },
    {
      image: require("./assets/images/fin.png"),
      projectName: "Fin",
      projectDesc:
        "Spend less time tracking where your money went, and more time deciding where it should go next.",
      footerLink: [
        {
          name: "Get started",
          url: "https://usefinapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/factly.png"),
      projectName: "Factly",
      projectDesc:
        "An iOS app for learning one interesting fact at a time across everyday topics.",
      footerLink: [
        {
          name: "Check out on App Store",
          url: "https://apps.apple.com/us/app/factly/id6758357204"
        }
      ]
    },
    {
      image: require("./assets/images/coverly.png"),
      projectName: "Coverly",
      projectDesc:
        "A simple web app that turns prompts into polished, personalized cover letters.",
      footerLink: [
        {
          name: "View project",
          url: "https://coverly.ca/"
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
  email_address: "rfischbackdev@gmail.com",
  // Shown on the GitHub profile card when your GitHub bio is empty
  bioFallback:
    "engineer. builder. occasionally offline."
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
  workExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
