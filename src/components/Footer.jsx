import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-center py-6 mt-10 animate-fadeIn">
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/maydonoban22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[var(--color-accent)]"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://linkedin.com/in/maydonoban"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[var(--color-accent)]"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:maydonoban22@gmail.com"
          className="text-gray-400 hover:text-[var(--color-accent)]"
        >
          <FaEnvelope size={22} />
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} May Donoban. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
