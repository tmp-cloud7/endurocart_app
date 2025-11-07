import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";

const Footer = () => {
  return (
    <footer
      className="py-4"
      style={{ backgroundColor: "#EF4444", color: "#FEF2F2" }}
    >
      <div className="container text-center text-md-start">
        <div className="row align-items-start">

          {/* Brand Section */}
          <div className="col-md-4 mb-4 mb-md-0 position-relative text-center text-md-start">
            <div className="d-inline-block position-relative">
              <GiWeightLiftingUp
                style={{
                  transform: "translateX(-50%) scaleX(-1)",
                  color: "#FBBF24", // golden accent for visibility on red
                  fontSize: "3.6rem",
                  opacity: 0.9,
                  position: "absolute",
                  top: "-0.4rem",
                  left: "50%",
                  zIndex: 0,
                }}
              />
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  color: "#FEF2F2",
                  fontSize: "1.9rem",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                Enduro<span style={{ color: "#FBBF24" }}>Cart</span>
              </span>
            </div>

            <p className="small mb-0 mt-3" style={{ color: "#FEE2E2" }}>
              Your trusted source for premium gym equipment and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h6
              className="fw-semibold text-uppercase mb-3"
              style={{ color: "#FBBF24" }}
            >
              Quick Links
            </h6>
            <ul className="list-unstyled">
              {["Home", "About", "Shop", "Contact"].map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    className="text-decoration-none fw-medium"
                    href="#"
                    style={{ color: "#FEF2F2" }}
                    onMouseOver={(e) => (e.target.style.color = "#FBBF24")}
                    onMouseOut={(e) => (e.target.style.color = "#FEF2F2")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 text-center text-md-end">
            <h6
              className="fw-semibold text-uppercase mb-3"
              style={{ color: "#FBBF24" }}
            >
              Follow Us
            </h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5"
                style={{ color: "#FEF2F2" }}
                onMouseOver={(e) => (e.target.style.color = "#FBBF24")}
                onMouseOut={(e) => (e.target.style.color = "#FEF2F2")}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5"
                style={{ color: "#FEF2F2" }}
                onMouseOver={(e) => (e.target.style.color = "#FBBF24")}
                onMouseOut={(e) => (e.target.style.color = "#FEF2F2")}
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5"
                style={{ color: "#FEF2F2" }}
                onMouseOver={(e) => (e.target.style.color = "#FBBF24")}
                onMouseOut={(e) => (e.target.style.color = "#FEF2F2")}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#F87171" }} className="my-4" />
        <p className="text-center small mb-0" style={{ color: "#FEE2E2" }}>
          &copy; {new Date().getFullYear()} EnduroCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
