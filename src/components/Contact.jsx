function Contact() {
  return (
    <div className="py-20 px-6 max-w-3xl mx-auto text-center animate-fadeInUp">
      <h2 className="text-3xl font-bold text-accent mb-6">Contacto</h2>
      <p className="text-gray-300 mb-8">
        ¿Quieres trabajar conmigo o tienes alguna consulta? ¡Hablemos! 🚀
      </p>

      <a
        href="/cv.pdf"
        download="May-Donoban-CV.pdf"
        className="bg-gradient-to-r from-gradientStart to-gradientEnd 
        py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition shadow-lg cursor-pointer 
        inline-flex items-center justify-center gap-2 text-white mb-4"
      >
        📄 Descargar Hoja de Vida
      </a>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="p-3 rounded-lg bg-secondary text-white focus:outline-none shadow-md"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="p-3 rounded-lg bg-secondary text-white focus:outline-none shadow-md"
        />
        <textarea
          placeholder="Escribe tu mensaje..."
          rows="5"
          className="p-3 rounded-lg bg-secondary text-white focus:outline-none shadow-md"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-gradientStart to-gradientEnd py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition shadow-lg cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
