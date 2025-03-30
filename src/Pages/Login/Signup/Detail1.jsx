import React from "react";

function Detail1(props) {
    const { handleChange, usd: userD, thn } = props;
    const [showPassword, setShowPassword] = React.useState(false);

    function handleSubmit(e){
        e.preventDefault();
        props.thn(1)
    }
    return (
        <form onSubmit={handleSubmit}>
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
                            value={userD.email || ""}
                            onChange={handleChange}
                            required
                        />
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
                            value={userD.password || ""}
                            onChange={handleChange}
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
                            value={userD.adhr || ""}
                            onChange={handleChange}
                            required
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
                            value={userD.name || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="d-md-flex justify-content-around">
                <div className="mb-3 col-md-5">
                    <label className="form-label">Phone</label>
                    <div className="input-group">
                        <input
                            name="phone"
                            type="number"
                            className="form-control"
                            placeholder="XXXXXX7526"
                            value={userD.phone || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 col-md-5">
                    <label className="form-label">Date of Birth</label>
                    <div className="input-group">
                        <input
                            name="dob"
                            type="date"
                            className="form-control"
                            value={userD.dob || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>

            <button  type="submit" className="btn btn-primary w-100 mt-4">
                Next
            </button>
        </form>
    );
}

export default Detail1;
