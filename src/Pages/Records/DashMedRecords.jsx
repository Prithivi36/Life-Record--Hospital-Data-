import React from "react";
import RecordsDetail from "./RecordsDetail/RecordsDetail";
import { getUserRecords } from "../../Service/Api";

function DashMedRecords(props) {
    const detail=[
        {
            condition: "Respiratory Disorder",
            doctor: "Dr. Anjali Gupta",
            follow:true,
            date: "2024-03-10"
        },
        {
        condition: "Cardiovascular Disease",
        doctor: "Dr. Rajesh Kumar",
        follow:false,
        date: "2023-12-15"
        },
        {
        condition: "Diabetes Management",
        doctor: "Dr. Sunita Mehta",
        follow:true,
        date: "2024-01-22"
        },
        {
        condition: "Pressure Management",
        doctor: "Dr. Sunita Williams",
        follow:false,
        date: "2024-01-25"
        }
    ]
    const [details,setDetail] = React.useState([])
    React.useEffect(() => {
        console.log(props.id);
        getUserRecords(props.id).then(res => {
          const dataArray = Array.isArray(res.data) ? res.data : Object.values(res.data);
          setDetail(dataArray);
        });
      }, []);
      
    const [show,setShow] = React.useState(null)
    const filteredDetails = props.sample ? details.slice(0, 2) : details;
    console.log("Chkkk",details)
  return (
    <>
    {
        filteredDetails.map((d,i)=>{
            const isExpanded = show === i;
            return(
                <div key={i} className="">
                    <div onClick={() => setShow(isExpanded ? null : i)} className={`${d.follow?"callout-follow":"callout"} d-flex flex-wrap`}>
                        <div className="p-3 ">
                            <p className="m-0 fw-medium">{d.title}</p>
                            <p className="m-0 text-secondary">{d.doctor.name}</p>
                        </div>
                        <div className="p-3 ms-auto">
                            <p className="m-0 text-secondary">{d.doctor.date}</p>
                        </div>
                    </div>
                    <div className={`collapsible ${isExpanded ? "expanded" : ""}`}>
                        {isExpanded && <RecordsDetail data={d} />}
                    </div>
                </div>
            )
        })
    }
    </>
  )
}
export default DashMedRecords