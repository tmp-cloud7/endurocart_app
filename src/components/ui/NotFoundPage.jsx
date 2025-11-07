import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div 
      className={`d-flex flex-column justify-content-center align-items-center vh-100 text-center ${styles.wrapper}`}
      style={{ backgroundColor: "#EF4444" }}
    >
      <h1 
        className={`fw-bold display-1 mb-3 ${styles.code}`} 
        style={{ color: "#FBBF24" }}
      >
        404
      </h1>

      <h2 
        className="fw-semibold mb-2" 
        style={{ color: "#FEF2F2" }}
      >
        Oops! Page Not Found
      </h2>

      <p 
        className="mb-4 fw-medium" 
        style={{ color: "#FEE2E2", maxWidth: "420px" }}
      >
        The page you’re looking for doesn’t exist or might have been moved.  
      </p>

      <Link 
        to="/" 
        className={`btn btn-lg rounded-pill px-4 py-2 fw-semibold ${styles.homeBtn}`}
        style={{ 
          backgroundColor: "#FBBF24", 
          color: "#1F2937", 
          border: "none", 
          transition: "all 0.3s ease"
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#FACC15";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#FBBF24";
          e.target.style.transform = "scale(1)";
        }}
      >
        <FaHome className="me-2" />
        Back to Home
      </Link>
    </div>

  );
};

export default NotFoundPage;
