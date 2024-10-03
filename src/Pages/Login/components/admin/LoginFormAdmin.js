import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function LoginFormAdmin() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        axios
            .post('http://localhost:8081/adminlogin', values)
            .then((res) => {
                navigate('/home'); // Replace '/home' with your home page route
            })
            .catch((err) => {
                if (err.response && err.response.status === 400) {
                    alert('Incorrect email or password');
                } else {
                    console.log(err);
                }
            });
    }
};

  return (
    <section className="loginFormSection2">
      <h2>Admin LOGIN</h2>
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="inputGroup2">
          <label htmlFor="email" className="inputLabel2">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
            className="inputField2"
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>

        <div className="inputGroup2">
          <label htmlFor="password" className="inputLabel2">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleInput}
            className="inputField2"
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>

        <div className="rememberMe2">
          <input type="checkbox" id="rememberMe" className="checkbox2" />
          <label htmlFor="rememberMe" className="checkboxLabel2">REMEMBER ME</label>
        </div>
        <button type="submit" className="signInButton2">
        <Link to="/admindashboard">SIGN IN</Link> </button>
        <p>If you do not have an account</p>
        <button type='button' className="createButton">
          <Link to="/adminsignup">Create an account</Link>
        </button>
      </form>
    </section>
  );
}

export default LoginFormAdmin;
