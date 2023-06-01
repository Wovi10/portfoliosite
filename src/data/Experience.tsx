import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import {TimelineDot} from "@mui/lab";

export const experiencesList = [
    {
        title: "Future",
        date: "Future",
        description: "I'm always open to job offers!",
        icon: <TimelineDot color="secondary" variant="filled">
                <QuestionMarkRoundedIcon/>
            </TimelineDot>
    },
    {
        title: "DotNET Lab - Coteng nv",
        date: "March 2023 - ?",
        description: "Fullstack developer focused on .NET backend. (Consultancy)",
        icon: <TimelineDot color="primary" variant="filled">
                <LaptopMacIcon/>
            </TimelineDot>
    },
    {
        title: "DotNET Academy",
        date: "February 2023",
        description: ".NET backend developer consultant",
        icon: <TimelineDot color="primary" variant="filled">
                <LaptopMacIcon/>
            </TimelineDot>
    },
    {
        title: "Graduated",
        date: "Summer 2022",
        description: "Bachelor Applied Informatics major .NET",
        icon: <TimelineDot color="success" variant="filled">
            <AssuredWorkloadRoundedIcon/>
        </TimelineDot>
    },
    {
        title: "Internship @ Melexis",
        date: "Feb-May 2022",
        description: "TypeScript data adapter",
        icon: <TimelineDot color="primary" variant="filled">
            <LaptopMacIcon/>
        </TimelineDot>
    },
    {
        title: "Started bachelor",
        date: "September 2019",
        description: "Because it's awesome!",
        icon: <TimelineDot color="success" variant="outlined">
            <AccountBalanceRoundedIcon/>
        </TimelineDot>
    },
    {
        title: "Water-link",
        date: "Summer 2019",
        description: "ICT-Helpdesk",
        icon: <TimelineDot color="primary" variant="filled">
            <LaptopMacIcon/>
        </TimelineDot>
    },
    {
        title: "Graduated",
        date: "June 2019",
        description: "High school diploma Information Management",
        icon: <TimelineDot color="success" variant="filled">
            <AssuredWorkloadRoundedIcon/>
        </TimelineDot>
    },
];