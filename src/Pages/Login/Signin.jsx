import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { useNavigate } from "react-router";

function Signin(props) {
        const [email, setEmail] = React.useState("");
        const [password, setPassword] = React.useState("");
        const [showPassword, setShowPassword] = React.useState(false);
        const navigator = useNavigate();
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Email:", email);
            console.log("Password:", password);
            navigator("dashboard")
        };
  return (
        <div className="col-md-6 p-5 bg-white">
            <p>Start your journey</p>
            <h3 className="mb-5 fw-bolder ">Sign In to Life</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span> 
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
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
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>
          <div className="text-center my-3">or sign in with</div>
            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-outline-secondary">
                    <FontAwesomeIcon icon={faGoogle} style={{ color: "#DB4437" }} />
                </button>
                <button className="btn btn-outline-secondary">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIDw7FiQKOeXZgUKEBfa7MRHV6UuPTfTCkA&s" alt="DigiLocker" width="20" height="20" />
                </button>
            </div>

          <div className="text-center mt-3">
            Don't have an account? <p onClick={()=>props.signin(true)}>Sign In</p>
          </div>
        </div>
  )
}
export default Signin