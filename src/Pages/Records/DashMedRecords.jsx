import React from "react";
import RecordsDetail from "./RecordsDetail/RecordsDetail";

function DashMedRecords(props) {
    const details=[
        {
            condition: "Respiratory Disorder",
            doctor: "Dr. Anjali Gupta",
            date: "2024-03-10"
        },
        {
        condition: "Cardiovascular Disease",
        doctor: "Dr. Rajesh Kumar",
        date: "2023-12-15"
        },
        {
        condition: "Diabetes Management",
        doctor: "Dr. Sunita Mehta",
        date: "2024-01-22"
        },
        {
        condition: "Pressure Management",
        doctor: "Dr. Sunita Williams",
        date: "2024-01-25"
        }
    ]
    const [show,setShow] = React.useState(null)
    const filteredDetails = props.sample ? details.slice(0, 2) : details;

  return (
    <>
    {
        filteredDetails.map((d,i)=>{
            const isExpanded = show === i;
            return(
                <div key={i} className="">
                    <div onClick={() => setShow(isExpanded ? null : i)} className="callout d-flex flex-wrap">
                        <div className="p-3 ">
                            <p className="m-0 fw-medium">{d.condition}</p>
                            <p className="m-0 text-secondary">{d.doctor}</p>
                        </div>
                        <div className="p-3 ms-auto">
                            <p className="m-0 text-secondary">{d.date}</p>
                        </div>
                    </div>
                    <div className={`collapsible ${isExpanded ? "expanded" : ""}`}>
                        {isExpanded && <RecordsDetail />}
                    </div>
                </div>
            )
        })
    }
    </>
  )
}
export default DashMedRecords