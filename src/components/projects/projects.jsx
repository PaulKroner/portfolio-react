import "./projects.css";

const Projects = () => {
    return (
        <>
            <div className="container-fluid projects-heading" id="projects">
                <div>
                    <p>Projekte</p>
                </div>
            </div>

            <div className="projects d-flex flex-column justify-content-center align-items-center">
                <div className="project-wrapper d-flex flex-row">
                    <div className="project-image-wrapper">
                        <img className="project-image" src="pictures/SB_Logo.JPG" alt="SQL-Statementbuilder" />
                    </div>
                    <div className="container-fluid flex-column">
                        <div className="long-SB project-description-heading d-flex align-items-center justify-content-center"
                            id="long-SB">
                            SQL-Statementbuilder
                        </div>
                        <div className="short-SB project-description-heading d-flex align-items-center justify-content-center"
                            id="short-SB">
                            SQL-Statement-Builder
                        </div>

                        <div className="project-description-wrapper">
                            <p className="project-description text-center">
                                Der SQL-Statementbuilder ist ein einfacher Baukasten,
                                mit dem User durch anklicken von Selectfeldern ein SQL-Statement erstellen kann,
                                ohne die Syntax zu kennen.
                            </p>
                        </div>

                        <div
                            className="used-tech-wrapper d-flex flex-row justify-content-center align-items-center">
                            <div className="used-tech">HTML</div>
                            <div className="used-tech">CSS</div>
                            <div className="used-tech">JQuery</div>
                            <div className="used-tech">PHP</div>
                        </div>
                    </div>
                </div>

                <div className="project-wrapper d-flex flex-row">
                    <div className="project-image-wrapper">
                        <img className="project-image" src="pictures/gisa_logo.jpg" alt="GISA Logo" />
                    </div>
                    <div className="container-fluid flex-column">
                        <div
                            className="project-description-heading d-flex align-items-center justify-content-center">
                            Angular Frontend
                        </div>

                        <div className="project-description-wrapper">
                            <p className="project-description text-center">
                                Während meiner Werksstudententätigkeit habe ich den Frontend-Entwicklern
                                ausgeholfen.
                                Das genutzte Frontend-Framework war Angular.
                            </p>
                        </div>

                        <div
                            className="used-tech-wrapper d-flex flex-row justify-content-center align-items-center">
                            <div className="used-tech">Angular</div>
                            <div className="used-tech">Angular Material</div>
                            <div className="used-tech">TypeScript</div>
                        </div>
                    </div>
                </div>

                <div className="project-wrapper d-flex flex-row">
                    <div className="project-image-wrapper">
                        <img className="project-image"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            alt="React Logo" />
                    </div>
                    <div className="container-fluid flex-column">
                        <div
                            className="project-description-heading d-flex align-items-center justify-content-center">
                            Live Voting Tool
                        </div>

                        <div className="project-description-wrapper">
                            <p className="project-description text-center">
                                Im Rahmen des Mastermoduls "Software Engineering Project"
                                habe ich innerhalb einer Gruppenarbeit zusammen
                                mit <a href="https://finatix.de/">Finatix</a> ein Live-Voting-Tool erstellt.
                                Ziel war es den Ablauf, Problemen und Lösungen eines Softwareprojekts
                                kennenzulernen.
                                Der Techstack bestand aus React Typescript für das Frontend
                                und MariaDB sowie OpenAPI fürs Backend.
                            </p>
                        </div>

                        <div
                            className="used-tech-wrapper d-flex flex-row flex-wrap justify-content-center align-items-center">
                            <div className="used-tech">React</div>
                            <div className="used-tech">Bootstrap CSS</div>
                            <div className="used-tech">TypeScript</div>
                            <div className="used-tech">OpenAPI</div>
                            <div className="used-tech">MariaDB</div>
                            <div className="used-tech">Websockets</div>
                        </div>
                    </div>
                </div>

                <div className="project-wrapper d-flex flex-row">
                    <div className="project-image-wrapper">
                        <img className="project-poker-image"
                            src="https://free4kwallpapers.com/uploads/originals/2020/03/20/poker-and-cards-wallpaper.png"
                            alt="Poker" />
                    </div>
                    <div className="container-fluid flex-column">
                        <div
                            className="project-description-heading d-flex align-items-center justify-content-center">
                            Poker (WIP)
                        </div>

                        <div className="project-description-wrapper">
                            <p className="project-description text-center">
                                Zusammen mit einem Freund baue ich ein Multiplayer Pokerspiel,
                                welches zum Ausbau unserer Programmier-Fähigkeiten gedacht ist.
                                Dabei bin ich für das Frontend zuständig.
                            </p>
                        </div>

                        <div
                            className="used-tech-wrapper d-flex flex-row flex-wrap justify-content-center align-items-center">
                            <div className="used-tech">React.js</div>
                            <div className="used-tech">Bootstrap CSS</div>
                            <div className="used-tech">Node.js</div>
                            <div className="used-tech">Socket.io</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;