import React, { useState } from "react";
import "../Styles/SignIn.css";
import { useNavigate } from "react-router-dom";
import userDetails from "../Data/userDetails.json";
import { PiWarningOctagon } from "react-icons/pi";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputUsername = email.trim();
        const inputPassword = password.trim();

        if (
            inputUsername === userDetails.user.username &&
            inputPassword === userDetails.user.pw
        ) {
            navigate("/"); 
        } else {
            setError("Incorrect username or password");
        }
    };

    return (
        <div className="signin-container">
            <img
                src="/images/amazon-in.png"
                alt="Amazon Logo"
                className="amazon-logo"
            />
            <div className="signin-box">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email or mobile phone number</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error &&
                        <div className="error-message">
                            <PiWarningOctagon size={20} />
                            <p>{error}</p>
                        </div>}
                    <button type="submit" className="continue-btn">
                        Sign In
                    </button>
                </form>
                <p className="terms">
                    By continuing, you agree to Amazon clone's <a href="#">Conditions of Use</a> and
                    <a href="#"> Privacy Notice</a>.
                </p>
            </div>
            <button className="create-account-btn" onClick={() => navigate('/signUp')}>
                Create your Amazon account
            </button>
        </div>
    );
};

export default SignIn;