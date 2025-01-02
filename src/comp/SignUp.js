import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'; // Create a new CSS file for custom styles
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
/*    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");*/
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook for programmatic navigation
  
    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent the form from reloading the page
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successful!");
            navigate("/sign-in");
        } catch (error) {
            console.error("Error during signup:", error);
            alert(`Signup failed: ${error.message}`);
        }
    };
    return (
        <div className="signup-container">
            <form className="signup-form">
                <h3>Sign Up</h3>

             {/*   <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div> */}

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">Login?</a>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
