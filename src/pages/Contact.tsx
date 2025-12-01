import ContactForm from '../components/contact/ContactForm';
import '../styles/contact/contact.css'


function Contact() {
    return (
        <section className="contact_section">
            <h2>Entrer en contact</h2>
            <p>Vous avez une question, un projet en tête ou une opportunité à partager? Contactez-moi, je serais ravi d'en discuter et d'imaginer ensemble la meilleure façon de collaborer.</p>
            <ContactForm />
        </section>
    )
}

export default Contact;


