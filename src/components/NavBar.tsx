let activeElementId = "Home";

function addClass(elementId: any) {
    const element = document.getElementById(elementId);
    const activeElement = document.getElementById(activeElementId);

    activeElement?.classList.remove('navactive');
    element?.classList.add('navactive');

    activeElementId = elementId;
    return undefined;
}

function HomeButton() {
    return (
        <a id="Home" className="navbutton navactive" href="#" onClick={() => {
            addClass('Home')
        }}>
            Home
        </a>
    );
}

function TimelineButton() {
    return (
        <a id="Timeline" className="navbutton" href="#experience" onClick={() => {
            addClass('Timeline')
        }}>
            Timeline
        </a>
    );
}

function SkillButton() {
    return (
        <a id="Skills" className="navbutton" href="#skills" onClick={() => {
            addClass('Skills')
        }}>
            Skills
        </a>
    );
}

function ProjectsButton() {
    return (
        <a id="Projects" className="navbutton" href="#projects" onClick={() => {
            addClass('Projects')
        }}>
            Projects
        </a>
    );
}

function SocialsButton() {
    return (
        <a id="Socials" className="navbutton" href="#socials" onClick={() => {
            addClass('Socials')
        }}>
            Socials
        </a>
    );
}

export default function NavBar() {
    function myFunction() {
        let x = document.getElementById("mobileNavLinks");
        if (x?.style.display === "block") {
            x.style.display = "none";
        } else {
            x!.style.display = "block";
        }
        return undefined;
    }

    return (
        <header>
            <nav className="navdesktop md:px-20 lg:px-36 hidden md:flex">
                <HomeButton/>
                <TimelineButton/>
                <SkillButton/>
                <ProjectsButton/>
                <SocialsButton/>
            </nav>
            <nav className="navmobile flex md:hidden">
                <div id="mobileNavLinks">
                    <HomeButton/>
                    <TimelineButton/>
                    <SkillButton/>
                    <ProjectsButton/>
                    <SocialsButton/>
                </div>
                <a href="javascript:void(0);" className="navbutton" onClick={() => myFunction()}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>
        </header>

    );
}