import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [welcomeMessage, setWelcomeMessage] = useState(true);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setWelcomeMessage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    setWelcomeMessage(false);

    if (Object.keys(validationErrors).length === 0) {
      axios
          .post('http://localhost:8081/signup', values)
          .then((res) => {
              navigate('/adminlogin');
          })
          .catch((err) => {
              if (err.response && err.response.status === 400) {
                  alert('Email already registered');
              } else {
                  console.log(err);
              }
          });
  }
};

  return (
    <section className="loginFormSection4">
      <h2>Admin SIGNUP</h2>

      <form onSubmit={handleSubmit} className="signupForm">
        <div className="inputGroup4">
          <label htmlFor="fname" className="nameinputLabel">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="fname"
            onChange={handleInput}
            className="nameinputField"
          />
          {errors.fname && <span className="text-danger">{errors.fname}</span>}
        </div>
        <div className="inputGroup4">
          <label htmlFor="lname" className="nameinputLabel">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lname"
            onChange={handleInput}
            className="nameinputField"
          />
          {errors.lname && <span className="text-danger">{errors.lname}</span>}
        </div>
        <div className="inputGroup4">
          <label htmlFor="email" className="nameinputLabel">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
            className="nameinputField"
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="inputGroup4">
          <label htmlFor="password" className="nameinputLabel">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleInput}
            className="nameinputField"
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>

        <button type="submit" className="signupButton"> SIGN UP </button>

        {welcomeMessage && (
          <div className="welcome-message">You are welcome to our Admin panel. If you do not have an account, you can signup here and join us.</div>
        )}
      </form>
    </section>
  );
}

export default Signup;
