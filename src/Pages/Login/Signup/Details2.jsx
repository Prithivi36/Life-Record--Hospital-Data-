import React from "react";

function Details2({ handleChange, usd, handleSubmit, thn }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="justify-content-around px-md-5">
                <label htmlFor="bloodGroup" className="form-label">Select Blood Group</label>
                <div className="mb-3 gap-5">
                    <select name="blood" className="form-select" id="bloodGroup" value={usd.blood} onChange={handleChange} required>
                        <option value="" disabled>Choose . . . </option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="profile">Upload your image</label>
                    <input id="profile" type="file" className="form-control" />
                </div>
                <h3>Emergency :</h3>
                <div className="mb-3">
                    <label className="form-label">Contact No.</label>
                    <input name="emergency_num" className="form-control" placeholder="contact no." type="text" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Contact Name</label>
                    <input name="emergency_name" className="form-control" placeholder="Contact Name" type="text" onChange={handleChange} required />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">contact relation</label>
                    <input name="emergency_rel" className="form-control" placeholder="relationship" type="text" onChange={handleChange} required />
                </div>
            </div>

            <button type="button" onClick={() => thn(0)} className="btn btn-outline-primary w-100 mt-4">Back</button>
            <button type="submit" className="btn btn-primary w-100 mt-4">Sign Up</button>
        </form>
    );
}

export default Details2;
