function downloadResume() {
    const element = document.createElement("a");
    element.href = "/files/WoutVinckevleugel_CV.pdf";
    element.download = "CV_WoutVinckevleugel.pdf";
    element.click();
}

export default function DownloadLink() {
    return (
            <div>
                <a id="downloadLink" href="javascript:void(0)" onClick={() => downloadResume()}>Download CV</a>
            </div>
    )
}