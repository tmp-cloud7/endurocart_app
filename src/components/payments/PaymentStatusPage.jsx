import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import api from "../../api";


function PaymentStatusPage({setNumberCartItems}) {

  const [statusMessage, setStatusMessage] = useState('Verifying your payment');
  const [statusSubMessage, setStatusSubMessage] = useState('Wait a moment, your payment is being verified!');
  const location = useLocation();


  useEffect(function(){
    const queryParams = new URLSearchParams(location.search);
    const paymentId = queryParams.get('paymentId')
    const payId = queryParams.get('PayerID')
    const ref = queryParams.get('ref')

     if(paymentId && payId && ref) {
      api.post(`paypal_payment_callback/?paymentId=${paymentId}&PayerID=${payId}&ref=${ref}`)
      .then(res => {
          setStatusMessage(res.data.message)
          setStatusSubMessage(res.data.subMessage)
          localStorage.removeItem('cart_code')
          setNumberCartItems(0)
      })

      .catch(err => console.log(err.message)) 
     }
  },[])

  useEffect(function(){

    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status')
    const txRef = queryParams.get('tx_ref')
    const transactionId = queryParams.get('transaction_id')

    if(status && txRef && transactionId){
      api.post(`payment_callback/?status=${status}&tx_ref=${txRef}&transaction_id=${transactionId}`)
      .then(res => {
          setStatusMessage(res.data.message)
          setStatusSubMessage(res.data.subMessage)
          localStorage.removeItem('cart_code')
          setNumberCartItems(0)
      })

      .catch(err => console.log(err.message)) 
    }
  },[])

  return (
   <header
      className="py-5"
      style={{
        background: "linear-gradient(90deg, #EF4444 0%, #DC2626 100%)",
        color: "#FEF2F2",
      }}
    >
  <div className="container px-4 px-lg-5 my-5">
    <div className="text-center">
        <h2 className="display-4 fw-bold mb-3" style={{ letterSpacing: "1px" }}>
          {statusMessage}
        </h2>
        <p className="lead fw-normal mb-4" style={{ color: "#FFE4E6" }}>
          {statusSubMessage}
        </p>
        <div>
          <Link
            to="/profile"
            className="btn btn-lg rounded-pill fw-semibold px-4 py-2 mx-2"
            style={{
              backgroundColor: "#FBBF24",
              color: "#1F2937",
              border: "none",
              boxShadow: "0 4px 10px rgba(251, 191, 36, 0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FACC15")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#FBBF24")
            }
          >
            View Order Details
          </Link>
          <Link
            to="/"
            className="btn btn-lg rounded-pill fw-semibold px-4 py-2 mx-2"
            style={{
              backgroundColor: "#FEF2F2",
              color: "#B91C1C",
              border: "2px solid #FBBF24",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FBBF24";
              e.currentTarget.style.color = "#1F2937";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FEF2F2";
              e.currentTarget.style.color = "#B91C1C";
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
</header>

  )
}

export default PaymentStatusPage
