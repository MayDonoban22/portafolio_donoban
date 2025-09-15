import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-28 md:pt-32 gap-16"
    >
      <div className="max-w-3xl text-center md:text-left bg-[#243045] border border-[var(--color-secondary)] shadow-lg rounded-2xl p-10">
        <h1 className="text-5xl font-bold font-inter mb-6">
          Hello! I am{" "}
          <span className="text-[var(--color-accent)]">May Donoban</span>.
        </h1>

        <h2 className="text-xl text-[var(--color-gradientStart)] font-semibold mb-6">
          From the industrial world to the IT world. Creating solutions with
          vision, strategy and technology.
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I am <span className="font-semibold">Industrial Engineer</span> by
          profession and currently work as{" "}
          <span className="font-semibold text-accent">Fullstack Developer</span>{" "}
          with more than{" "}
          <span className="font-semibold text-gradientEnd">
            3 years of experience
          </span>{" "}
          in the development of modern and scalable web applications.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          My career in the corporate world allowed me to understand how
          businesses use data and technology to grow. Today, I apply that
          strategic vision to the world of software, building solutions that
          directly impact users and businesses.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          My proposal is clear: to unite.{" "}
          <span className="font-semibold">technical capability</span> with{" "}
          <span className="font-semibold">business vision</span> to transform
          needs into digital products that generate real value.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-10 py-4 bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-xl font-semibold shadow-lg cursor-pointer hover:scale-105 transition-transform text-center"
          >
            View my projects
          </Link>

          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className="px-10 py-4 border-2 border-accent text-accent rounded-xl font-semibold cursor-pointer hover:bg-accent/20 hover:text-white  hover:scale-105 transition-all text-center"
          >
            Contact me
          </Link>
        </div>
      </div>
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0 ml-6 md:ml-16">
        <img
          src="assets/images/profile.jpeg"
          alt="May Donoban photo"
          className="w-full h-full rounded-full border-4 border-accent object-cover shadow-xl"
        />
        <span className="absolute inset-0 rounded-full border-4 border-accent animate-pulse opacity-40"></span>
      </div>
    </section>
  );
}

export default Hero;
