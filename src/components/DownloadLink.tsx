function downloadResume() {
    const element = document.createElement("a");
    element.href = "/files/resume_WoutVinckevleugel.docx";
    element.download = "resume_WoutVinckevleugel.docx";
    element.click();
}

export default function DownloadLink() {
    return (
            <div className="container flex flex-col">
                <a id="downloadLink" href="javascript:void(0)" onClick={() => downloadResume()}>Download CV</a>
            </div>
    )
}