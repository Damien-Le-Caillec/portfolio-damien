function Education() {
    return (
        <section className="education_section">
            <div className="education_container">
                <h1>Formation & Parcours</h1>
                <p className="education_intro">
                    Mon parcours d'apprentissage et de développement professionnel.
                </p>
                
                <div className="education_timeline">
                    {/* Formation principale */}
                    <div className="education_item">
                        <div className="education_date">
                            <span className="year">[ANNÉE DE DÉBUT] - [ANNÉE DE FIN]</span>
                        </div>
                        <div className="education_content">
                            <h3>[NOM DE LA FORMATION/ÉCOLE]</h3>
                            <p className="education_degree">[DIPLÔME/CERTIFICATION]</p>
                            <p className="education_description">
                                [DESCRIPTION DE LA FORMATION - matières étudiées, projets réalisés, compétences acquises]
                            </p>
                            <div className="education_skills">
                                <span className="skill_tag">Développement web</span>
                                <span className="skill_tag">Algorithmique</span>
                                <span className="skill_tag">Base de données</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Formation complémentaire */}
                    <div className="education_item">
                        <div className="education_date">
                            <span className="year">[ANNÉE]</span>
                        </div>
                        <div className="education_content">
                            <h3>[NOM DU COURS/CERTIFICATION]</h3>
                            <p className="education_degree">[ORGANISME/PLATEFORME]</p>
                            <p className="education_description">
                                [DESCRIPTION - ce que vous avez appris, durée, résultats]
                            </p>
                        </div>
                    </div>
                    
                    {/* Autodidacte */}
                    <div className="education_item">
                        <div className="education_date">
                            <span className="year">En continu</span>
                        </div>
                        <div className="education_content">
                            <h3>Apprentissage autodidacte</h3>
                            <p className="education_degree">Formation continue</p>
                            <p className="education_description">
                                [Décrivez vos sources d'apprentissage : plateformes, ressources, projets personnels]
                            </p>
                            <div className="education_resources">
                                <span className="resource_tag">FreeCodeCamp</span>
                                <span className="resource_tag">MDN Web Docs</span>
                                <span className="resource_tag">YouTube</span>
                                <span className="resource_tag">Documentation officielle</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="education_achievements">
                    <h2>🏆 Réalisations & Certifications</h2>
                    <div className="achievements_grid">
                        <div className="achievement_card">
                            <h3>[NOM DE LA CERTIFICATION]</h3>
                            <p>[ORGANISME] - [DATE]</p>
                            <a href="#" className="achievement_link">Voir le certificat</a>
                        </div>
                        <div className="achievement_card">
                            <h3>[PROJET REMARQUABLE]</h3>
                            <p>[CONTEXTE] - [RÉSULTAT]</p>
                            <a href="#" className="achievement_link">Voir le projet</a>
                        </div>
                    </div>
                </div>
                
                <div className="education_note">
                    <h2>💡 À personnaliser</h2>
                    <p>
                        <strong>Ajoutez vos informations réelles :</strong>
                    </p>
                    <ul>
                        <li>Vos diplômes et formations</li>
                        <li>Les dates exactes</li>
                        <li>Les projets réalisés pendant vos études</li>
                        <li>Vos certifications (Google, Microsoft, AWS, etc.)</li>
                        <li>Vos sources d'apprentissage autodidacte</li>
                        <li>Les compétitions ou hackathons auxquels vous avez participé</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Education


