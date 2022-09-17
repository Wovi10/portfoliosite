import {Future_text, Leap_text, Ludo_text, MLX_text, PersonalSite_text, Prega_text} from "./ProjectTexts";

export const projectsList = [
    {
        name: "Ludo",
        link: "https://github.com/Wovi10/MensErgerJeNiet",
        date: "January-May 2019",
        technology: "C# Windows forms",
        description: Ludo_text(),
    },
    {
        name: "LEAP",
        link: "#",
        date: "March-May 2021",
        technology: "Angular TS + Java Springboot",
        description: Leap_text(),
    },
    {
        name: "PREGA",
        link: "https://github.com/Wovi10/Racing",
        date: "October-December 2021",
        technology: "C# + EF Core + SQL",
        description: Prega_text(),
    },
    {
        name: "TestdataAdapter",
        link: "#",
        date: "February-May 2022",
        technology: "TS + PostgreSQL + Python",
        description: MLX_text(),
    },
    {
        name: "This site",
        link: "https://github.com/Wovi10/portfoliosite",
        date: "September-? 2022",
        technology: "React + TS + TailwindCSS",
        description: PersonalSite_text(),
    },
    {
        name: "What's next?",
        link: "https://github.com/Wovi10/",
        date: "Future",
        technology: "?",
        description: Future_text(),
    },
];