export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
//! Header Section
function Header() {
  return (
    <nav>
      <ul>
        <Tag label={"Home"} link={"#home"} />
        <Tag label={"About"} link={"#about"} />
        <Tag label={"Projects"} link={"#projects"} />
        <Tag label={"Contacts"} link={"#contacts"} />
      </ul>
    </nav>
  );
}
function Tag({ label, link }) {
  return (
    <li>
      <a href={link}> {label} </a>
    </li>
  );
}
//!Hero Section
function Hero() {
  return (
    <header id="home">
      <div className="profile-pic">
        <img
          src="Profile_Pic0.1.jpg"
          alt="Mohamed Salah"
          width="320"
          height="400"
        />
      </div>
      <h1>Mohamed Salah</h1>
      <p className="tagline">
        Web Developerr | HTML | CSS | JavaScript | React
      </p>
      <a href="#contact" className="cta-button">
        Get In Touch
      </a>
    </header>
  );
}
function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm an aspiring front-end web developer with a strong passion for
          building clean, responsive, and accessible websites. I've been fully
          committed to learning modern web technologies including HTML, CSS,
          JavaScript, and React. I enjoy turning ideas into interactive
          experiences and continuously strive to improve both my technical and
          design skills.
        </p>
        <p>
          My current focus is on mastering front-end development and building
          real-world projects that showcase my progress. I'm enthusiastic about
          creating user-friendly interfaces and writing maintainable code.
        </p>

        <div className="skills">
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS3</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Responsive Design</span>
          <span className="skill-tag">Git</span>
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src="mytodolist.png" alt="Project 1" width="200px" />
          </div>
          <div className="project-info">
            <h3>To-Do List</h3>
            <p>
              An interactive to-do list application with local storage to save
              tasks between sessions.
            </p>
            <div class="project-links">
              <a href="#" target="_blank">
                View Live
              </a>
              <a href="#" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="albiononline.png" alt="Project 2" width="240px" />
          </div>
          <div className="project-info">
            <h3>Albion Online Crafting Calculator</h3>
            <p>
              A simple crafting calculator that tells you how many materials u
              need to build a specefic item
            </p>
            <div className="project-links">
              <a href="#" target="_blank">
                View Live
              </a>
              <a href="#" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img
              src="leaguerandomizer.png"
              alt="Project 3"
              width="375px"
              height="200px"
            />
          </div>
          <div class="project-info">
            <h3>League of Legends Randomizer</h3>
            <p>
              An app that picks a random champion for you regarding the category
              you choose
            </p>
            <div className="project-links">
              <a href="#" target="_blank">
                View Live
              </a>
              <a href="#" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-info">
        <p>
          I'm currently looking for new opportunities to grow and enhance my
          skills. Feel free to reach out if you'd like to connect or discuss
          potential collaborations.
        </p>
        <p>Email: midosalah25552@gmail.com</p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/silver.crow.1804109/"
            target="_blank"
            rel="noopener noreferrer"
          >
            F
          </a>
          <a
            href="https://github.com/SilverCrow222"
            target="_blank"
            rel="noopener noreferrer"
          >
            G
          </a>
          <a
            href="https://www.facebook.com/silver.crow.1804109/"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Mohamed Salah. All rights reserved.</p>
    </footer>
  );
}
