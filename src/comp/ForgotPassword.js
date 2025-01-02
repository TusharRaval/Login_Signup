import React, { useState } from 'react';
import './ForgotPassword.css'; // Create a CSS file for custom styles
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; // Ensure this imports your Firebase configuration

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); // State for success or error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setMessage("Please enter a valid email address.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset link sent! Check your email.");
        } catch (error) {
            console.error("Error sending password reset email:", error);
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="forgot-password-container">
            <form className="forgot-password-form" onSubmit={handleSubmit}>
                <h3>Forgot Password</h3>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Send Reset Link
                    </button>
                </div>

                {message && <p className="message text-center">{message}</p>}

                <p className="back-to-login text-center">
                    <Link to="/sign-in">Back to Login</Link>
                </p>
            </form>
        </div>
    );
};

export default ForgotPassword;
