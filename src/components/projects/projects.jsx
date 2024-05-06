import "./projects.css";

const Projects = () => {
    return (
        <>
            <div class="container-fluid projects-heading" id="projects">
                <div>
                    <p>Projekte</p>
                </div>
            </div>

            <div class="projects d-flex flex-column justify-content-center align-items-center">
                <div class="project-wrapper d-flex flex-row">
                    <div class="project-image-wrapper">
                        <img class="project-image" src="pictures/SB_Logo.JPG" alt="SQL-Statementbuilder" />
                    </div>
                    <div class="container-fluid flex-column">
                        <div class="long-SB project-description-heading d-flex align-items-center justify-content-center"
                            id="long-SB">
                            SQL-Statementbuilder
                        </div>
                        <div class="short-SB project-description-heading d-flex align-items-center justify-content-center"
                            id="short-SB">
                            SQL-Statement-Builder
                        </div>

                        <div class="project-description-wrapper">
                            <p class="project-description text-center">
                                Der SQL-Statementbuilder ist ein einfacher Baukasten,
                                mit dem User durch anklicken von Selectfeldern ein SQL-Statement erstellen kann,
                                ohne die Syntax zu kennen.
                            </p>
                        </div>

                        <div
                            class="used-tech-wrapper d-flex flex-row justify-content-center align-items-center">
                            <div class="used-tech">HTML</div>
                            <div class="used-tech">CSS</div>
                            <div class="used-tech">JQuery</div>
                            <div class="used-tech">PHP</div>
                        </div>
                    </div>
                </div>

                <div class="project-wrapper d-flex flex-row">
                    <div class="project-image-wrapper">
                        <img class="project-image" src="pictures/gisa_logo.jpg" alt="GISA Logo" />
                    </div>
                    <div class="container-fluid flex-column">
                        <div
                            class="project-description-heading d-flex align-items-center justify-content-center">
                            Angular Frontend
                        </div>

                        <div class="project-description-wrapper">
                            <p class="project-description text-center">
                                Während meiner Werksstudententätigkeit habe ich den Frontend-Entwicklern
                                ausgeholfen.
                                Das genutzte Frontend-Framework war Angular.
                            </p>
                        </div>

                        <div
                            class="used-tech-wrapper d-flex flex-row justify-content-center align-items-center">
                            <div class="used-tech">Angular</div>
                            <div class="used-tech">Angular Material</div>
                            <div class="used-tech">TypeScript</div>
                        </div>
                    </div>
                </div>

                <div class="project-wrapper d-flex flex-row">
                    <div class="project-image-wrapper">
                        <img class="project-image"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            alt="React Logo" />
                    </div>
                    <div class="container-fluid flex-column">
                        <div
                            class="project-description-heading d-flex align-items-center justify-content-center">
                            Live Voting Tool
                        </div>

                        <div class="project-description-wrapper">
                            <p class="project-description text-center">
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
                            class="used-tech-wrapper d-flex flex-row flex-wrap justify-content-center align-items-center">
                            <div class="used-tech">React</div>
                            <div class="used-tech">Bootstrap CSS</div>
                            <div class="used-tech">TypeScript</div>
                            <div class="used-tech">OpenAPI</div>
                            <div class="used-tech">MariaDB</div>
                            <div class="used-tech">Websockets</div>
                        </div>
                    </div>
                </div>

                <div class="project-wrapper d-flex flex-row">
                    <div class="project-image-wrapper">
                        <img class="project-poker-image"
                            src="https://free4kwallpapers.com/uploads/originals/2020/03/20/poker-and-cards-wallpaper.png"
                            alt="Poker" />
                    </div>
                    <div class="container-fluid flex-column">
                        <div
                            class="project-description-heading d-flex align-items-center justify-content-center">
                            Poker (WIP)
                        </div>

                        <div class="project-description-wrapper">
                            <p class="project-description text-center">
                                Zusammen mit einem Freund baue ich ein Multiplayer Pokerspiel,
                                welches zum Ausbau unserer Programmier-Fähigkeiten gedacht ist.
                                Dabei bin ich für das Frontend zuständig.
                            </p>
                        </div>

                        <div
                            class="used-tech-wrapper d-flex flex-row flex-wrap justify-content-center align-items-center">
                            <div class="used-tech">React.js</div>
                            <div class="used-tech">Bootstrap CSS</div>
                            <div class="used-tech">Node.js</div>
                            <div class="used-tech">Socket.io</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;