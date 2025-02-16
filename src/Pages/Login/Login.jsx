import React from "react";

import logimg from './login.jpg'
import Signin from "./Signin";
import Signup from "./Signup";

function Login() {
    const [signup,setSignup]=React.useState(false);
  return (
    <div className="container-fluid log d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded overflow-hidden w-75">
            
            {!signup && <><Signin signin={setSignup} />
            <div className="col-md-6 d-none d-md-block" style={{background: `url(${logimg})`,
            backgroundSize: "cover",backgroundPosition: "center"}}></div></>}
            {signup && <Signup signup={setSignup}/>}
      </div>
    </div>
  );
}
export default Login