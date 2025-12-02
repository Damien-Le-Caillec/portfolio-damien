import { useEffect, useRef } from "react";
import "../../styles/home/skills.css";

const SKILLS = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"},
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"},
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"},
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"},
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"},
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"},
];

function HomeSkills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const containerEl = containerRef.current;
        if (!containerEl) {
            return;
        }
        
        if (typeof IntersectionObserver === "undefined") {
            containerEl.querySelectorAll(".stamp").forEach((el) => {
                el.classList.add("is-visible");
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        target.classList.add("is-visible");
                        observer.unobserve(target);
                    }
                });
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
        );

        const stamps = containerEl.querySelectorAll(".stamp");
        stamps.forEach((el, idx) => {
            const randomRotation = (Math.random() - 0.5) * 12;
            (el as HTMLElement).style.setProperty("--delay", `${100 + idx * 90}ms`);
            (el as HTMLElement).style.setProperty("--rot", `${randomRotation}deg`);
            (el as HTMLElement).style.setProperty("--z", `${10 + Math.floor(Math.random() * 10)}`);
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills neoRetroSkills" aria-label="Compétences">
            <div className="skills_inner" ref={containerRef}>
                <h2 className="skills_title">Compétences</h2>
                <div className="skills_grid">
                    {SKILLS.map((skill) => (
                        <article className="stamp" key={skill.name} style={{ zIndex: "var(--z)" }}>
                            <div className="stamp_paper">
                                <span className="stamp_perforation" aria-hidden="true"></span>
                                <img src={skill.icon}/>
                                <span className="stamp_label">{skill.name}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeSkills;

