import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xhpium9", // ✅ Tu Service ID
        "template_2lncmxf", // ✅ Tu Template ID
        form.current,
        "lF3ZpGePxGBVp1elu", // ✅ Tu Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Error sending: " + error.text);
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto text-center animate-fadeInUp">
      <h2 className="text-3xl font-bold text-accent mb-6">Contact</h2>
      <p className="text-gray-300 mb-8">
        Would you like to work with me or do you have any questions? Let's talk!
        🚀
      </p>

      <div className="mb-10">
        <a
          href="/may-donoban.pdf"
          download="May-Donoban-CV.pdf"
          className="bg-gradient-to-r from-gradientStart to-gradientEnd 
          py-3 px-6 rounded-lg font-semibold hover:opacity-90 hover:scale-105 
          transition-transform shadow-lg cursor-pointer inline-flex items-center 
          justify-center gap-2 text-white"
        >
          📄 Download CV
        </a>
      </div>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          required
          className="p-3 rounded-lg bg-secondary text-white 
          focus:outline-none focus:ring-2 focus:ring-gradientStart shadow-md"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          className="p-3 rounded-lg bg-secondary text-white 
          focus:outline-none focus:ring-2 focus:ring-gradientStart shadow-md"
        />
        <textarea
          name="message"
          placeholder="Write your message..."
          rows="5"
          required
          className="p-3 rounded-lg bg-secondary text-white 
          focus:outline-none focus:ring-2 focus:ring-gradientStart shadow-md"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`bg-gradient-to-r from-gradientStart to-gradientEnd 
          py-3 px-6 rounded-lg font-semibold transition shadow-lg cursor-pointer
          ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
