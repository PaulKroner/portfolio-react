import "./projects.css";
import ProjectsComponent from "./projects-component";

const Projects = () => {

    const projects = [
        {
            id: "long-SB",
            title: "SQL-Statementbuilder",
            content: "Der SQL-Statementbuilder ist ein einfacher Baukasten, mit dem User durch anklicken von Selectfeldern ein SQL-Statement erstellen kann, ohne die Syntax zu kennen.",
            usedTech: ["HTML", "CSS", "JQuery", "PHP"]
        },
        {
            id: "angularFrontend",
            title: "Angular Frontend",
            content: "Während meiner Werksstudententätigkeit habe ich den Frontend-Entwicklern ausgeholfen. Das genutzte Frontend-Framework war Angular.",
            usedTech: ["Angular", "Angular Material", "TypeScript"]
        },
        {
            id: "live-voting-tool",
            title: "Live-Voting-Tool",
            content: `Im Rahmen des Mastermoduls "Software Engineering Project" 
                    habe ich innerhalb einer Gruppenarbeit zusammen mit <a href="https://finatix.de/">Finatix</a> 
                    ein Live-Voting-Tool erstellt. Ziel war es den Ablauf, Problemen und Lösungen eines Softwareprojekts 
                    kennenzulernen. Der Techstack bestand aus React Typescript für das Frontend 
                    und MariaDB sowie OpenAPI fürs Backend.`,
            usedTech: ["React.js", "Bootstrap", "Typescript", "OpenAPI", "MariaDB", "Websockets"]
        },
        {
            id: "poker",
            title: "Poker (WIP)",
            content: `Zusammen mit einem Freund baue ich ein Multiplayer Pokerspiel, 
                    welches zum Ausbau unserer Programmier-Fähigkeiten gedacht ist. 
                    Dabei bin ich für das Frontend zuständig.`,
            usedTech: ["React.js", "Bootstrap", "Node.js", "Socket.io"]
        },
    ]
    return (
        <>
            <div className="container-fluid projects-heading" id="projects">
                <div>
                    <p>Projekte</p>
                </div>
            </div>

            <div className="projects d-flex flex-column justify-content-center align-items-center">

                {projects.map(project => (
                    <div className="project-wrapper d-flex flex-row" key={project.id}>
                        <ProjectsComponent id={project.id} title={project.title} content={project.content} usedTech={project.usedTech}/>
                    </div>

                ))}

            </div>
        </>
    );
}

export default Projects;