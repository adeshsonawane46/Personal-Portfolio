// Portfolio Data - Static/Local Data (No Database)

export const personalInfo = {
  name: "Adesh Sonawane",
  roles: [
        "Full Stack Developer",
        "UI/UX Designer",
        "Software Engineer"
      ],
  greeting: "Hello, I'm",
  description: "Crafting scalable web applications and intuitive user experiences with modern technologies.",
  email: "adesh.sonawane789@gmail.com",
  phone: "+91 8600553690",
  location: "Nashik, Maharashtra",
  image: "/hero-profile.png",
  aboutImage: "/about-image.png",
  resumeLink: "/1.Adesh Sonawane CV.pdf",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/adeshsonawane46", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/adeshsonawane46/", icon: "Linkedin" },
];

export const stats = [
  { value: 25, suffix: "+", label: "Technologies" },
  { value: 350, suffix: "+", label: "DSA Problems Solved" },
  { value: 8, suffix: "+", label: "Projects Built" },
  { value: 50, suffix: "+", label: "Certifications" },
];

export const experiences = [
  {
    id: 1,
    role: "Java Developer Intern",
    company: "Infosys Springboard",
    period: "Feb 2026 - Present",
    description: "Working on a virtual internship in Java Tech Stack, focusing on object-oriented programming, data structures, and backend development. Gaining hands-on experience through practical projects and strengthening problem-solving skills.",
    skills: ["Java", "OOP", "Data Structures & Algorithms", "SQL"],
    current: true,
  },
  {
    id: 2,
    role: "Ai+ Insider",
    company: "Ai+ Smartphone",
    period: "Oct 2025 - Present",
    description: "Selected as an Ai+ Insider to test and evaluate Ai+ smartphone features and NxtQuantum OS. Identified bugs, analyzed system performance, and provided technical feedback to improve user experience.",
    skills: ["Feature Testing", "Bug Identification", "Performance Analysis", "Technical Feedback", "User Experience Evaluation"],
    current: true,
  },
  {
    id: 3,
    role: "AI Intern",
    company: "Edunet Foundation (Microsoft & AICTE)",
    period: "Apr 2025 - May 2025",
    description: "Completed a 4-week internship on Foundations of AI, covering core concepts of artificial intelligence, machine learning basics, and real-world applications. Gained hands-on exposure to AI tools and problem-solving approaches.",
    skills: ["Artificial Intelligence", "Machine Learning Basics", "Python", "HTML", "CSS", "JavaScript"],
    current: false,
  },
];

export const skills = [
  {
    id: 1,
    category: "Programming Languages",
    icon: "Monitor",
    progress: 85,
    skills: ["Java", "C", "C++", "Python", "JavaScript", "PHP"],
  },
  {
    id: 2,
    category: "Full Stack Development",
    icon: "Server",
    progress: 88,
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
  },
  {
    id: 3,
    category: "Database & Cloud",
    icon: "Database",
    progress: 80,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    id: 4,
    category: "Tools & Platforms",
    icon: "Wrench",
    progress: 82,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Render", "Figma", "Canva"],
  },
];

export const projects = [
    {
    id: 1,
    title: "Online Tailoring & Home Service Platform",
    description:
      "Developed a full-stack tailoring platform with home service and appointment booking system. Implemented real-time email notifications, Google Map integration, and custom order handling. Successfully deployed and validated with 30+ real user bookings.",
    image: "/project-1.png", 
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://www.vstailors.in/", 
    githubUrl: "https://github.com/adeshsonawane46/VS-Tailors-MERN-Stack.git",
    featured: true,
  },
  {
    id: 2,
    title: "Virtual Zoo",
    description:
      "Built an interactive virtual zoo platform featuring 360° animal exploration and quiz-based learning modules. Implemented secure user authentication and performance analytics, enhancing user engagement and overall learning experience.",
    image: "/project-2.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: null,
    githubUrl: "https://github.com/adeshsonawane46/virtual-zoo.git",
    featured: false,
  },
];

