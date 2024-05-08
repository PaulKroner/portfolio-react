import "./projects.css";

const ProjectsComponent = ({ id, title, content, usedTech }) => {

    return (

        <div className="container-fluid flex-column">
            <div className="project-description-heading d-flex align-items-center justify-content-center"
                id={id}>
                {title}
            </div>

            <div className="project-description-wrapper">
                <p className="project-description text-center">
                    {content}
                </p>
            </div>

            <div
                className="used-tech-wrapper d-flex flex-row justify-content-center align-items-center">
                {usedTech.map(tech => (
                    <div className="used-tech" key={tech}>
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsComponent;