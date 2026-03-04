import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [messageText, setMessageText] = useState("");

  const MAX_CHARS = 500;

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
      setMessageText("");

    } catch (error) {
      setStatus("Error sending message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input
          type="text"
          name="user_name"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="user_email"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="5"
          maxLength={MAX_CHARS}
          style={{ resize: "none" }}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Welcome! Write here your text (max 500 characters). 
Note: being this a sample website, the email will be redirected to the website developer."
          required
        />

        <div className="d-flex justify-content-between mt-1">
          <small className="text-muted">
            This is a sample website. The email will be redirected to the website developer.
          </small>
          <small className="text-muted">
            {messageText.length}/{MAX_CHARS}
          </small>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-danger w-100"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "Message sent successfully!" && (
        <div className="alert alert-success mt-3" role="alert">
          {status}
        </div>
      )}

      {status === "Error sending message" && (
        <div className="alert alert-danger mt-3" role="alert">
          {status}
        </div>
      )}

    </form>
  )
}

export default ContactForm;




{/* function Contact() {
  return (

    <section id="contact" className="bg-light text-dark" data-navbar="light">
      <div className="container">
        <h2 className="text-center mb-4">Start Your Transformation</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm p-4 border-1">
              {<form>
                <input className="form-control mb-3" placeholder="Name" />
                <input className="form-control mb-3" placeholder="Email" />
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  maxLength="500"
                  style={{ resize: "none" }}
                  placeholder="Welcome! Write here your text (max 500 characters). 
Note: being this a sample website, the email will be redirected to the website developer."
                  required
                ></textarea>

                <button className="btn btn-danger w-100">
                  Send Message
                </button>
              </form>
              }
            </div>
          </div>
        </div><div className="row mt-5">
          <div className="col-md-6">
            <h4>How to Reach Us</h4>
            <p>
              Near one of the most beautiful natural attractions in Italy:
              Grotte di Frasassi.
            </p>
            <p>
              Gola di Frasassi, 60040 Genga (AN), Italy
            </p>
          </div>

          <div className="col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps?q=Grotte+di+Frasassi&output=embed"
                allowFullScreen=""
                loading="lazy"
                title="Grotte di Frasassi Map"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form submitted");
  await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};


export default Contact;
 */}