import { FaGithub } from "react-icons/fa";

function Projects() {
  const proyectos = [
    {
      titulo: "Web Project API Full",
      descripcion:
        "Full-stack application with JWT authentication and card management. Includes backend in Express/MongoDB and frontend in React.",
      link: "https://web-project-api-full-git-frontend-maydonoban22s-projects.vercel.app/",
    },
    {
      titulo: "Luz de Rubí",
      descripcion:
        "Web application in React and TailwindCSS for spiritual consultations, horoscopes, and appointment scheduling.",
      link: "https://rubiela-tarot.vercel.app/",
    },
    {
      titulo: "Homeland Project",
      descripcion:
        "Responsive website created with HTML, CSS, and JavaScript based on a brief in Figma. Deployed on GitHub Pages.",
      link: "https://maydonoban22.github.io/web_project_homeland/",
    },
  ];

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto animate-fadeIn">
      <h2 className="text-3xl font-bold text-center text-accent mb-10">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="bg-secondary rounded-xl p-6 shadow-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_var(--color-accent)]"
          >
            <h3 className="text-xl font-semibold mb-2">{proyecto.titulo}</h3>
            <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>
            <a
              href={proyecto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] font-medium hover:underline"
            >
              View project →
            </a>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://github.com/MayDonoban22"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gradientStart to-gradientEnd 
          text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:opacity-90 hover:scale-105 transition-transform"
        >
          <FaGithub className="text-2xl" />
          See more on GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
