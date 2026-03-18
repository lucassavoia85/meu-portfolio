import './App.css'
import Projects from "./components/Projects/Projects.jsx";
import fotoPerfil from "./assets/foto de perfil.jpg";


export default function App() {
  return (
    <div className="App">
      {/* Navegação */}
      <header>
        <nav className="container">
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Seção Sobre Mim */}
        <section id="sobre" className="container about-section">
          <img 
            src={fotoPerfil}
            alt="Foto de Perfil do Lucas" 
            className="profile-pic"
          />
          <h1>Olá, eu sou o Lucas!</h1>
          <p className="bio">
            Desenvolvedor em formação apaixonado por tecnologia e RPG. 
            Aqui você encontrará meus projetos desenvolvidos durante o curso, 
            incluindo aplicações web interativas e soluções criativas.
          </p>

          <h1>Certificados</h1>
          <h3>Certifcado Imersão da Alura</h3>
          <img 
            src="/certificados/CERTIFICADO-ALURA.jpg" 
            alt="Certificado Imersão da Alura" 
            className="certificate-img"
          />
        </section>

        {/* Componente de Projetos */}
        <Projects />

        {/* Seção Habilidades */}
        <section id="habilidades" className="skills-section">
          <div className="container">
            <h2>Habilidades</h2>
            <div className="skills-grid">
              {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Git'].map(skill => (
                <div key={skill} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contato" className="container contact-section">
          <h2>Contato</h2>
          <p>Gostou do meu trabalho? Entre em contato!</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/lucas-matheus-savoia-alves-a92a453aa" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
            <a href="https://github.com/lucassavoia85" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            <a href="mailto:lucas.savoia85@gmail.com" className="btn">Email</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Lucas. Desenvolvido com React.</p>
      </footer>
    </div>
  )
}