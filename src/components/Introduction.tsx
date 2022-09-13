import IntroductionText from "../data/Introduction";

export default function Introduction() {
    return (
        <section id="socials" className="my-5 mx-auto">
            <div className="container flex flex-col">
                <h2 className="uppercase font-semibold m-auto left-1/2 py-1">
                    Hello!!!
                </h2>
                <div className="flex mx-auto md:w-1/2">
                    <IntroductionText />
                </div>
            </div>
        </section>
    );
}