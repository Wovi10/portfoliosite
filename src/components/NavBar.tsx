function HomeButton() {
    return (
        <a className="navbutton navactive" href="#">
            Home
        </a>
    );
}

function TimelineButton() {
    return (
        <a className="navbutton" href="#experience">
            Timeline
        </a>
    );
}

function SkillButton() {
    return (
        <a className="navbutton" href="#skills">
            Skills
        </a>
    );
}

function ProjectsButton() {
    return (
        <a className="navbutton" href="#projects">
            Projects
        </a>
    );
}

function SocialsButton() {
    return (
        <a className="navbutton" href="#socials">
            Socials
        </a>
    );
}

export default function NavBar() {
    return (
        <header>
            <nav className="w-screen flex overflow-hidden px-4 md:px-20 lg:px-36
            h-20 bg-black inset-0 mb-1 fixed z-40 align-middle">
                <HomeButton/>
                <TimelineButton/>
                <SkillButton/>
                <ProjectsButton/>
                <SocialsButton/>
            </nav>
        </header>
    );
}