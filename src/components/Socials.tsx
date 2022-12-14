import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {socials_list} from "../data/Socials";


export default function Socials() {
    return (
        <section id="socials">
            <div className="container flex flex-col">
                <div className="m-auto py-1 title">
                    My socials
                </div>
                <div className="flex mx-auto md:w-1/2">
                    <div className="flex text-white rounded-3xl bg-black md:p-8 mx-2 p-4 flex-wrap">
                        <div className="flex items-center justify-center md:justify-start flex-wrap">
                            {socials_list.map((social, index) => (
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
                                            <i className={`${social.icon} mx-4 icon-blue`}></i>
                                            <p className="hidden md:block">{social.name}</p>
                                            <p className="block md:hidden">{social.mobile}</p>
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