export const certificates = [
  {
    id: 1,
    title: "AI Intern - Foundations of AI",
    issuer: "Edunet Foundation (Microsoft & AICTE)",
    date: "May 2025",
    verifyUrl: "https://drive.google.com/file/d/1FGTqDgqioWhAJ0_mBfDMqXlKRIgDkNMB/view?usp=sharing",
  },
  {
    id: 2,
    title: "Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Dec 2025",
    verifyUrl: "https://drive.google.com/file/d/1xA-7B8i7zI-5GBo0AYJ9njbVyVw7WLPY/view?usp=sharing",
  },
  {
    id: 3,
    title: "Full Stack Development with MERN",
    issuer: "thingQbator (NASSCOM–Cisco CSR Program)",
    date: "Oct 2025",
    verifyUrl: "https://drive.google.com/file/d/1HaK1qyrSsEsOkmYWeAV_NbPatcDDpP9C/view?usp=sharing",
  },
  {
    id: 4,
    title: "NASA International Space Apps Challenge",
    issuer: "NASA",
    date: "Oct 2025",
    verifyUrl: "https://drive.google.com/file/d/1Y43vZhEnsYvmlMjBMOytpbGu8m4l_WZb/view?usp=sharing",
  },
  {
    id: 5,
    title: "Data Structures and Algorithms",
    issuer: "Cipher Schools",
    date: "Oct 2025",
    verifyUrl: "https://drive.google.com/file/d/1Jf4qx7tY5EK7Vxjx0G47RJZ08p64PKp9/view?usp=sharing",
  },
  {
    id: 6,
    title: "24-Hours Web Hackathon",
    issuer: "Binary Blitz",
    date: "Mar 2024",
    verifyUrl: "https://drive.google.com/file/d/1faJFh9dpzzsFuzE1BLH2KEBu-Fqu_Oo6/view?usp=sharing",
  },
  {
    id: 7,
    title: "Java Programming",
    issuer: "Lovely Professional University - IamNeo",
    date: "May 2024",
    verifyUrl: "https://drive.google.com/file/d/1qK4khSeump7Xh0ah2aYvQzonEB6ZKa_V/view?usp=sharing",
  },
  {
    id: 8,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    verifyUrl: "https://drive.google.com/file/d/1SyvwTedr5LcHwFQ7zhxHbUFGI5Xfzimo/view?usp=sharing",
  },
];

export const achievements = [
  {
    id: 1,
    icon: "Trophy",
    title: "One India One World Cultural Event (Lovely Professional University)",
    description: "Represented Maharashtra and secured 3rd Runner-up among multiple state teams in a cultural event.",
  },
  {
    id: 2,
    icon: "Monitor",
    title: "Solved 350+ Coding and DSA Problems",
    description: "Strengthened problem-solving and algorithmic thinking on LeetCode, GeeksforGeeks and NeoColab",
  },
  {
    id: 3,
    icon: "Heart",
    title: "Creator of Educational YouTube Channel — Quizella",
    description: "Built an educational channel with 5.8K+ subscribers",
  },
];

export const educationData = [
  {
    id: 1,
    title: "Undergraduate Degree (B.Tech, CSE)",
    institute: "Lovely Professional University",
    year: "2023 - 2027",
    percentage: "CGPA: 6.97",
    description:
      "Focused on Computer Science, Full Stack Development, and Software Engineering, building scalable applications with hands-on projects.",
  },
  {
    id: 2,
    title: "Higher Secondary (12th)",
    institute: "KTHM College",
    year: "2022 - 2023",
    percentage: "Percentage: 64.17%",
    description:
      "Completed with Science stream, building strong foundation in mathematics and physics.",
  },
  {
    id: 3,
    title: "Matriculation (10th)",
    institute: "Rachana Vidyalaya",
    year: "2020 - 2021",
    percentage: "Percentage: 85.80%",
    description:
      "Built fundamental academic knowledge and discipline during early education.",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
