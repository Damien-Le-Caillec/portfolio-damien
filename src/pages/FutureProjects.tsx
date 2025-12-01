function FutureProjects() {
    return (
        <section className="future_projects_section">
            <div className="future_projects_container">
                <h1>Projets futurs</h1>
                <p className="future_projects_intro">
                    Mes ambitions et projets en cours de développement pour continuer à évoluer.
                </p>
                
                <div className="future_projects_grid">
                    {/* Projet en cours */}
                    <div className="future_project_card in_progress">
                        <div className="project_status">
                            <span className="status_badge">En cours</span>
                        </div>
                        <h3>[NOM DU PROJET EN COURS]</h3>
                        <p className="project_description">
                            [DESCRIPTION DU PROJET - objectifs, technologies, défis]
                        </p>
                        <div className="project_tech">
                            <span className="tech_tag">[TECHNOLOGIE 1]</span>
                            <span className="tech_tag">[TECHNOLOGIE 2]</span>
                        </div>
                        <div className="project_progress">
                            <div className="progress_bar">
                                <div className="progress_fill" style={{width: '60%'}}></div>
                            </div>
                            <span className="progress_text">60% terminé</span>
                        </div>
                    </div>
                    
                    {/* Projet planifié */}
                    <div className="future_project_card planned">
                        <div className="project_status">
                            <span className="status_badge">Planifié</span>
                        </div>
                        <h3>[NOM DU PROJET PLANIFIÉ]</h3>
                        <p className="project_description">
                            [DESCRIPTION - pourquoi ce projet, ce qu'il apportera]
                        </p>
                        <div className="project_tech">
                            <span className="tech_tag">[TECHNOLOGIE 1]</span>
                            <span className="tech_tag">[TECHNOLOGIE 2]</span>
                        </div>
                        <div className="project_timeline">
                            <span className="timeline_text">Prévu pour [MOIS/ANNÉE]</span>
                        </div>
                    </div>
                    
                    {/* Projet d'apprentissage */}
                    <div className="future_project_card learning">
                        <div className="project_status">
                            <span className="status_badge">Apprentissage</span>
                        </div>
                        <h3>[NOUVELLE TECHNOLOGIE À MAÎTRISER]</h3>
                        <p className="project_description">
                            [OBJECTIF D'APPRENTISSAGE - pourquoi cette technologie, comment l'apprendre]
                        </p>
                        <div className="learning_resources">
                            <span className="resource_tag">Documentation</span>
                            <span className="resource_tag">Tutoriels</span>
                            <span className="resource_tag">Projets pratiques</span>
                        </div>
                    </div>
                </div>
                
                <div className="future_goals">
                    <h2>🎯 Objectifs à long terme</h2>
                    <div className="goals_list">
                        <div className="goal_item">
                            <h3>Professionnel</h3>
                            <p>[VOS OBJECTIFS DE CARRIÈRE - poste visé, secteur, responsabilités]</p>
                        </div>
                        <div className="goal_item">
                            <h3>Technique</h3>
                            <p>[COMPÉTENCES À DÉVELOPPER - nouvelles technologies, certifications]</p>
                        </div>
                        <div className="goal_item">
                            <h3>Personnel</h3>
                            <p>[PROJETS PERSONNELS - contributions open source, mentorat, etc.]</p>
                        </div>
                    </div>
                </div>
                
                <div className="future_note">
                    <h2>💡 À personnaliser</h2>
                    <p>
                        <strong>Adaptez cette section selon vos ambitions :</strong>
                    </p>
                    <ul>
                        <li>Vos projets en cours de développement</li>
                        <li>Les nouvelles technologies que vous voulez apprendre</li>
                        <li>Vos objectifs de carrière (full-stack, spécialisation, etc.)</li>
                        <li>Les certifications que vous visez</li>
                        <li>Vos contributions à la communauté (open source, mentorat)</li>
                        <li>Vos projets personnels ou entrepreneuriaux</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default FutureProjects


