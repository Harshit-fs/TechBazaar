import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await axios.post(
      "https://techbazaar-1-e21b.onrender.com/user/register",
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }
    );

    console.log(res.data);

    if (res.data.success) {
      alert("Registration Successful");
    } else {
      alert(res.data.message);
    }

  } catch (error) {
    console.log(error);
    alert("Server Error");
  }
};

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
           required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
           required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
           required
        />

    
  <button type="submit">Register</button>


        <p className="auth-link">
  Already have an account?  <NavLink to="/login">Login</NavLink>
</p>
      </form>
      
    </div>
  );
}

export default Register;