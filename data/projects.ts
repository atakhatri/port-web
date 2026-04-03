const PROJECT_DATA = [
    {
        title: "MRK TechSolutions",
        description:
            "Website for a passionate team of innovators, problem-solvers, and technology enthusiasts dedicated to empowering businesses through digital transformation. Built with the latest technologies to solve a real-world problem.",
        image: "/projects/p1/p1.png",
        tags: ["Next.js", "React", "Tailwind CSS"],
        liveUrl: "https://mubin-s-project.vercel.app/",
        githubUrl: "https://github.com/atakhatri/mubin-s-project.git",
        media: [
            { type: "video", src: "/projects/p1/p1.mp4" },
            { type: "image", src: "/projects/p1/p12.png" },
        ] as const,
        type: "Website",
    },
    {
        title: "UNO Game",
        description:
            "Made for Entertainment purposes, a nice way to pass your boredome. Created with Original UNO game logic, where you can play it with your friends as well. it is made with latest tech and framework of next.js, and firebase.",
        image: "/projects/p2/p2.png",
        tags: ["Next.js", "React", "Firebase", "Tailwind CSS"],
        liveUrl: "https://uno-ebon.vercel.app/",
        githubUrl: "https://github.com/atakhatri/UNO.git",
        media: [
            { type: "video", src: "/projects/p2/p2.mp4" },
            { type: "image", src: "/projects/p2/p22.png" },
        ] as const,
        type: "Website",
    },

    {
        title: "Climate",
        description:
            "A weather app built using React Native and Expo that provides real-time weather information for any location. It features a clean and intuitive UI designed with Tailwind CSS, and fetches data from a reliable weather API to display current conditions, forecasts, and more.",
        image: "/projects/p3/p3.png",
        tags: ["React Native", "Expo", "Tailwind CSS", "Weather API"],
        liveUrl: "/install/climate",
        githubUrl: "https://github.com/atakhatri/climate.git",
        media: [
            { type: "image", src: "/projects/p3/outer.jpeg" },
            { type: "image", src: "/projects/p3/inner.jpeg" },
            { type: "image", src: "/projects/p3/map.jpeg" },
        ] as const,
        type: "Mobile App",
    },
    {
        title: "Virat Kohli Fan Page",
        description:
            "A fan page dedicated to Virat Kohli, showcasing his achievements, statistics, and memorable moments in cricket. Built with Next.js and styled with Tailwind CSS, the page features a responsive design and interactive elements to engage fans.",
        image: "/projects/p4/p4.png",
        tags: ["Next.js", "React", "Tailwind CSS"],
        liveUrl: "https://vk18-sigma.vercel.app/",
        githubUrl: "https://github.com/atakhatri/vk18-sigma.git",
        media: [
            { type: "video", src: "/projects/p4/p4.mp4" },
            { type: "image", src: "/projects/p4/p42.png" },
        ] as const,
        type: "Website",
    },
    {
        title: "Scribbles",
        description:
            "A simple drawing app built with React and TypeScript, allowing users to create and save their digital scribbles. It features a canvas for freehand drawing, color selection, and the ability to export drawings as images.",
        image: "/projects/p5/scribbles.png",
        tags: ["React", "TypeScript"],
        liveUrl: "/install/scribbles",
        githubUrl: "https://github.com/atakhatri/Scribbles.git",
        media: [
            { type: "image", src: "/projects/p5/outer.jpeg" },
            { type: "image", src: "/projects/p5/game.jpeg" },
            { type: "image", src: "/projects/p5/profile.jpeg" },
            { type: "image", src: "/projects/p5/inner.jpeg" },
            { type: "image", src: "/projects/p5/friends.jpeg" },
            { type: "image", src: "/projects/p5/win.jpeg" },
        ] as const,
        type: "Mobile App",
    },
];


export default PROJECT_DATA;