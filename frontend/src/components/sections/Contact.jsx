function Contact() {
  return (

    <section id="contact" className="bg-light text-dark">
      <div className="container">
        <h2 className="text-center mb-4">Start Your Transformation</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            {<form>
              <input className="form-control mb-3" placeholder="Name" />
              <input className="form-control mb-3" placeholder="Email" />
              <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>

              <button className="btn btn-danger w-100">
                Send Message
              </button>
            </form>
            }
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
