import React from 'react';
import './teacherlogin.css';
import LoginForm from './LoginFormTeacher';

function Teacherlogin() {
  return (
    <div className="teacherlogin">
      <main className="mainContent">
        <div className="contentWrapper">
          <LoginForm />
          <div className="loginImage">
         
          </div>
        </div>
      </main>
    </div>
  );
}

export default Teacherlogin;