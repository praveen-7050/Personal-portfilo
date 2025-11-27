import React, { useState } from "react";
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

    // fake submit delay
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" }); // reset form
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="contact-title text-center mb-3">Let’s Connect togther </h2>

        {submitted && <div className="alert alert-success text-center mb-4">Message sent successfully! I’ll hit you back soon. 🎉</div>}

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <form className="contact-form p-4" onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className={`form-control input-field ${errors.name ? "is-invalid" : ""}`} placeholder="Enter your name" name="name" value={form.name} onChange={handleChange} />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" className={`form-control input-field ${errors.email ? "is-invalid" : ""}`} placeholder="Enter your email" name="email" value={form.email} onChange={handleChange} />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {/* MESSAGE */}
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className={`form-control input-field ${errors.message ? "is-invalid" : ""}`} rows="4" placeholder="Tell me something…" name="message" value={form.message} onChange={handleChange} />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              {/* SUBMIT BUTTON */}
              <button type="submit" className="btn btn-primary contact-btn w-100" disabled={loading}>
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
