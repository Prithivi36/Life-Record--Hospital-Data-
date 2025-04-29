import React from "react";
import {  useNavigate } from "react-router";
import Detail1 from "./Detail1";
import Details2 from "./Details2";
import { saveUser } from "../../../Service/Api";

function Signup(props) {
    const [stage,setStage]=React.useState(0);
    const [userD,setUserD]=React.useState({
        email:"",
        password:"",
        adhr:"",
        name:"",
        phone:"",
        dob:"",
        blood:"",
        emergency_num:"",
        emergency_name: "",
        emergency_rel:""
    })
    const navigator = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          adhr: userD.adhr,
          blood: userD.blood,
          dob: userD.dob,
          email: userD.email,
          emergency: {
            name: userD.emergency_name,
            relation: userD.emergency_rel,
            phone: userD.emergency_num
          },
          name: userD.name,
          password: userD.password,
          phone: userD.phone,
          record: []
        };
        
        console.log(userData)
        //backed  wrk
        saveUser(userData).then(res=>{
          alert(res.data)
          location.reload()
        }).catch(
          e=>alert(e.data)
        )
    };
    function handleChange(event){
        const {name,value}=(event.target)
        setUserD((p)=>{
            return {...p,[name]:value}
        })

    }
    const stg = [<Detail1 key={0} thn={setStage} handleChange={handleChange} usd={userD}/>,<Details2 key={1} handleSubmit={handleSubmit} thn={setStage} handleChange={handleChange} usd={userD} />]
  return (
        <div className="col  p-5 bg-white">
            <p>Start your journey</p>
            <h3 className="mb-5 fw-bolder ">Sign Up to Life</h3>
            {stg.map((p,i)=>{
              if(i==stage)
              return p
            })                }
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