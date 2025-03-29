import React from "react";
function Detail1(props) {
    const handleChange = props.handleChange;
    const userD=props.usd;
    const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <div className="d-md-flex justify-content-around">
            <div className="mb-3 col-md-5">
                <label className="form-label">E-mail</label>
                <div className="input-group">
                    <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                    </span> 
                    <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="example@email.com"
                    value={userD.email}
                    onChange={(e) => handleChange(e)}
                    required/>
                </div>
            </div>
            <div className="mb-3 col-md-5">
                <label className="form-label">Password</label>
                <div className="input-group">
                    <input
                    placeholder="*********"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={userD.password}
                    onChange={(e) => handleChange(e)}
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
                    name="adhr"
                    className="form-control"
                    placeholder="XXXX XXXX XXX 1235"
                    required
                    onChange={(e)=>handleChange(e)}
                    />
                </div>
            </div>
            <div className="mb-3 col-md-5">
                <label className="form-label">Full Name</label>
                <div className="input-group">
                    <input
                    name="name"
                    className="form-control"
                    placeholder="Maheshwar S"
                    onChange={(e)=>handleChange(e)}
                    required/>
                </div>
            </div>
        </div>
        <div className="d-md-flex justify-content-around">

            <div className="mb-3 col-md-5">
            <label className="form-label">Phone</label>
                <div className="input-group">
                    <input
                    name="phone"
                    onChange={(e)=>handleChange(e)}
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
                    name="dob"
                    onChange={(e)=>handleChange(e)}
                    type="date"
                    className="form-control"
                    placeholder="01-09-2004"
                    required/>
                </div>
            </div>
        </div>  
    </>
  )
}
export default Detail1