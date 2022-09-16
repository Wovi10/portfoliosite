import {projectsList} from "../data/Projects";

export default function Projects(){
    return(
        <section id="projects" className="my-5 mx-auto">
            <div className="container flex flex-col">
                <div className="m-auto py-1 title">
                    My projects so far
                </div>
                <div>
                    {projectsList.map((project, index) =>
                        <div className="p-2 w-1/3" key={index}>
                            <div>
                                <a
                                    title={project.name}
                                    type="button"
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="no-underline"
                                >
                                    <div className="ml-0 mr-auto my-auto overflow-hidden subtitle">{project.name}</div>
                                </a>
                                <div>
                                    {project.date}
                                </div>
                                <div>
                                    {project.technology}
                                </div>
                                <div>
                                    {project.description}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}