import React from 'react'

const Header = () => {
  return (
    <header className='py-5' style={{ backgroundColor: "#EF4444" }}> 
        <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center' style={{ color: "#1F2937" }}>
            <h1 className='display-4 fw-bold text-light'>
              Build Strength. Elevate Performance.
            </h1>
            <p className='lead fw-normal mb-4' style={{ color: "#FEE2E2" }}>
              Gear up with premium gym equipment built for results.
            </p>
            <a 
              href="#shop" 
              className='btn btn-lg rounded-pill px-4 py-2' 
              style={{ 
                backgroundColor: "#FBBF24", 
                color: "#1F2937", 
                border: "none",
                fontWeight: "600"
              }}
            >
              Shop Gear
            </a>
          </div>
        </div>      
      </header>

  )
}

export default Header
