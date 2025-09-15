function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center animate-fadeIn">
      <h2 className="text-4xl font-bold mb-10 text-[var(--color-accent)]">
        About Me
      </h2>
      <div className="bg-[#243045] rounded-2xl border border-secondary shadow-lg p-10">
        <p className="text-gray-300 leading-relaxed text-lg">
          I am <span className="font-semibold">a Fullstack Web Developer</span>{" "}
          with experience in creating modern, dynamic, and scalable
          applications. I am proficient in technologies such as{" "}
          <span className="font-semibold">
            React, Node.js, Express y MongoDB
          </span>
          , with a primary focus on development{" "}
          <span className="font-semibold">Front-End</span>, complemented by
          solid knowledge in <span className="font-semibold">Back-End</span>.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mt-6">
          My proposal is clear:{" "}
          <span className="font-semibold">
            combining design, usability and technology
          </span>{" "}
          to optimise the user experience. I work with{" "}
          <span className="font-semibold">Git, GitHub and Figma</span>, Leading
          and collaborating in multidisciplinary teams with a strategic and
          results-oriented vision.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mt-6">
          I'm passionate about{" "}
          <span className="font-semibold">continuous learning</span>, I seek to
          add value to innovative and scalable projects that have a real impact
          on users and the business.
        </p>
      </div>
    </section>
  );
}

export default About;
