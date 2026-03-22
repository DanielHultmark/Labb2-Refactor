import { useState, useEffect } from "react";

export default function Portfolio() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/DanielHultmark/repos")
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <main className="p-main">
            <div className="gitrepo">
                {loading ? (
                    <p>Loading projects...</p>
                ) : (
                    projects.map((project) => (
                        <article className="project" key={project.id}>
                            <h3>{project.name}</h3>
                            <p>{project.description || 'No description available'}</p>
                            <p>Språk: {project.language || 'Unknown'}</p>
                            <a href={project.html_url} target="_blank">
                                Visa repo
                            </a>
                        </article>
                    ))
                )}
             </div>
        </main>
    );
}