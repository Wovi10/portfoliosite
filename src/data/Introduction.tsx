import '../css/textlayout.css'

export default function IntroductionText() {
    return(
        <div className="textleft">
            <div className="subtitle">
                <strong>Welcome</strong> to my very own website.
            </div>
            <div className="paragraph">
                Here you'll find who I am and what drives me.
                But also what I did so far and what my future might look like.
            </div>
            <div className="subtitle">
                About me
            </div>
            <div className="paragraph">
                My name is <strong>Wout Vinckevleugel</strong> and I'm a Belgian backend developer.
                <br/>
                In 2001 I was born in Antwerp, Belgium.
                <br/>
                I speak both <strong>Dutch</strong> and <strong>English</strong> fluently as well as a bit of <strong>French</strong>.
                
            </div>
        </div>

    );
}