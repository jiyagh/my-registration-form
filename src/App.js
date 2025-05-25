import React, { useState } from 'react';

const App = () => {
  // State to track which page to show
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNumber: '',
    aadharNumber: ''
  });

  // State for errors
  const [errors, setErrors] = useState({});
  
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Check if form is valid
  const checkErrors = () => {
    const newErrors = {};

    // Check each field
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNumber) newErrors.panNumber = 'PAN number is required';
    if (!formData.aadharNumber) newErrors.aadharNumber = 'Aadhar number is required';

    // Check email format
    if (formData.email && !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }

    // Check password length
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = () => {
    const newErrors = checkErrors();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setShowSuccessPage(true);
    }
  };

  // Success page component
  if (showSuccessPage) {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ 
          backgroundColor: '#f0f9ff', 
          padding: '30px', 
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h1 style={{ color: '#059669', marginBottom: '20px' }}>
            Registration Successful! ✅
          </h1>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px',
            textAlign: 'left',
            marginTop: '20px'
          }}>
            <h3>Your Details:</h3>
            <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
            <p><strong>Username:</strong> {formData.username}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Country:</strong> {formData.country}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>PAN:</strong> {formData.panNumber}</p>
            <p><strong>Aadhar:</strong> {formData.aadharNumber}</p>
          </div>

          <button 
            onClick={() => {
              setShowSuccessPage(false);
              setFormData({
                firstName: '', lastName: '', username: '', email: '', password: '',
                phone: '', country: '', city: '', panNumber: '', aadharNumber: ''
              });
              setErrors({});
            }}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              marginTop: '20px',
              cursor: 'pointer'
            }}
          >
            Register Another Person
          </button>
        </div>
      </div>
    );
  }

  // Main form
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ 
        backgroundColor: '#f8fafc', 
        padding: '30px', 
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#1f2937', marginBottom: '30px' }}>
          Registration Form
        </h1>

        {/* First Name */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.firstName ? '2px solid red' : '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Enter first name"
          />
          {errors.firstName && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.lastName ? '2px solid red' : '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Enter last name"
          />
          {errors.lastName && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.lastName}
            </p>
          )}
        </div>

        {/* Username */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Username *
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.username ? '2px solid red' : '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Choose a username"
          />
          {errors.username && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.username}
            </p>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.email ? '2px solid red' : '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Enter email address"
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Password *
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: errors.password ? '2px solid red' : '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px'
              }}
              placeholder="Enter password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.password}
            </p>
          )}
        </div>

        {/* Phone */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.phone ? '2px solid red' : '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Enter phone number"
          />
          {errors.phone && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.phone}
            </p>
          )}
        </div>

        {/* Country */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Country *
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.country ? '2px solid red' : '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.country}
            </p>
          )}
        </div>

        {/* City */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            City *
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.city ? '2px solid red' : '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          >
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Toronto">Toronto</option>
          </select>
          {errors.city && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.city}
            </p>
          )}
        </div>

        {/* PAN Number */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            PAN Number *
          </label>
          <input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.panNumber ? '2px solid red' : '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Enter PAN number"
          />
          {errors.panNumber && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.panNumber}
            </p>
          )}
        </div>

        {/* Aadhar Number */}
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Aadhar Number *
          </label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.aadharNumber ? '2px solid red' : '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
            placeholder="Enter Aadhar number"
          />
          {errors.aadharNumber && (
            <p style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}>
              {errors.aadharNumber}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default App;