import "../../styles/home/hero.css";

function HomeBanner() {
    return(
        <section className="hero neoRetroHero" aria-label="Section d'accueil">
            <div className="hero__texture" aria-hidden="true"></div>
            <div className="hero__inner">
                <div className="hero__titleBlock">
                    <h1 className="hero__title">Damien — Code & Créativité</h1>
                    <p className="hero__tagline">Que ce soit pour un projet, une opportunité ou une idée, je suis prêt à collaborer et à transformer vos besoins en solutions concrètes.</p>
                </div>
                <div className="hero__ornaments" aria-hidden="true">
                    <span className="hero__badge">depuis 2025</span>
                    <span className="hero__seal"></span>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;


