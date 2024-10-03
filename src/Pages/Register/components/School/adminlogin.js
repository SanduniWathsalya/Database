import React from 'react';
import './adminlogin.css';
import LoginForm from './LoginFormAdmin';


function AdminLogin() {
  return (
    <div className="adminlogin">
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

export default AdminLogin;