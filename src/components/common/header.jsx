import Linkedin from '../../assets/icons/Linkedin';
import Github from '../../assets/icons/Github';
import '../../styles/common/header.css'

function Header() {
    return (
        <header>
            <section className="header_section">
                <a href="/" className="header_logo">
                    <h1 className="header_logo_title">Damien</h1>
                </a>
                <nav className="header_nav">
                    <ul className="header_nav_list">
                        <div className="header_nav_list_pages">
                            <a href="/about" className="header_nav_list_pages_link">À propos</a>
                            <a href="/works" className="header_nav_list_pages_link">Projets</a>
                            <a href="/contact" className="header_nav_list_pages_link">Contact</a>
                        </div>
                        
                        <div className="header_nav_list_socials">
                            <a href="https://www.linkedin.com/in/damien-le-caillec-28b065216" target="_blank" rel="noopener noreferrer" className="header_nav_list_social_link">
                                <Linkedin size={32} color="#4D3F30" />
                            </a>
                            <a href="https://github.com/Damien-Le-Caillec" target='_blank' rel="noopener noreferrer" className="header_nav_list_social_link">
                                <Github size={32} color='#4D3F30' />
                            </a>
                        </div>

                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header