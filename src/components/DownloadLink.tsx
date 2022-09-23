function downloadResume() {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input")!.value], {
        type: "text/plain;charset=utf-8}"
    });
    element.href = "./data/files/resume_WoutVinckevleugel.csv";
    element.download = "resume_WoutVinckevleugel.csv";
    element.click();
}

export default function DownloadLink() {
    return (
        <section id="downloadlink">
            <div className="container flex flex-col">
                <a href="javascript:void(0)" onClick={() => downloadResume()}></a>
            </div>
        </section>
    )
}