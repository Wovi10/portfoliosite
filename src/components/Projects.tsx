import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import { Typography } from "@mui/material";
import { projectsList } from "../data/Projects";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container flex flex-col">
                <div className="m-auto py-1 title">
                    My projects so far.
                </div>
                <div className="m-auto py-1">Nearly all titles are clickable.</div>
                <div className="m-auto py-1">If you have any remarks to my code, just leave a comment on the GitHub repo!</div>
                <div className="container mx-auto w-full h-full">
                    <div className="relative p-10 h-full">
                        <div className="absolute border-2-2 border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                        {projectsList.map((project, index) =>
                            <div className="mb-8 ">
                                <div className={`flex justify-between items-center w-full ${index % 2 !== 0 ? "right-timeline" : "left-timeline flex-row-reverse"}`}>
                                    <div className="order-1 w-5/12">
                                        {project.date}
                                        <br />
                                        {project.technology}
                                    </div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                                    </div>
                                    <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 !== 0 ? "bg-red-400" : "bg-gray-400"}`}>
                                        <h3 className={`mb-3 font-bold text-xl ${index % 2 !== 0 ? "text-white" : "text-gray-800"}`}>
                                            <a
                                            title={project.name}
                                            type="button"
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="underline"
                                            >
                                                {project.name}
                                            </a>
                                        </h3>
                                        <p className={`text-sm leading-snug tracking-wide text-opacity-100  ${index % 2 !== 0 ? "font-medium text-white" : "text-gray-900"}`}>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}