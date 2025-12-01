function Skills() {
    return (
        <section className="skills_section">
            <div className="skills_container">
                <h1>Compétences techniques</h1>
                <p className="skills_intro">
                    Un aperçu de mes compétences techniques, organisées par domaine d'expertise.
                </p>
                
                <div className="skills_categories">
                    {/* Frontend */}
                    <div className="skill_category">
                        <h2>🎨 Frontend</h2>
                        <div className="skills_grid">
                            <div className="skill_item">
                                <h3>HTML5</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '90%'}}></div>
                                </div>
                                <p>Maîtrise avancée</p>
                            </div>
                            <div className="skill_item">
                                <h3>CSS3</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '85%'}}></div>
                                </div>
                                <p>Flexbox, Grid, animations</p>
                            </div>
                            <div className="skill_item">
                                <h3>JavaScript</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '80%'}}></div>
                                </div>
                                <p>ES6+, DOM, API</p>
                            </div>
                            <div className="skill_item">
                                <h3>React</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '75%'}}></div>
                                </div>
                                <p>Hooks, Context, Router</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Backend */}
                    <div className="skill_category">
                        <h2>⚙️ Backend</h2>
                        <div className="skills_grid">
                            <div className="skill_item">
                                <h3>Node.js</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '70%'}}></div>
                                </div>
                                <p>Express, API REST</p>
                            </div>
                            <div className="skill_item">
                                <h3>Python</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '65%'}}></div>
                                </div>
                                <p>Flask, Django</p>
                            </div>
                            <div className="skill_item">
                                <h3>Base de données</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '60%'}}></div>
                                </div>
                                <p>MongoDB, SQL</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Outils */}
                    <div className="skill_category">
                        <h2>🛠️ Outils & Méthodes</h2>
                        <div className="skills_grid">
                            <div className="skill_item">
                                <h3>Git</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '80%'}}></div>
                                </div>
                                <p>Versioning, collaboration</p>
                            </div>
                            <div className="skill_item">
                                <h3>Bash/Shell</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '70%'}}></div>
                                </div>
                                <p>Scripting, automatisation</p>
                            </div>
                            <div className="skill_item">
                                <h3>Docker</h3>
                                <div className="skill_level">
                                    <div className="skill_bar" style={{width: '50%'}}></div>
                                </div>
                                <p>Conteneurisation</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="skills_note">
                    <h2>💡 À personnaliser</h2>
                    <p>
                        <strong>Adaptez cette section selon votre niveau réel :</strong>
                    </p>
                    <ul>
                        <li>Modifiez les pourcentages selon votre maîtrise</li>
                        <li>Ajoutez/supprimez des technologies</li>
                        <li>Précisez vos spécialisations (ex: "React Native", "TypeScript", "GraphQL")</li>
                        <li>Mentionnez vos certifications si vous en avez</li>
                        <li>Ajoutez des projets qui démontrent ces compétences</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills


