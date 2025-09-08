import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-28 md:pt-32 gap-16"
    >
      <div className="max-w-3xl text-center md:text-left bg-[#243045] border border-[var(--color-secondary)] shadow-lg rounded-2xl p-10">
        <h1 className="text-5xl font-bold font-inter mb-6">
          ¡Hola! Soy{" "}
          <span className="text-[var(--color-accent)]">May Donoban</span>.
        </h1>

        <h2 className="text-xl text-[var(--color-gradientStart)] font-semibold mb-6">
          Del mundo industrial al mundo IT. Creando soluciones con visión,
          estrategia y tecnología.
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Soy <span className="font-semibold">Ingeniero Industrial</span> de
          profesión y actualmente me desempeño como{" "}
          <span className="font-semibold text-accent">
            Desarrollador Fullstack
          </span>{" "}
          con más de{" "}
          <span className="font-semibold text-gradientEnd">
            3 años de experiencia
          </span>{" "}
          en el desarrollo de aplicaciones web modernas y escalables.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Mi trayectoria en el ámbito corporativo me permitió comprender cómo
          los negocios utilizan los datos y la tecnología para crecer. Hoy,
          aplico esa visión estratégica al mundo del software, construyendo
          soluciones que impactan directamente en usuarios y empresas.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Mi propuesta es clara: unir{" "}
          <span className="font-semibold">capacidad técnica</span> con{" "}
          <span className="font-semibold">visión de negocio</span> para
          transformar necesidades en productos digitales que generan valor real.
        </p>

        {/* Botones CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            to="proyectos"
            smooth={true}
            duration={500}
            className="px-10 py-4 bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-xl font-semibold shadow-lg cursor-pointer hover:scale-105 transition-transform text-center"
          >
            Ver mis proyectos
          </Link>

          <Link
            to="contacto"
            smooth={true}
            duration={500}
            className="px-10 py-4 border-2 border-accent text-accent rounded-xl font-semibold cursor-pointer hover:bg-accent/20 hover:text-white  hover:scale-105 transition-all text-center"
          >
            Contáctame
          </Link>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0 ml-6 md:ml-16">
        <img
          src="assets/images/profile.jpeg"
          alt="Foto de May Donoban"
          className="w-full h-full rounded-full border-4 border-accent object-cover shadow-xl"
        />
        <span className="absolute inset-0 rounded-full border-4 border-accent animate-pulse opacity-40"></span>
      </div>
    </section>
  );
}

export default Hero;
