import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>

            <section className="section">
                <h2>College Address</h2>
                <p>
                    Prasad V. Potluri Siddhartha Institute of Technology (PVPSIT) <br />
                    Kanuru, Vijayawada, Andhra Pradesh - 520007, India
                </p>
            </section>
            <section className="section">
                <h2>Location Map</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.760498665577!2d80.69155787519054!3d16.487660584254147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb3d5f7810a9%3A0x4a6d6804b71db09!2sPrasad%20V.%20Potluri%20Siddhartha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1740997896077!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <section className="section">
                <h2>Contact Details</h2>
                <p><strong>Phone:</strong> +91 866-2581699, +91 866-2583032</p>
                <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@pvpsiddhartha.ac.in">info@pvpsiddhartha.ac.in</a>
                </p>
            </section>

            <section className="section">
                <h2>Office Hours</h2>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
            </section>

            <section className="section">
                <h2>Administrative Contacts</h2>
                <p><strong>Principal's Office:</strong> principal@pvpsiddhartha.ac.in</p>
                <p><strong>Admissions Office:</strong> admissions@pvpsiddhartha.ac.in</p>
                <p><strong>Placement Cell:</strong> placements@pvpsiddhartha.ac.in</p>
                <p><strong>Examinations Cell:</strong> exams@pvpsiddhartha.ac.in</p>
            </section>


        </div>
    );
};

export default Contact;
