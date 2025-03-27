import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? "" : "Enter your name";
        tempErrors.mobile =
            /^[0-9]{10}$/.test(formData.mobile) ? "" : "Enter a valid 10-digit mobile number";
        tempErrors.password =
            formData.password.length >= 8 ? "" : "Password must be at least 8 characters long";
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            navigate("/signin");
        }
    };

    return (
        <div className="signup-wrapper">
            <img className="logo" src="/images/amazon-in.png" alt="Amazon Logo" />
            <div className="signup-container">
                <div className="signup-box">
                    <h2>Create Account</h2>
                    <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Mobile number</label>
              <div className="mobile-input">
                <select>
                  <option>IN +91</option>
                </select>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
              </div>
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <button type="submit" className="submit-btn">Verify mobile number</button>
          </form> 
                    <p className="existing">Already have an account? <a href="/signIn">Sign in</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
