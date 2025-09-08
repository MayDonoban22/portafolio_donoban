function Skills() {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
  ];

  const colors = [
    "from-[var(--color-gradientStart)] to-[var(--color-gradientEnd)]", // azul → verde
    "from-pink-500 to-purple-500",
    "from-yellow-400 to-orange-500",
    "from-teal-400 to-cyan-500",
  ];

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto text-center animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-10 text-accent">Mis Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
              bg-[#243045]  /* un poco más claro que el background */
              rounded-xl 
              p-6 
              shadow-md 
              transform 
              transition-all 
              duration-300 
              hover:scale-110 
              hover:shadow-[0_0_20px_var(--color-accent)] 
              animate-fadeInUp
              relative
              overflow-hidden
              border border-[var(--color-secondary)] hover:border-[var(--color-accent)]
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Gradiente en hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${
                colors[index % colors.length]
              } opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl`}
            ></div>

            <p className="relative text-lg font-semibold z-10">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
