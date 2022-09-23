function downloadResume() {
    const element = document.createElement("a");
    // const file = new Blob([document.getElementById("input")!.value], {
    //     type: "text/plain;charset=utf-8}"
    // });
    element.href = "../data/files/resume_WoutVinckevleugel.docx";
    element.download = "resume_WoutVinckevleugel.csv";
    element.click();
}

export default function DownloadLink() {
    return (
            <div className="container flex flex-col">
                <a id="downloadLink" href="javascript:void(0)" onClick={() => downloadResume()}>Download CV</a>
            </div>
    )
}