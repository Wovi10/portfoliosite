import {hardskills_list, softskills_list} from "../data/Skills";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container flex flex-col">
                <div className="m-auto py-1 title">
                    My skills
                </div>
                <table className="table-auto left justify-end">
                    <tbody>
                    <tr>
                        <td className="border-r-2 pr-2"><h3>Hardskills</h3></td>
                        <td>
                            <div className="flex flex-wrap">
                                {hardskills_list.map((skill, index) => (
                                    <div className="p-2 w-1/3" key={index}>
                                        <div className="hover:bg-gray-100 rounded flex py-2 pl-2">
                                            <div className="md:text-6xl text-4xl icon-blue">
                                                {skill.icon}
                                            </div>
                                            <div className="ml-0 mr-auto my-auto overflow-hidden hidden md:block">
                                                {skill.name}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <table className="table-auto right justify-start">
                    <tbody>
                    <tr>
                        <td>
                            <div className="flex flex-wrap">
                                {softskills_list.map((skill, index) => (
                                    <div className="py-2 w-1/3" key={index}>
                                        <div className="hover:bg-gray-100 rounded flex py-2 pr-2">
                                            <div className="ml-auto mr-0 my-auto overflow-hidden hidden md:block">
                                                {skill.name}
                                            </div>
                                            <div className="md:text-5xl text-4xl icon-red">
                                                {skill.icon}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </td>
                        <td className="border-l-2 pl-4"><h4>Softskills</h4></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}