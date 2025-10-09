import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-md z-50 px-6 flex justify-between items-center border-b border-[var(--color-accent)]">
      {/* Logo */}
      <Link
        to="hero"
        smooth={true}
        duration={500}
        onClick={closeMenu}
        className="cursor-pointer flex items-center justify-center"
      >
        <img
          src="assets/Logo-May.png"
          alt="Logo May Donoban"
          className="h-auto w-28 md:w-32 object-contain hover:scale-110 transition-transform duration-300"
        />
      </Link>

      {/* Links - Desktop */}
      <ul className="hidden md:flex space-x-8 font-inter text-tertiary pr-6">
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[var(--color-accent)] transition-colors"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[var(--color-accent)] transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[var(--color-accent)] transition-colors"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[var(--color-accent)] transition-colors"
          >
            Contacts
          </Link>
        </li>
      </ul>

      {/* Botón Hamburguesa */}
      <button
        className="md:hidden text-tertiary focus:outline-none cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </button>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-primary/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-tertiary font-inter text-lg animate-slide-down">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer hover:text-[var(--color-accent)]"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer hover:text-[var(--color-accent)]"
          >
            Projects
          </Link>
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer hover:text-[var(--color-accent)]"
          >
            About me
          </Link>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer hover:text-[var(--color-accent)]"
          >
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
