import { useState } from 'react'
import './RegisterPage.module.css'
import api from '../../api'
import Error from '../ui/Error'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
    city: "",
    state: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Regex 
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
  const nameRegex = /^[A-Za-z\s]+$/
  const phoneRegex = /^\+?\d{10,15}$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function validateForm() {
    if (!usernameRegex.test(formData.username))
      return "Username must be 3–20 characters and can include letters, numbers, and underscores."

    if (formData.first_name && !nameRegex.test(formData.first_name))
      return "First name should contain only letters."

    if (formData.last_name && !nameRegex.test(formData.last_name))
      return "Last name should contain only letters."

    if (formData.phone && !phoneRegex.test(formData.phone))
      return "Phone number must be 10–15 digits (optional + sign)."

    if (!passwordRegex.test(formData.password))
      return "Password must be at least 8 characters, include upper & lowercase letters, a number, and a special character."

    if (formData.password !== formData.confirm_password)
      return "Passwords do not match."

    return null
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setSuccess("")

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    const { confirm_password, ...dataToSend } = formData

    api.post('register_user/', dataToSend)
      .then(res => {
        console.log(res.data)
        setSuccess("Registration successful! Redirecting to login...")
        setLoading(false)
        setFormData({
          username: "",
          email: "",
          password: "",
          confirm_password: "",
          first_name: "",
          last_name: "",
          address: "",
          phone: "",
          city: "",
          state: ""
        })
        setTimeout(() => navigate('/login'), 2000)
      })
      .catch(err => {
        console.error(err.response?.data || err.message)
        setError(err.response?.data?.error || "Registration failed. Please try again.")
        setLoading(false)
      })
  }

  return (
    <div className='login-container my-5'>
      <div className='login-card shadow'>
        {error && <Error error={error} />}
        {success && <p className="alert alert-success text-center">{success}</p>}

        <h2 className='login-title'>Create an Account</h2>
        <p className='login-subtitle'>Join the EnduroCart Community — Built for Lifters, by Lifters.</p>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter username'
              required
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter email'
              required
            />
          </div>

          <div className='row'>
            <div className='col-md-6 mb-3'>
              <label className='form-label'>First Name</label>
              <input
                type='text'
                name='first_name'
                value={formData.first_name}
                onChange={handleChange}
                className='form-control'
                placeholder='Enter first name'
              />
            </div>

            <div className='col-md-6 mb-3'>
              <label className='form-label'>Last Name</label>
              <input
                type='text'
                name='last_name'
                value={formData.last_name}
                onChange={handleChange}
                className='form-control'
                placeholder='Enter last name'
              />
            </div>
          </div>

          <div className='mb-3'>
            <label className='form-label'>Address</label>
            <input
              type='text'
              name='address'
              value={formData.address}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter address'
            />
          </div>

          <div className='row'>
            <div className='col-md-6 mb-3'>
              <label className='form-label'>Phone</label>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='form-control'
                placeholder='Enter phone'
              />
            </div>

            <div className='col-md-3 mb-3'>
              <label className='form-label'>City</label>
              <input
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                className='form-control'
                placeholder='City'
              />
            </div>

            <div className='col-md-3 mb-3'>
              <label className='form-label'>State</label>
              <input
                type='text'
                name='state'
                value={formData.state}
                onChange={handleChange}
                className='form-control'
                placeholder='State'
              />
            </div>
          </div>

          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='form-control'
              placeholder='Enter password'
              required
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Confirm Password</label>
            <input
              type='password'
              name='confirm_password'
              value={formData.confirm_password}
              onChange={handleChange}
              className='form-control'
              placeholder='Confirm password'
              required
            />
          </div>

          <button type='submit' className='btn btn-primary w-100' disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className='login-footer'>
          <p>Already have an account? <a href='/login'>Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
