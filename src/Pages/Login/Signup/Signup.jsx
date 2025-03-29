import React from "react";
import {  useNavigate } from "react-router";
import Detail1 from "./Detail1";

function Signup(props) {
        
        const [userD,setUserD]=React.useState({
            email:"",
            password:"",
            adhr:"",
            name:"",
            phone:"",
            dob:""

        })
        const navigator = useNavigate()
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(userD)
            navigator("dashboard")
        };
        function handleChange(event){
            const {name,value}=(event.target)
            setUserD((p)=>{
                return {...p,[name]:value}
            })

        }
  return (
        <div className="col  p-5 bg-white">
            <p>Start your journey</p>
            <h3 className="mb-5 fw-bolder ">Sign Up to Life</h3>
          <form onSubmit={handleSubmit}>
            <Detail1 handleChange={handleChange} usd={userD} />
                
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