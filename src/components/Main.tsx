import {lazy} from 'react';
const Introduction = lazy(() => import ("./Introduction"));
const PortfolioTimeline = lazy(() => import ("./PortfolioTimeline"));
const Skills = lazy(() => import ("./Skills"));
const Socials = lazy(() => import ("./Socials"));

export default function Main() {
    return (
        <div>
            <Introduction />
            <PortfolioTimeline />
            <Skills />
            <Socials/>
        </div>
    );
}