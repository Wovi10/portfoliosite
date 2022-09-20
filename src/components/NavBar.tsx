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
        <a id="Home" className="active" href="#" onClick={() => {
            addClass('Home')
        }}>
            Home
        </a>
    );
}

function TimelineButton() {
    return (
        <a id="Timeline" href="#experience" onClick={() => {
            addClass('Timeline')
        }}>
            Timeline
        </a>
    );
}

function SkillButton() {
    return (
        <a id="Skills" href="#skills" onClick={() => {
            addClass('Skills')
        }}>
            Skills
        </a>
    );
}

function ProjectsButton() {
    return (
        <a id="Projects" href="#projects" onClick={() => {
            addClass('Projects')
        }}>
            Projects
        </a>
    );
}

function SocialsButton() {
    return (
        <a id="Socials" href="#socials" onClick={() => {
            addClass('Socials')
        }}>
            Socials
        </a>
    );
}

export default function NavBar() {
    function toggleNavbar() {
        let x = document.getElementById("mobileNavLinks");
        if (x?.style.display === "inline-block") {
            x.style.display = "none";
        } else {
            x!.style.display = "inline-block";
        }
        return undefined;
    }

    return (
        <header>
            <nav id="desktopNav" className="hidden md:flex">
                <HomeButton/>
                <div id="desktopNavLinks">
                    <TimelineButton/>
                    <SkillButton/>
                    <ProjectsButton/>
                    <SocialsButton/>
                </div>
            </nav>
            <nav id="mobileNav" className="inline-block md:hidden">
                <HomeButton/>
                <div id="mobileNavLinks">
                    <TimelineButton/>
                    <SkillButton/>
                    <ProjectsButton/>
                    <SocialsButton/>
                </div>
                <a href="javascript:void(0);" className="hamburger block md:hidden" onClick={() => toggleNavbar()}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>
        </header>

    );
}