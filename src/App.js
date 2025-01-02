import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './comp/Login';
import SignUp from './comp/SignUp';
import ForgotPassword from './comp/ForgotPassword';
import Wellcome from './comp/Wellcome';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
           {/* <Link className="navbar-brand" to={'/sign-in'}>Loging and signup form</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link" to={'/sign-in'}>Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/sign-up'}>Sign up</Link></li>
              </ul>
            </div> */}
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
          <Routes>
                            <Route exact path="/" element={<Login />} />
                            <Route path="/sign-in" element={<Login />} />
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* New Route */}
                            <Route path="/wellcome" element={<Wellcome />} />
                        </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
