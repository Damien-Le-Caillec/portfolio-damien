import "../styles/about/about.css"

function About() {
    return (
        <section className="about_section">
            <div className="about_container">
                <h1>À propos de moi</h1>
                
                <div className="about_content">
                    <div className="about_text">
                        <div className="horizontal">
                        <img src="src\assets\img\moi.webp" alt="Damien Le Caillec" className="me_img" />
                        <p className="about_me">
                            Passionné par la technologie depuis mes débuts, je me suis naturellement diriger vers le developpement web et applicatif.
                            <br />
                            Je mets un point d'honneur à créer des expériences numériques qui allient esthétique et fonctionnalité. 
                            <br />
                            Mon approche se base sur une compréhension approfondie des besoins utilisateurs et une attention particulière aux détails.
                        </p>
                        </div>
                        
                        <h2>Ma philosophie</h2>
                        <p>
                            Je crois fermement que le code doit être non seulement fonctionnel, mais aussi maintenable et évolutif. 
                            Chaque ligne de code que j'écris reflète mon engagement envers la qualité et l'innovation.
                        </p>
                    </div>
                    
                    <div className="about_highlights">
                        <div className="highlight_card">
                            <h3>Mission</h3>
                            <p>Transformer vos idées en solutions numériques performantes et élégantes</p>
                        </div>
                        
                        <div className="highlight_card">
                            <h3>Vision</h3>
                            <p>Construire l'avenir du web avec des technologies durables et accessibles</p>
                        </div>
                        
                        <div className="highlight_card">
                            <h3>Valeurs</h3>
                            <p>Qualité, innovation, collaboration et apprentissage continu</p>
                        </div>
                    </div>
                </div>
                
                <div className="about_personal">
                    <h2>En dehors du code</h2>
                    <p>
                        Guidé par une curiosité insatiable et un souci du détail méticuleux, je m'applique à restaurer des montres vintage avec le soin d'un passionné. 
                        <br />
                        Mon engouement pour l'automobile, combinant excellence technique et attrait visuel, témoigne également de ma fascination pour la mécanique et l'esthétique.
                        <br />
                        Mon harmonie se construit par l'interaction avec la vie : 
                        j'entretiens une "jungle intérieure" et j'ai fabriqué ma propre serre pour fournir à mes plantes un environnement de croissance optimal.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;


