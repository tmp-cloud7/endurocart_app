import { useState } from 'react'
import styles from './PaymentSection.module.css'
import api from '../../api'

const PaymentSection = () => {

    const cart_code = localStorage.getItem("cart_code")
    const [loading, setLoading] = useState(false)

    function makePayment(){
        api.post("initiate_payment/", {cart_code})
        .then(res => {
            console.log(res.data)
            window.location.href = res.data.data.link
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    function paypalPayment(){
        setLoading(true)
        api.post("initiate_payment_paypal/", {cart_code})
        .then(res => {
            console.log(res.data)
            setLoading(false)
            if(res.data.approval_url){
                 window.location.href = res.data.approval_url
            }
        })
        .catch(err => {
            console.error('Error initiating payment:', err.message);
            setLoading(false)
        })
    }



  return (
    <div className="col-md-4">
        <div
            className={`card shadow-sm border-0 ${styles.card}`}
            style={{
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#fff",
            }}
        >
            <div
            className="card-header border-0"
            style={{
                backgroundColor: "#EF4444",
                color: "#FEF2F2",
                padding: "1rem 1.5rem",
                fontWeight: "600",
            }}
            >
            <h5 className="mb-0">Payment Options</h5>
            </div>

            <div className="card-body p-4">
            <button
                className={`btn w-100 mb-3 fw-semibold`}
                style={{
                backgroundColor: "#3B7BBF",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "0.75rem",
                transition: "all 0.3s ease",
                }}
                onClick={paypalPayment}
                id="paypal-button"
            >
                <i className="bi bi-paypal me-2"></i>Pay with PayPal
            </button>

            <button
                className="btn w-100 fw-semibold"
                style={{
                background: "linear-gradient(135deg, #FBBF24, #F59E0B)",
                color: "#1F2937",
                border: "none",
                borderRadius: "8px",
                padding: "0.75rem",
                boxShadow: "0 4px 12px rgba(251, 191, 36, 0.4)",
                transition: "all 0.3s ease",
                }}
                onClick={makePayment}
                id="flutterwave-button"
            >
                <i className="bi bi-credit-card me-2"></i>Pay with Flutterwave
            </button>
            </div>
        </div>
        </div>

  )
}

export default PaymentSection
