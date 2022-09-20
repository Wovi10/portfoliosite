import {lazy, Suspense} from 'react';

const Projects = lazy(() => import ("./Projects"));
const Introduction = lazy(() => import ("./Introduction"));
const PortfolioTimeline = lazy(() => import ("./PortfolioTimeline"));
const Skills = lazy(() => import ("./Skills"));
const Socials = lazy(() => import ("./Socials"));

export default function Main() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Introduction/>
                <PortfolioTimeline/>
                <Skills/>
                <Projects/>
                <Socials/>
            </Suspense>
        </div>
    );
}