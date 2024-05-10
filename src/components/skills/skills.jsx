import "./skills.css"

const Skills = () => {
    return (
        <>
            <div className="container-fluid projects-heading" id="skills">
                <div>
                    <p>Meine Fähigkeiten</p>
                </div>
            </div>

            <div className="container-fluid d-flex justify-content-center align-items-center">

                <table className="table table-striped table-dark table-responsive skill-table align-middle">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Skill</th>
                            <th scope="col" colspan="2" className="text-center">Erfahrung</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">HTML</td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">Fortgeschritten</td>
                        </tr>
                        <tr>
                            <td className="text-center">CSS</td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">Fortgeschritten</td>
                        </tr>
                        <tr>
                            <td className="text-center">Bootstrap</td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">Fortgeschritten</td>
                        </tr>
                        <tr>
                            <td className="text-center">JavaScript</td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "65%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">Fortgeschritten</td>
                        </tr>
                        <tr>
                            <td className="text-center">React</td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "65%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">Fortgeschritten</td>
                        </tr>
                        <tr>
                            <td className="text-center">VBA</td>
                            <td>
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "40%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">erhöhte Kenntnisse</td>
                        </tr>
                        <tr>
                            <td className="text-center">Blue Prism</td>
                            <td>
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "40%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">Grundlagen</td>
                        </tr>
                        <tr>
                            <td className="text-center">SQL</td>
                            <td>
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "25%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">Grundlagen</td>
                        </tr>
                        <tr>
                            <td className="text-center">Angular</td>
                            <td>
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "25%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">Grundlagen</td>
                        </tr>
                        <tr>
                            <td className="text-center">PHP</td>
                            <td>
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "20%" }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">Grundlagen</td>
                        </tr>

                    </tbody>
                </table>
            </div >
        </>
    );
}

export default Skills;