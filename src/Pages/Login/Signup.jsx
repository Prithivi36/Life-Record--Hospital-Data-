import React from "react";
import {  useNavigate } from "react-router";

function Signup(props) {
        const [email, setEmail] = React.useState("");
        const [password, setPassword] = React.useState("");
        const [showPassword, setShowPassword] = React.useState(false);
        const navigator = useNavigate()
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Email:", email);
            console.log("Password:", password);
            navigator("dashboard")
        };
        
  return (
        <div className="col  p-5 bg-white">
            <p>Start your journey</p>
            <h3 className="mb-5 fw-bolder ">Sign Up to Life</h3>
          <form onSubmit={handleSubmit}>
            <div className="d-md-flex justify-content-around">
                <div className="mb-3 col-md-5">
                    <label className="form-label">E-mail</label>
                    <div className="input-group">
                        <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                        </span> 
                        <input
                        type="email"
                        className="form-control"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    </div>
                </div>
                <div className="mb-3 col-md-5">
                    <label className="form-label">Password</label>
                    <div className="input-group">
                        <input
                        placeholder="*********"
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        <span
                        className="input-group-text"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer" }}
                        >
                        <i className="bi bi-eye"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-md-flex justify-content-around">

                <div className="mb-3 col-md-5">
                <label className="form-label">Aadhar number</label>
                    <div className="input-group">
                        <input
                        type="number"
                        className="form-control"
                        placeholder="XXXX XXXX XXX 1235"
                        required
                        />
                    </div>
                </div>
                <div className="mb-3 col-md-5">
                    <label className="form-label">Full Name</label>
                    <div className="input-group">
                        <input
                        className="form-control"
                        placeholder="Maheshwar S"
                        required/>
                    </div>
                </div>
            </div>
            <div className="d-md-flex justify-content-around">

                <div className="mb-3 col-md-5">
                <label className="form-label">Phone</label>
                    <div className="input-group">
                        <input
                        type="number"
                        className="form-control"
                        placeholder="XXXXXX7526"
                        required/>
                    </div>
                </div>
                <div className="mb-3 col-md-5">
                    <label className="form-label">Date of Birth</label>
                    <div className="input-group">
                        <input
                        type="date"
                        className="form-control"
                        placeholder="01-09-2004"
                        required/>
                    </div>
                </div>
            </div>
                
            <button type="submit" className="btn btn-primary w-100 mt-4">Sign Up</button>
          </form>
          <div className="text-center my-3">or sign up with</div>
            <div className="d-flex justify-content-center gap-3">

                <button className="btn btn-outline-secondary">
                    <i className="bi bi-google"></i>
                </button>
                <button className="btn btn-outline-secondary">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIDw7FiQKOeXZgUKEBfa7MRHV6UuPTfTCkA&s" alt="DigiLocker" width="20" height="20" />
                </button>
            </div>

          <div className="text-center mt-3">
            Have an account? <p onClick={()=>props.signup(false)}>Sign In</p>
          </div>
        </div>
  )
}
export default Signup