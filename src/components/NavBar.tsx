let activeElementId = "Home";

function addClass(elementId: any) {
    const element = document.getElementById(elementId);
    const activeElement = document.getElementById(activeElementId);

    activeElement?.classList.remove('active');
    element?.classList.add('active');

    activeElementId = elementId;
    return undefined;
}

function HomeButton() {
    return (
        <a id="Home" className="button active" href="#" onClick={() => {
            addClass('Home')
        }}>
            Home
        </a>
    );
}

function TimelineButton() {
    return (
        <a id="Timeline" className="button" href="#experience" onClick={() => {
            addClass('Timeline')
        }}>
            Timeline
        </a>
    );
}

function SkillButton() {
    return (
        <a id="Skills" className="button" href="#skills" onClick={() => {
            addClass('Skills')
        }}>
            Skills
        </a>
    );
}

function ProjectsButton() {
    return (
        <a id="Projects" className="button" href="#projects" onClick={() => {
            addClass('Projects')
        }}>
            Projects
        </a>
    );
}

function SocialsButton() {
    return (
        <a id="Socials" className="button" href="#socials" onClick={() => {
            addClass('Socials')
        }}>
            Socials
        </a>
    );
}

export default function NavBar() {
    function myFunction() {
        let x = document.getElementById("mobileNavLinks");
        if (x?.style.display === "flex") {
            x.style.display = "none";
        } else {
            x!.style.display = "flex";
        }
        return undefined;
    }

    return (
        <header>
            <nav className="desktop md:px-20 lg:px-36 hidden md:flex">
                <HomeButton/>
                <div id="desktopNavLinks">
                    <TimelineButton/>
                    <SkillButton/>
                    <ProjectsButton/>
                    <SocialsButton/>
                </div>
            </nav>
            <nav className="mobile flex md:hidden wrapper">
                <a href="javascript:void(0);" className="button hamburger" onClick={() => myFunction()}>
                    <i className="fa fa-bars"></i>
                </a>
                <HomeButton/>
                <div id="mobileNavLinks">
                    <TimelineButton/>
                    <SkillButton/>
                    <ProjectsButton/>
                    <SocialsButton/>
                </div>
            </nav>
        </header>

    );
}