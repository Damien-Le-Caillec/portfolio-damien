function OtherSkills() {
    return (
        <section className="other_skills_section">
            <div className="other_skills_container">
                <h1>Compétences transversales</h1>
                <p className="other_skills_intro">
                    Au-delà du code, ces compétences me permettent d'être un développeur complet et efficace.
                </p>
                
                <div className="other_skills_categories">
                    {/* Soft Skills */}
                    <div className="skill_category">
                        <h2>🤝 Soft Skills</h2>
                        <div className="skills_list">
                            <div className="skill_item">
                                <h3>Communication</h3>
                                <p>Présentation de projets, rédaction technique, collaboration avec les équipes</p>
                                <div className="skill_level">
                                    <div className="skill_dots">
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill_item">
                                <h3>Résolution de problèmes</h3>
                                <p>Analyse, décomposition, approche méthodique des défis techniques</p>
                                <div className="skill_level">
                                    <div className="skill_dots">
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill_item">
                                <h3>Adaptabilité</h3>
                                <p>Apprentissage rapide, flexibilité face aux changements technologiques</p>
                                <div className="skill_level">
                                    <div className="skill_dots">
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Méthodologies */}
                    <div className="skill_category">
                        <h2>📋 Méthodologies</h2>
                        <div className="skills_list">
                            <div className="skill_item">
                                <h3>Agile/Scrum</h3>
                                <p>Gestion de projet, sprints, rétrospectives</p>
                                <div className="skill_level">
                                    <div className="skill_dots">
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill_item">
                                <h3>Design Thinking</h3>
                                <p>Approche centrée utilisateur, prototypage, itération</p>
                                <div className="skill_level">
                                    <div className="skill_dots">
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill_item">
                                <h3>Version Control</h3>
                                <p>Git, collaboration, gestion des branches</p>
                                <div className="skill_level">
                                    <div className="skill_dots">
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot filled"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Langues */}
                    <div className="skill_category">
                        <h2>🌍 Langues</h2>
                        <div className="languages_list">
                            <div className="language_item">
                                <h3>Français</h3>
                                <p>Langue maternelle</p>
                                <div className="language_level">Natif</div>
                            </div>
                            <div className="language_item">
                                <h3>Anglais</h3>
                                <p>Technique et conversationnel</p>
                                <div className="language_level">Avancé</div>
                            </div>
                            <div className="language_item">
                                <h3>[AUTRE LANGUE]</h3>
                                <p>[NIVEAU]</p>
                                <div className="language_level">[NIVEAU]</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Intérêts */}
                    <div className="skill_category">
                        <h2>🎯 Centres d'intérêt</h2>
                        <div className="interests_grid">
                            <div className="interest_card">
                                <h3>Technologie</h3>
                                <p>Veille technologique, nouvelles tendances, innovation</p>
                            </div>
                            <div className="interest_card">
                                <h3>[VOTRE PASSION 1]</h3>
                                <p>[DESCRIPTION - comment cela enrichit votre profil de développeur]</p>
                            </div>
                            <div className="interest_card">
                                <h3>[VOTRE PASSION 2]</h3>
                                <p>[DESCRIPTION - compétences transférables]</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="other_skills_note">
                    <h2>💡 À personnaliser</h2>
                    <p>
                        <strong>Adaptez cette section selon votre profil :</strong>
                    </p>
                    <ul>
                        <li>Vos soft skills réelles (leadership, créativité, etc.)</li>
                        <li>Vos expériences de travail en équipe</li>
                        <li>Vos langues et niveaux</li>
                        <li>Vos centres d'intérêt qui enrichissent votre profil</li>
                        <li>Vos expériences de mentorat ou formation</li>
                        <li>Vos contributions à la communauté</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default OtherSkills


