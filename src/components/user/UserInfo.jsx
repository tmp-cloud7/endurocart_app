import styles from './UserInfo.module.css'
import Avatar from '../../assets/Avatar.jpg'

const UserInfo = ({userInfo}) => {
  return (
    <div className="row mb-4">
        <div 
            className={`col-md-3 py-4 card text-center shadow-sm border-0 ${styles.textCenter}`} 
            style={{ 
            backgroundColor: "#FEF2F2", 
            borderRadius: "12px" 
            }}
        >
            <img
            src={Avatar}
            alt="User Profile"
            className={`img-fluid rounded-circle mb-3 mx-auto ${styles.profileImage}`}
            style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                border: "4px solid #FBBF24",
                boxShadow: "0 4px 10px rgba(239, 68, 68, 0.3)"
            }}
            />
            <h4 style={{ color: "#1F2937", fontWeight: "600" }}>
            {`${userInfo.first_name} ${userInfo.last_name}`}
            </h4>
            <p style={{ color: "#6B7280", fontSize: "0.95rem" }}>{userInfo.email}</p>
            <button
            className="btn mt-2 px-4 py-2 fw-semibold rounded-pill"
            style={{
                background: "linear-gradient(135deg, #EF4444, #DC2626)",
                color: "#fff",
                border: "none",
                boxShadow: "0 3px 8px rgba(239, 68, 68, 0.4)",
                transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.background = "linear-gradient(135deg, #DC2626, #B91C1C)")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.background = "linear-gradient(135deg, #EF4444, #DC2626)")
            }
            >
            Edit Profile
            </button>
        </div>

        <div className="col-md-9">
            <div className="card border-0 shadow-sm" style={{ borderRadius: "12px" }}>
            <div
                className="card-header border-0"
                style={{
                background: "linear-gradient(90deg, #EF4444 0%, #F87171 100%)",
                color: "#FEF2F2",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px"
                }}
            >
                <h5 className="fw-semibold mb-0">Account Overview</h5>
            </div>
            <div className="card-body" style={{ backgroundColor: "#fff", color: "#1F2937" }}>
                <div className="row">
                <div className="col-md-6 mb-3">
                    <p><strong>Full Name: </strong>{`${userInfo.first_name} ${userInfo.last_name}`}</p>
                    <p><strong>Email: </strong>{userInfo.email}</p>
                    <p><strong>Phone: </strong>{userInfo.phone}</p>
                </div>
                <div className="col-md-6 mb-3">
                    <p><strong>Username: </strong>{userInfo.username}</p>
                    <p><strong>City: </strong>{userInfo.city}</p>
                    <p><strong>State: </strong>{userInfo.state}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

  )
}

export default UserInfo
