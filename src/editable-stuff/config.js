// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kingshuk",
  middleName: "",
  lastName: "Sadhu",
  message: " Welcome to my website.| ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Kingshuk99",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/kingshuk.sadhu.7/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kingshuk_album/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/visit-kingshuksadhu/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/K_Sadhu_tweets",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kingshuk_sadhu_photo.jpg"),
  imageSize: 375,
  message:
    "Hi! My name is Kingshuk Sadhu. I currently work as a Software Engineer at Enphase Energy. I have completed my graduation from Jadavpur University, Kolkata in 2020 and postgraduation from Indian Institute of Technology, Kharagpur in 2022. Feel free to reach out to know more about me.",
  resume: require("../editable-stuff/Kingshuk_Sadhu_Resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Kingshuk99", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Model-verifiability-in-federated-learning", "question-answer-forum-doConnect", "pizza-store", "simple-chat-app"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/kingshuk_sadhu_photo.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/kingshuk_sadhu_photo.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show:true,
  heading: "Skills",
  programming: [
      "Java",
      "C++",
      "Python"
  ],
  frameworks: [
      "Spring Boot",
      "REST"
  ],
  tools: [
      "Maven",
      "Gradle",
      "Git",
      "Datadog",
      "Jmeter"
  ],
  miscellaneous: [
      "Microservices",
      "Cloud Engineering",
      "OOP",
      "Data Structure",
      "Algorithm"
  ],
  technologies: [
      "AWS",
      "MongoDB",
      "Redis"
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering role. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "kingshuksadhu1999@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/enphase.png'),
      date: 'July 2022 – Present',
    }
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
