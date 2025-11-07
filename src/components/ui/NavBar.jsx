import { FaCartShopping } from "react-icons/fa6"
import { GiWeightLiftingUp } from "react-icons/gi";
import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import NavBarLink from "./NavBarLink"

const NavBar = ({numCartItems}) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
      <div className="container">
       <Link
          to="/"
          className="navbar-brand fw-bold position-relative text-decoration-none"
          style={{
            display: "inline-block",
            position: "relative",
          }}
        >
          {/* Icon in the background */}
        <GiWeightLiftingUp
          style={{
            transform: "translateX(-50%) scaleX(-1)",
            color: "#EF4444", // strong red accent
            fontSize: "3.6rem",
            opacity: 0.85,
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
            color: "#1F2937",
            fontSize: "1.9rem",
            fontWeight: "700",
            letterSpacing: "0.5px",
          }}
        >
          Enduro<span style={{ color: "#EF4444" }}>Cart</span>
        </span>

        </Link>



        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <NavBarLink />
          <Link
            to="/cart"
            className={`btn btn-dark ms-3 rounded-pill position-relative ${styles.responsiveCart}`}
          >
            <FaCartShopping />
            {numCartItems == 0 || <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
              style={{
                fontSize: "0.85rem",
                padding: "0.5em 0.65em",
                backgroundColor: "#EF4444",
              }}
            >
              {numCartItems}
            </span>}
           
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
