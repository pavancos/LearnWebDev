import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} PVPSIT, Vijayawada. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;