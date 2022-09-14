import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {socials} from "../data/Socials";


export default function Socials() {
    return (
        <section id="socials" className="my-5 mx-auto">
            <div className="container flex flex-col">
                <h2 className="uppercase font-semibold m-auto left-1/2 py-1">
                    My socials
                </h2>
                <div className="flex mx-auto md:w-1/2">
                    <div className="flex text-white rounded-3xl bg-black md:p-8 mx-2 p-4 flex-wrap">
                        <div className="flex items-center justify-center md:justify-start flex-wrap">
                            {socials.map((social, index) => (
                                <p className="p-2 w-1/2" key={index}>
                                    <div key={social.name}>
                                        <a
                                            title={social.hovertext}
                                            type="button"
                                            href={social.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded flex no-underline hover:underline font-thin text-sm md:text-md"
                                        >
                                            <i className={`${social.icon} mx-4`}></i>
                                            <p className="flex-shrink-0 mr-4 text-white hidden md:block">{social.name}</p>
                                            <p className="flex-shrink-0 mr-4 text-white block md:hidden">{social.mobile}</p>
                                        </a>
                                    </div>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}