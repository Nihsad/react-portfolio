import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/Nihsad" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="www.linkedin.com/in/morgan-carmichael-a4b420213" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        {/* Add additional social links as needed */}
      </div>
      <p>&copy; 2024 Morgan Carmichael. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
