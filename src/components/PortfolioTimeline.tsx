import {TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";
import Timeline from '@mui/lab/Timeline';
import {Typography} from "@mui/material";
import {experiencesList} from "../data/Experience";

export default function PortfolioTimeline() {
    return (
        <section id="experience">
            <div className="title">
                My timeline so far
            </div>
            <div className="paragraph m-auto textcenter">
                Following points on my timeline are ordered from most recent to oldest.
                <br/>
                Only my school and Informatics focused job experience is shown. For more detail, please download my
                resume.
            </div>
            <Timeline position="alternate">
                {experiencesList.map((experience, index) =>
                    <TimelineItem className="textleft" key={index}>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {experience.date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                                {experience.icon}
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <Typography variant="h6" component="span">
                                <div className="ml-0 mr-auto my-auto overflow-hidden subtitle">
                                    {experience.title}
                                </div>
                            </Typography>
                            <Typography>
                                <div className="flex-wrap">
                                    <div className="paragraph">
                                        {experience.description}
                                    </div>
                                </div>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                )}
            </Timeline>
        </section>
    );
}