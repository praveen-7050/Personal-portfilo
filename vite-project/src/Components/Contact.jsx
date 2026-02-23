import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/Styles/contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const serviceId = "service_your_service_id"; 
    const templateId = "template_your_template_id"; 
    const publicKey = "your_public_key"; 

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      to_email: "praveen.n7050@gmail.com",
      message: form.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setSubmitted(true);
        setLoading(false);
        setForm({ name: "", email: "", message: "" }); 
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setLoading(false);
        const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
        const mailtoLink = `mailto:praveen.n7050@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
        alert("Email client opened with your message. If it doesn't work, please email directly to praveen.n7050@gmail.com");
      });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="contact-title text-center mb-3">Let’s Connect togther </h2>

        {submitted && <div className="alert alert-success text-center mb-4">Message sent successfully! I’ll hit you back soon. 🎉</div>}

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <form className="contact-form p-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className={`form-control input-field ${errors.name ? "is-invalid" : ""}`} placeholder="Enter your name" name="name" value={form.name} onChange={handleChange} />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" className={`form-control input-field ${errors.email ? "is-invalid" : ""}`} placeholder="Enter your email" name="email" value={form.email} onChange={handleChange} />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className={`form-control input-field ${errors.message ? "is-invalid" : ""}`} rows="4" placeholder="Tell me something…" name="message" value={form.message} onChange={handleChange} />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary contact-btn w-100 mb-3" disabled={loading}>
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>

              <div className="text-center">
                <small className="text-muted">
                  Or email directly: <a href="mailto:praveen.n7050@gmail.com" className="text-decoration-none">praveen.n7050@gmail.com</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
