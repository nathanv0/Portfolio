const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "HTML",
        imgPath: "/images/logos/html.svg",
    },
    {
        name: "CSS",
        imgPath: "/images/logos/css.svg",
    },
    {
        name: "JavaScript",
        imgPath: "/images/logos/javascript.svg",
    },
    {
        name: "VSCode",
        imgPath: "/images/logos/vscode.svg",
    },
    {
        name: "Github",
        imgPath: "/images/logos/github.svg",
    },
];

const techStackIcons = [
    {
        name: "React",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Java",
        modelPath: "/models/java.glb",
        scale: 1.5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Three JS",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Git",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/stem.png",
        logoPath: "/images/stem.png",
        title: "Software Engineer Technical Coach (Volunteer)",
        date: "November 2024 - May 2025",
        responsibilities: [
            "Mentored FLL robotics teams (elementary/middle school), teaching robot design, coding, and teamwork using LEGO® EV3 and SPIKE™ Prime kits.",
            "Guided students in developing match strategies, optimizing robot performance, and improving coding efficiency — helping the team achieve a Top 5 placement in regional competitions.",
        ],
    },
    {
        review:
            "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
        imgPath: "/images/biomerics2.jpg",
        logoPath: "/images/biomerics2.jpg",
        title: "Production Operator Specialist",
        date: "February 2024 - August 2024",
        responsibilities: [
            "Operated and maintained production machinery, ensuring efficiency and adherence to safety standards.",
            "Conducted numerous tests on products and components, meticulously recording data on paper for quality tracking and reporting.",
            "Worked on 6 different production lines within the first 3 months, demonstrating adaptability and versatility.",
        ],
    },
    {
        review:
            "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
        imgPath: "/images/kyoto3.jpg",
        logoPath: "/images/kyoto2.png",
        title: "Sushi Server",
        date: "October 2022 - February 2024",
        responsibilities: [
            "Provided excellent customer service through effective problem-solving to ensure guest satisfaction.",
            "Educated customers on the menu by actively listening to their preferences and suggesting items tailored to their tastes while providing excellent communication.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/nathan-v0/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};