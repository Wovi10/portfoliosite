import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import CircleIcon from '@mui/icons-material/Circle';

export const projectsList = [
    {
        name: "Ludo",
        link: "https://github.com/Wovi10/MensErgerJeNiet",
        date: "January-May 2019",
        technology: "C# Windows forms",
        description: Ludo_text(),
        icon: <CircleIcon/>
    },
    {
        name: "LEAP",
        link: "#",
        date: "March-May 2021",
        technology: "Angular TS + Java Springboot",
        description: Leap_text(),
        icon: <CircleIcon/>
    },
    {
        name: "PREGA",
        link: "https://github.com/Wovi10/Racing",
        date: "October-December 2021",
        technology: "C# + EF Core + SQL",
        description: Prega_text(),
        icon: <CircleIcon/>
    },
    {
        name: "TestdataAdapter",
        link: "",
        date: "February-May 2022",
        technology: "TS + PostgreSQL + Python",
        description: MLX_text(),
        icon: <CircleIcon/>
    },
    {
        name: "This site",
        link: "https://github.com/Wovi10/portfoliosite",
        date: "September-? 2022",
        technology: "React + TS + TailwindCSS",
        description: PersonalSite_text(),
        icon: <CircleIcon/>
    },
    {
        name: "What's next?",
        link: "https://github.com/Wovi10/",
        date: "Future",
        technology: "?",
        description: Future_text(),
        icon: <QuestionMarkRoundedIcon/>
    },
];

function Ludo_text() {
    return (
        <div className="paragraph">
            This was my 'big' final project for 12th grade. We had to make a board game in C# windows forms.
            <br/>
            I opted for the game of Ludo. It could have been a lot better, but this was my first big thing ever,
            so it is nice for me to see where started.
        </div>
    );
}

function Leap_text() {
    return (
        <div className="paragraph">
            In our first year of college we got the chance to make a project for a company.
            <br/>
            We had to create a business architecture making tool.
            It had to be able to map out the business architecture in a printable and easily readable way.
            <br/>
            Also you had to be able to edit the map if needed. Some further details were of course also required
            like a login system.
            <br/>
            We managed all of this pretty well and learned a lot in the process.
        </div>
    );
}

function Prega_text() {
    return (
        <div className="paragraph">
            PREGA was a wonderful idea of our teacher in the last year of my bachelor's to make a website to track
            all kinds of racing things.
            <br/>
            These 'racing things' included competitions, matches, racers, teams...
            We had to be able to do all the basic CRUD things on it.
            <br/>
            This of course wouldn't have been much of a challenge without the need for a very elaborate relational
            database.
            So we had to design this database frm scratch. Everything was connected to something and some difficult
            choices had to be made.
            <br/>
            Overall this was kind of nice for the most part, but I prefer things like we did with PREGA or like I
            did at Melexis.
            The project on my Github is only a copy of the project and doesn't work since no servers are set up.
        </div>
    );
}

function MLX_text() {
    return (
        <div className="flex-wrap">
            This was my internship project for my bachelor's.
            <br/>
            During this week period, I had to construct an adapter for test data.
            In Melexis, there are chips being made. Since these chips are to be used in all kinds of machine, they
            of course have to work properly.
            <br/>
            Therefore tests have to be done. These tests give a lot of data (and I really mean a lot). Up until the
            point I worked there, the process of getting the data and sending it to the right place, was manual!
            So I, together with an internal team member, made an adapter.
            <br/>
            Sadly due to licenses and NDAs I am not able to share the code with you.
        </div>
    );
}

function PersonalSite_text() {
    return (
        <div className="paragraph">
            Of course this page can't not be named here.
            <br/>
            I put a lot of effort into this site and learned so much about React.
            For the design itself (Pure CSS) I got some help from a friend of mine 'Senne Bels'. But the rest was me
            searching
            online how to do stuff.
            <br/>
            I think I did a decent job and this hopefully shows that I can learn pretty well and that I have
            interest in what I do.
            <br/>
            Of course the source code is available on my GitHub.
        </div>
    );
}

function Future_text() {
    return (
        <div className="paragraph">
            Who knows what I can put on here in the future?
            <br/>
            Some Java, some TS, or something completely different.
            <br/>
            If you have an idea, please let me know! Click one of the links at <a href="#socials">my socials</a>!
        </div>
    );
}