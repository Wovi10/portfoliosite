import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import {Typography} from "@mui/material";
import {projectsList} from "../data/Projects";

export default function Projects() {
    return (
        <section id="projects" className="my-5 mx-auto">
            <div className="container flex flex-col">
                <div className="m-auto py-1 title">
                    My projects so far
                </div>
                <Timeline position="alternate">
                    {projectsList.map((project, index) =>
                        <TimelineItem className="textleft" key={index}>
                            <TimelineOppositeContent
                                sx={{m: 'auto 0'}}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                {project.date}
                                <br/>
                                {project.technology}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                <TimelineDot color="grey" variant="outlined">
                                    {project.icon}
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    <a
                                        title={project.name}
                                        type="button"
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="no-underline"
                                    >
                                        <div
                                            className="ml-0 mr-auto my-auto overflow-hidden subtitle">{project.name}</div>
                                    </a>
                                </Typography>
                                <Typography>{project.description}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    )}
                </Timeline>
            </div>
        </section>
    )
}