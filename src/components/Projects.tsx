import { projectsList } from "../data/Projects";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container flex flex-col px-0">
                <div className="m-auto py-1 title">
                    My projects so far.
                </div>
                <div className="m-auto py-1 text-center">
                    Almost all my projects so far, ordered form oldest to newest.
                    <br/>
                    If you have any remarks to my code, just leave a comment on the GitHub repo!
                </div>
                <div className="m-auto py-1"></div>
                <div className="m-auto py-1">Nearly all titles are clickable.</div>
                <div className="container w-full h-full">
                    <div className="relative pt-10 h-full">
                        <div className="absolute border-2-2 border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                        {projectsList.map((project, index) =>
                            <div className={`flex justify-around items-center w-full mb-8 ${index % 2 === 0 ? "left-timeline flex-row-reverse" : "right-timeline"}`}>
                                <div className={`order-1 w-5/12 ${index % 2 === 0 ? "": "text-right"}`}>
                                    {project.date}
                                    <br />
                                    {project.technology}
                                </div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                                </div>
                                <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 opacity-2 ${index % 2 === 0 ? "bg-gray-400" : "bg-red-400"}`}>
                                    <h3 className={`mb-3 font-bold text-xl ${index % 2 === 0 ? "text-gray-800" : "text-white"}`}>
                                        {project.link}
                                    </h3>
                                    <p className={`text-sm leading-snug tracking-wide text-opacity-100  ${index % 2 === 0 ? "text-gray-900" : "font-medium text-white"}`}>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}