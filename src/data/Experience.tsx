import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';

export const experiencesList = [
    {
        title: "Ludo",
        date: "Future",
        description: Future_text(),
        icon: <QuestionMarkRoundedIcon/>
    },
    {
        title: "Graduated",
        date: "Summer 2022",
        description: Bachelor_text(),
        icon: <AssuredWorkloadRoundedIcon/>
    },
    {
        title: "Internship @ Melexis",
        date: "Feb-May 2022",
        description: Melexis_text(),
        icon: <LaptopMacIcon/>
    },
    {
        title: "Started bachelor",
        date: "September 2019",
        description: BachStarted_text(),
        icon: <AccountBalanceRoundedIcon/>
    },
    {
        title: "Water-link",
        date: "Summer 2019",
        description: WaterLink_text(),
        icon: <LaptopMacIcon/>
    },
    {
        title: "Graduated",
        date: "June 2019",
        description: Diploma_text(),
        icon: <AssuredWorkloadRoundedIcon/>
    },
];

function Future_text() {
    return (
        <div className="flex-wrap">
            <div className="paragraph">
                I'm always open to job offers!
            </div>
        </div>
    );
}

function Bachelor_text() {
    return (
        <div className="flex-wrap">
            <div className="paragraph">
                Bachelor Applied Informatics major .NET
            </div>
        </div>
    );
}

function Melexis_text() {
    return (
        <div className="flex-wrap">
            <div className="paragraph">
                TypeScript data adapter
            </div>
        </div>
    );
}

function BachStarted_text() {
    return (
        <div className="flex-wrap">
            <div className="paragraph">
                Because it&apos;s awesome!
            </div>
        </div>
    );
}

function WaterLink_text() {
    return (
        <div className="flex-wrap">
            <div className="paragraph">
                ICT-Helpdesk
            </div>
        </div>
    );
}

function Diploma_text() {
    return (
        <div className="flex-wrap">
            <div className="paragraph">
                High school diploma Information Management
            </div>
        </div>
    );
}