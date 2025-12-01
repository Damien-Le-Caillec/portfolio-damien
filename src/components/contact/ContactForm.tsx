import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "emailjs-com";

interface ContactFormData {
    prenom: string;
    nom: string;
    email: string;
    societe: string;
    message: string;
}

function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        prenom: "",
        nom: "",
        email: "",
        societe: "",
        message: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            'service_gzdcwbo',
            'template_t3cprue',
            formData as unknown as Record<string, unknown>,
            'bDtC7DEZmwzLMBrtp'
        )
        .then(() => {
            alert("Message envoyé avec succès !");
            setFormData({
                prenom: "",
                nom: "",
                email: "",
                societe: "",
                message: ""
            });
        });
    };

    return (
        <div className="contact">
            <form className="contact_form" onSubmit={handleSubmit}>
                <div className="form_row">
                    <label>Prénom
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required/>
                    </label>
                    <label>Nom
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} required/>
                    </label>
                </div>
                <div className="form_row">
                    <label>Email
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                    </label>
                    <label>Société
                        <input type="text" name="societe" value={formData.societe} onChange={handleChange}/>
                    </label>
                </div>
                <div className="form_row full_width">
                    <label>Message
                        <textarea name="message" value={formData.message} onChange={handleChange} required/>
                    </label>
                </div>
                   <button type="submit">Envoyer</button>

            </form>
        </div>
    );
}

export default ContactForm;

