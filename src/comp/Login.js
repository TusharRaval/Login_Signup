/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import './Login.css'; // Import the CSS file for custom styles
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

/* npm install js-cookie install this package
 import Cookies from "js-cookie";

const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
        alert("Email and password cannot be empty");
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");

        if (rememberMe) {
            Cookies.set("email", email, { expires: 7 }); // Save email for 7 days
        } else {
            Cookies.remove("email");
        }

        navigate("/wellcome");
    } catch (error) {
        console.error("Error during login:", error);
        alert(`Login failed: ${error.message}`);
    }
};

useEffect(() => {
    const savedEmail = Cookies.get("email");
    if (savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
    }
}, []);*/

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me"
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Load saved credentials from localStorage if "Remember Me" was previously checked
    useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Email and password cannot be empty");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");

            if (rememberMe) {
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
            }

            navigate("/wellcome");
        } catch (error) {
            console.error("Error during login:", error);
            alert(`Login failed: ${error.message}`);
        }
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };


    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h3>Login</h3>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <Link to="/forgot-password">password?</Link>
                </p>
                <div className="d-grid">
                    <Link className="btn btn-primary" to="/sign-up">Sign up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
