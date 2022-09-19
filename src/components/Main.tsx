import {lazy} from 'react';

const Projects = lazy(() => import ("./Projects"));
const Introduction = lazy(() => import ("./Introduction"));
const PortfolioTimeline = lazy(() => import ("./PortfolioTimeline"));
const Skills = lazy(() => import ("./Skills"));
const Socials = lazy(() => import ("./Socials"));

export default function Main() {
    return (
        <div>
            <Introduction/>
            <PortfolioTimeline/>
            <Skills/>
            <Projects/>
            <Socials/>
        </div>
    );
}