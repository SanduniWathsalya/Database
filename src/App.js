import './App.css';
import Home from './Pages/Home/App';
import About from './Pages/AboutUs/App';
import Login from './Pages/Login/App';
import WelcomePage from './Pages/Login/components/WelcomePage';
import LoginFormAdmin from './Pages/Login/components/admin/adminlogin';
import Signup from  './Pages/Login/components/admin/adminsignup';
import LoginFormTeacher from './Pages/Login/components/teacher/teacherlogin';
import LoginFormStudent from './Pages/Login/components/student/studentlogin';
import AdminDashboard from './Pages/Login/components/admin/admindashboard';


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Pages/Home/components/Header';
import Footer from './Pages/Home/components/Footer';



function App() {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Loginpage" element={<WelcomePage/>} />
        <Route path="/adminlogin" element={<LoginFormAdmin/>} />
        <Route path="/adminsignup" element={<Signup/>} />
        <Route path="/teacherlogin" element={<LoginFormTeacher/>} />
        <Route path="/studentlogin" element={<LoginFormStudent />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

       
        
      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
