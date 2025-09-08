function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center animate-fadeIn">
      <h2 className="text-4xl font-bold mb-10 text-[var(--color-accent)]">
        Sobre mí
      </h2>
      <div className="bg-[#243045] rounded-2xl border border-secondary shadow-lg p-10">
        <p className="text-gray-300 leading-relaxed text-lg">
          Soy <span className="font-semibold">Desarrollador Web Fullstack</span>{" "}
          con experiencia en la creación de aplicaciones modernas, dinámicas y
          escalables. Manejo tecnologías como{" "}
          <span className="font-semibold">
            React, Node.js, Express y MongoDB
          </span>
          , con un enfoque principal en el desarrollo{" "}
          <span className="font-semibold">Front-End</span>, complementado por
          sólidos conocimientos en{" "}
          <span className="font-semibold">Back-End</span>.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mt-6">
          Mi propuesta es clara:{" "}
          <span className="font-semibold">
            unir diseño, usabilidad y tecnología
          </span>{" "}
          para optimizar la experiencia del usuario. Trabajo con{" "}
          <span className="font-semibold">Git, GitHub y Figma</span>, liderando
          y colaborando en equipos multidisciplinarios con una visión
          estratégica y orientada a resultados.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mt-6">
          Apasionado por el{" "}
          <span className="font-semibold">aprendizaje continuo</span>, busco
          aportar valor en proyectos innovadores y escalables que generen
          impacto real en los usuarios y en el negocio.
        </p>
      </div>
    </section>
  );
}

export default About;
