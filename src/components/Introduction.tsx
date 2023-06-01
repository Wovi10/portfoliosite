import {lazy, Suspense} from 'react';

const DownloadLink = lazy(() => import ("./DownloadLink"));

export default function Introduction() {
    return (
        <section id="introduction">
            <div className="container flex flex-col">
                <div className="title textcenter">
                    Hello!!
                </div>
                <div className="textcenter flex-wrap">
                    <div className="subtitle">
                        Welcome to my very own website.
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
                        I speak both <strong>Dutch</strong> and <strong>English</strong> fluently as well as a bit
                        of <strong>French</strong>.
                        <br/>
                        All my life I've been sporty and a bit competitive. (No I'm not one of those people who can't lose.)
                        <br/>
                        Taking the lead is not a problem, although I prefer being led if possible.
                    </div>
                    <div className="subtitle">
                        Why IT?
                    </div>
                    <div className="paragraph">
                        My fifth year in Secondary school (2017), I chose to go into IT.
                        <br/>
                        It was a logical choice because my dad has always been an ITer.
                        <br/>
                        After my dreams to become an astronomer kind of died out,
                        I changed from sciences to <strong>IT management</strong>.
                        <br/>
                        This choice seemed a good one as I finished my <strong>bachelor in Applied informatics</strong> in 2022.
						<br />
						As you can see in my <a href="#experience" className='underline'>timeline</a>, I am always looking for a next opportunity.
                    </div>
                    <div className="subtitle underline">
                        <Suspense>
                            <DownloadLink/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}