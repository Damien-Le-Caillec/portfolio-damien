import Linkedin from '../../assets/icons/Linkedin';
import Github from '../../assets/icons/Github';

import '../../styles/common/footer.css'

function Footer() {
    return (
        <footer>
            <section className="footer_section">
                <p className="footer_text">Damien Le Caillec</p>
                <div className="header_nav_list_socials">
                    <a href="https://www.linkedin.com/in/damien-le-caillec-28b065216" target="_blank" rel="noopener noreferrer" className="header_nav_list_social_link">
                        <Linkedin size={32} color="#4D3F30" />
                    </a>
                    <a href="https://github.com/Damien-Le-Caillec" target='_blank' rel="noopener noreferrer" className="header_nav_list_social_link">
                        <Github size={32} color='#4D3F30' />
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;