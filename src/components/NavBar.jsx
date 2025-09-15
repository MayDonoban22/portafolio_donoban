import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-md z-50 px-10 p-0 flex justify-between items-center">
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="cursor-pointer flex items-center justify-center "
      >
        <img
          src="assets/Logo-May.png"
          alt="Logo May Donoban"
          className="h-auto w-30 object-contain hover:scale-110 transition-transform duration-300"
        />
      </Link>

      <ul className="flex space-x-8 font-inter text-tertiary pr-10">
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[var(--color-accent)]"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[var(--color-accent)]"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="About-me"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[var(--color-accent)]"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[var(--color-accent)]"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
