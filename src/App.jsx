import './App.css'
import Projects from './components/Projects/Projects.jsx'

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
            src="https://via.placeholder.com/150" 
            alt="Foto de Perfil" 
            className="profile-pic"
          />
          <h1>Olá, eu sou o Lucas!</h1>
          <p className="bio">
            Desenvolvedor em formação apaixonado por tecnologia e RPG. 
            Aqui você encontrará meus projetos desenvolvidos durante o curso, 
            incluindo aplicações web interativas e soluções criativas.
          </p>
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
            <a href="#" className="btn">LinkedIn</a>
            <a href="#" className="btn">GitHub</a>
            <a href="mailto:email@exemplo.com" className="btn">Email</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Lucas. Desenvolvido com React.</p>
      </footer>
    </div>
  )
}