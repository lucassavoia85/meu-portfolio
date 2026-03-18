import styles from './Projects.module.css';
import projects from "./projects.js";
export default function Projects() {
  return (
    <section id="projetos" className="container">
      <h2>Meus Projetos</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.card}>
            {project.imagem && (
              <img src={project.imagem} alt={`Preview do projeto ${project.title}`} className={styles.projectImage} />
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className={styles.techStack}>
              {project.tech.map((tech) => (
                <span key={tech} className={styles.tag}>{tech}</span>
              ))}
              
            </div>

            <div className={styles.links}>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Repositório
              </a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}