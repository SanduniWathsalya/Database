import React from 'react';
import './teacherlogin.css';
import { Link } from 'react-router-dom';

function LoginFormTeacher() {
  return (
    <section className= "loginFormSection">
      <h2>TEACHER LOGIN</h2>

      <form className="loginForm">
        <div className="inputGroup">
        <label htmlFor="teacherId" className="inputLabel">Teacher Id</label>
        <input type="text" id="teacherId" className="inputField" />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="inputLabel">Password</label>
          <input type="password" id="password" className="inputField" />
        </div>
        <div className="rememberMe">
          <input type="checkbox" id="rememberMe" className="checkbox" />
          <label htmlFor="rememberMe" className="checkboxLabel">REMEMBER ME</label>
        </div>
       <button type="submit" className="signInButton">
       <Link to="/signin">SIGN IN</Link>
        </button>
      </form>
    </section>
  );
}

export default LoginFormTeacher;