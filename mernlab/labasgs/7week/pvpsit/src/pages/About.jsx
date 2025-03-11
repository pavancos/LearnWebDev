import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About PVPSIT</h1>

      <section className="section">
        <h2>Vision</h2>
        <p>
          To provide a rich ambiance for Academic and Professional Excellence, Research, Employability skills, Entrepreneurship, and Social responsibility.
        </p>
      </section>

      <section className="section">
        <h2>Mission</h2>
        <p>
          To empower students with technical knowledge, awareness of up-to-date technical trends, inclination for research in areas of human needs, capacity building for employment/entrepreneurship, and application of technology for societal needs.
        </p>
      </section>

      <section className="section">
        <h2>Quality Policy</h2>
        <p>At PVPSIT, we commit ourselves to offering quality professional education in Engineering and Management by adhering to applicable statutory and regulatory requirements and through continuous improvement in the quality of our services by:</p>
        <ul>
          <li>Regular upgradation of knowledge and skills of faculty</li>
          <li>Improving teaching methods and strategies</li>
          <li>Providing state-of-the-art infrastructure</li>
          <li>Recruiting competent faculty and maintaining the prescribed teacher-student ratio</li>
          <li>Improving the employability of students</li>
          <li>Enhanced collaboration with industry and institutions of national and international repute</li>
        </ul>
      </section>

      <section className="section">
        <h2>Core Values</h2>
        <ul>
          <li><strong>Value-Based Education:</strong> Emphasizing ethical and moral values in the educational process.</li>
          <li><strong>Zeal for Innovation:</strong> Encouraging creativity and novel approaches in teaching, learning, and research.</li>
          <li><strong>Social Responsibility:</strong> Instilling a sense of duty towards societal well-being and development.</li>
          <li><strong>Sustenance of Quality:</strong> Maintaining and enhancing the standards of education and infrastructure.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
