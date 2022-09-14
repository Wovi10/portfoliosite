import {lazy} from 'react';
const IntroductionText = lazy(() => import ("../data/Introduction"));

export default function Introduction() {
    return (
        <section id="socials" className="pt-16 my-5 mx-auto pb-5">
            <div className="container flex flex-col">
                <div className="title textleft">
                    Hello!!
                </div>
                <div>
                    <IntroductionText />
                </div>
            </div>
        </section>
    );
}