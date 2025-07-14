const projects = [
  {
      title: "Aegis - Inventory Management App",
    type: "Personal Project - Work in progress",
    company: "Personal Project",
    url: " https://aegis-inventory-react.vercel.app/",
    github: [{
      url: "https://github.com/SSantiago90/aegis-inventory-react",
      label: "Front End"
    }, 
      {
        url: "https://github.com/SSantiago90/aegis-inventory",
        label: "Back End"
      }],
    img: "/img/work/aegis-app.gif",
    description: [
      "Minimalistic React App for inventory management",      
      "User session handling using JWT",      
      "Backend RESTful API built with NestJS, Typescript, and SQL database",
      "Full testing suite with JEST and Supertest"
    ],
    tags: [      
      { type: "WIP", color: "#ffb347" },
      { type: "React", color: "#4f92ff" }, 
      { type: "Typescript", color: "#2E5083" },
      { type: "Jest", color: "#8D7317" },
      { type: "Node", color: "#02a47a" },
      { type: "Nest", color: "#aB4252" },
      { type: "Typescript", color: "#2E5083" },
      { type: "JWT", color: "#dc2088" },
      { type: "SQL", color: "#2b7aca" },
    ],   
  },
  {
    title: "DailyDo - Tasks manager App",
    type: "Personal Project - Work in progress",
    company: "Personal Project",
    url: "https://dailydo-react.vercel.app",    
    github: [{
      url: "https://github.com/SSantiago90/dailydo-react",
      label: "Front End"
    }],
    img: "/img/work/daily-react.gif",
    description: [
      "Backend could be sleeping if app wasn't active for a while - retry login after a couple of minutes",
      "A classic Todo app built with React and Typescript",
      "Responsive design, theme selection, and animations thanks to Tailwind",
      "Session handling using JWT",
      "Some features are being worked on and some others comming soon"
    ],
    tags: [      
      { type: "WIP", color: "#ffb347" },
      { type: "React", color: "#4f92ff" }, 
      { type: "Typescript", color: "#2E5083" },
      { type: "Tailwind", color: "#0D7377" },
    ],
  },
  {
    title: "DailyDo - NEST API",
    type: "NestJS API",
    company: "Personal Project",
    url: "https://dailydo-nest.onrender.com/api",    
    github: [{
      url: "https://github.com/SSantiago90/dailydo-nest",
      label: "Back End"
    }],
    img: "/img/work/aegis-app.webp",
    description: [
      "A RESTful API built with NestJS, Typescript, and MongoDB",
      "It features basic CRUD operations for managing the frontend app requests for tasks",
      "Includes user management: account register and login, JWT authentication, password encryption, and roles management."
    ],
    tags: [
      { type: "Node", color: "#02a47a" },
      { type: "Nest", color: "#aB4252" },
      { type: "Typescript", color: "#2E5083" },
      { type: "JWT", color: "#dc2088" },
      { type: "Express", color: "#7ba00a" },
      { type: "MongoDB", color: "#3b730a" },
    ],
  },
  {
    title: "Sample React Ecommerce",
    type: "Bootcamp Project - Coderhouse",
    company: "Coderhouse",
    url: "https://coderstore.netlify.app/",    
    github: [{
      url: "https://github.com/SSantiago90/CoderStore-React",
      label: "Front End"
    }],
    img: "/img/work/coder-react.gif",
    description: [
      "A sample ecommerce website built with React.",
      "It features cart mangagement with Redux and Firebase/Firestore as a cloud database."
    ],
    tags: [
      { type: "React", color: "#4f92ff" },
      { type: "Redux", color: "#784296" },
      { type: "Firebase", color: "#cb7912" },
      { type: "React Router", color: "#3B4252" },
      { type: "Tailwind", color: "#0D7377" },
    ],
  },
  
  {
    title: "Portfolio",
    type: "This Website!",
    company: "Me",
    url: "/",    
    github: [{
      url: "https://github.com/SSantiago90",
      label: "Front End"
    }],
    img: "/img/work/portfolio.gif",
    description: [
      "Personal website. Hope you enjoy it in here!",
    ],
    tags: [
      { type: "NextJS", color: "#555555" },
      { type: "React", color: "#4f92ff" },
      { type: "Typescript", color: "#2E5083" },
      { type: "Tailwind", color: "#0D7377" },
    ],
  },
]

export default projects;
