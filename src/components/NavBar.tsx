let activeElementId = "Home";

function HomeButton() {
    return (
        <a id="Home" className="navbutton navactive" href="#" onClick={() => {addClass('Home')}}>
            Home
        </a>
    );
}

function addClass(elementId: any) {
    const element = document.getElementById(elementId);
    const activeElement = document.getElementById(activeElementId);

    activeElement?.classList.remove('navactive');
    element?.classList.add('navactive');

    activeElementId = elementId;
    return undefined;
}

function TimelineButton() {
    return (
        <a id="Timeline" className="navbutton" href="#experience" onClick={() => {addClass('Timeline')}}>
            Timeline
        </a>
    );
}

function SkillButton() {
    return (
        <a id="Skills" className="navbutton" href="#skills" onClick={() => {addClass('Skills')}}>
            Skills
        </a>
    );
}

function ProjectsButton() {
    return (
        <a id="Projects" className="navbutton" href="#projects" onClick={() => {addClass('Projects')}}>
            Projects
        </a>
    );
}

function SocialsButton() {
    return (
        <a id="Socials" className="navbutton" href="#socials" onClick={() => {addClass('Socials')}}>
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