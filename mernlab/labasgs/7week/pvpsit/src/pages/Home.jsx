import "./Home.css";

const Home = () => {
  const announcements = [
    "Internal BOS Meeting conducted at HOD room on 24/2/2025. ",
    "Admissions open for the academic year 2025-26. Apply now!",
    "Guest Lecture on Blockchain and Web3 by industry experts on 5/3/2025.",
    "Mid-term exams for all departments start from 10/3/2025.",
    "Campus placement drive by TCS, Infosys, and Wipro scheduled on 20/3/2025.",
    "National-level Hackathon 'InnovateX' registrations open till 15/3/2025.",
    "AICTE-approved new Research Lab inaugurated in the CSE Department on 28/2/2025.",
    "Faculty Development Program on Machine Learning from 25/2/2025 to 29/2/2025.",
  ];

  const events = [
    "Workshop on AI & ML held on 15/2/2025.",
    "Annual Sports Meet conducted on 10/1/2025.",
    "National Science Day celebrations with paper presentations on 28/2/2025.",
    "TechFest 'TechFusion 2025' successfully conducted on 20/2/2025.",
    "Seminar on 'Cybersecurity in 2025' by Dr. Ramesh Kumar on 12/2/2025.",
    "Blood Donation Camp organized by NSS on 8/2/2025.",
    "Alumni Meet 2025 was held on 5/2/2025, attended by 200+ alumni.",
    "Entrepreneurship Bootcamp for final-year students on 30/1/2025.",
    "Robotics Club organized a hands-on workshop on 3D printing on 25/1/2025.",
  ];

  return (
    <div className="home">
      <h2>Welcome to PVPSIT</h2>
      <p>Empowering students with knowledge and innovation.</p>

      <div className="announcements">
        <h3>Announcements</h3>
        <ul style={{backgroundColor: "#1e1e1e", borderRadius: "10px",}}>
          {announcements.map((announcement, index) => (
            <li key={index}>{announcement}</li>
          ))}
        </ul>
      </div>

      <div className="events">
        <h3>Recent Events</h3>
        <ul style={{backgroundColor: "#1e1e1e", borderRadius: "10px",}}>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;