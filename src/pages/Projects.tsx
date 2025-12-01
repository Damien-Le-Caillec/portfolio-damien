function Projects() {
    return (
        <section className="projects_section">
            <div className="projects_container">
                <h1>Mes projets</h1>
                <p className="projects_intro">
                    Découvrez une sélection de projets qui illustrent mon expertise et ma passion pour le développement web.
                </p>
                
                <div className="projects_grid">
                    {/* Projet 1 - À personnaliser */}
                    <div className="project_card featured">
                        <div className="project_image">
                            <div className="project_placeholder">
                                [IMAGE DU PROJET]
                            </div>
                        </div>
                        <div className="project_content">
                            <h3>[NOM DU PROJET PRINCIPAL]</h3>
                            <p className="project_description">
                                [DESCRIPTION DU PROJET - Expliquez le contexte, les défis techniques, les technologies utilisées]
                            </p>
                            <div className="project_tech">
                                <span className="tech_tag">React</span>
                                <span className="tech_tag">Node.js</span>
                                <span className="tech_tag">MongoDB</span>
                            </div>
                            <div className="project_links">
                                <a href="#" className="project_link">Voir le projet</a>
                                <a href="#" className="project_link">Code source</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Projet 2 */}
                    <div className="project_card">
                        <div className="project_image">
                            <div className="project_placeholder">
                                [IMAGE DU PROJET]
                            </div>
                        </div>
                        <div className="project_content">
                            <h3>[NOM DU PROJET 2]</h3>
                            <p className="project_description">
                                [DESCRIPTION DU PROJET]
                            </p>
                            <div className="project_tech">
                                <span className="tech_tag">JavaScript</span>
                                <span className="tech_tag">CSS</span>
                            </div>
                            <div className="project_links">
                                <a href="#" className="project_link">Voir le projet</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Projet 3 */}
                    <div className="project_card">
                        <div className="project_image">
                            <div className="project_placeholder">
                                [IMAGE DU PROJET]
                            </div>
                        </div>
                        <div className="project_content">
                            <h3>[NOM DU PROJET 3]</h3>
                            <p className="project_description">
                                [DESCRIPTION DU PROJET]
                            </p>
                            <div className="project_tech">
                                <span className="tech_tag">Python</span>
                                <span className="tech_tag">Flask</span>
                            </div>
                            <div className="project_links">
                                <a href="#" className="project_link">Voir le projet</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="projects_note">
                    <h2>💡 À personnaliser</h2>
                    <p>
                        <strong>Pour chaque projet, ajoutez :</strong>
                    </p>
                    <ul>
                        <li>Le nom du projet</li>
                        <li>Une description détaillée (contexte, défis, solutions)</li>
                        <li>Les technologies utilisées</li>
                        <li>Des liens vers le projet en ligne et le code source</li>
                        <li>Des images/screenshots du projet</li>
                        <li>Les résultats obtenus (métriques, feedback, etc.)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Projects


