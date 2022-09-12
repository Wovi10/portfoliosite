import ReactTooltip from "react-tooltip";
import {hardskills} from "../data/Skills";

export default function Skills() {
    return (
        <section id="skills" className="my-5 mx-auto">
            <div className="container flex flex-col">
                <h2 className="uppercase font-semibold m-auto py-1">
                    My skills
                </h2>
                <table className="table-auto left justify-items-end">
                    <tbody>
                        <tr>
                            <td className="border-r-2 p-r-2"><h4>Hardskills</h4></td>
                            <td>
                                <div className="flex flex-wrap">
                                    {hardskills.map((skill, index) => (
                                        <div className="p-2 w-1/3" key={index}>
                                            <div className="hover:bg-gray-100 rounded flex p-2
                                             md:text-6xl text-4xl icon-blue"
                                                       data-tip={skill.name}
                                                       data-for={skill.name}>
                                                    {skill.icon}
                                                <ReactTooltip id={skill.name} data-id={"tooltip"} place="top" effect="solid" type="dark" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <table className="table-auto right justify-items-start">
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex flex-wrap">
                                    {hardskills.map((skill, index) => (
                                        <div className="p-2 w-1/3" key={index}>
                                            <div className="hover:bg-gray-100 rounded flex p-2 md:text-6xl text-4xl icon-red"
                                                       data-tip={skill.name}
                                                       data-for={skill.name}>
                                                    {skill.icon}
                                                <ReactTooltip id={skill.name} data-id={"tooltip"} place="top" effect="solid" type="dark" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td className="border-l-2 p-l-2"><h4>Softskills</h4></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}