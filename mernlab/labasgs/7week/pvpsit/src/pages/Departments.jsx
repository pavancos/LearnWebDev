import "./Departments.css";

const Departments = () => {
  const departments = [
    {
      shortName: "CSE",
      fullName: "Computer Science & Engineering",
      hod: "Dr. A. Jayalakshmi",
      facultyCount: 25,
      seats: 120,
    },
    {
      shortName: "ECE",
      fullName: "Electronics & Communication Engineering",
      hod: "Dr. C. Subba Rao",
      facultyCount: 22,
      seats: 120,
    },
    {
      shortName: "EEE",
      fullName: "Electrical & Electronics Engineering",
      hod: "Dr. Ch. Padmanabha Raju",
      facultyCount: 20,
      seats: 60,
    },
    {
      shortName: "ME",
      fullName: "Mechanical Engineering",
      hod: "Dr. B. Raghu Kumar",
      facultyCount: 18,
      seats: 60,
    },
    {
      shortName: "CE",
      fullName: "Civil Engineering",
      hod: "Dr. V. Jagadish",
      facultyCount: 16,
      seats: 60,
    },
    {
      shortName: "IT",
      fullName: "Information Technology",
      hod: "Dr. B.V. Subba Rao",
      facultyCount: 15,
      seats: 60,
    },
    {
        shortName: "CS with AI & DS",
        fullName: "Artificial Intelligence & Data Science",
        hod: "Dr. Janakiramaiah",
        facultyCount: 12,
        seats: 60
    },
    {
        shortName: "CS with AI & ML",
        fullName: "Artificial Intelligence & Machine Learning",
        hod: "Dr. Janakiramaiah",
        facultyCount: 12,
        seats: 60
    }
  ];

  return (
    <div className="departments">
      <h2>Our Departments</h2>
      <div className="department-cards">
        {departments.map((dept, index) => (
          <div className="card" key={index}>
            <h3>{dept.shortName}</h3>
            <p><strong>Full Name:</strong> {dept.fullName}</p>
            <p><strong>HOD:</strong> {dept.hod}</p>
            <p><strong>Faculty Members:</strong> {dept.facultyCount}</p>
            <p><strong>Seats Available:</strong> {dept.seats}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;