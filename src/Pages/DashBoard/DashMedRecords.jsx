function DashMedRecords() {
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
        }
    ]
  return (
    <>
    {
        details.map((d)=>{
            return(
                <div className="callout d-flex">
                    <div className="p-3 ">
                        <p className="m-0 fw-medium">{d.condition}</p>
                        <p className="m-0 text-secondary">{d.doctor}</p>
                    </div>
                    <div className="p-3 ms-auto">
                        <p className="m-0 text-secondary">{d.date}</p>
                    </div>
                </div>
            )
        })
    }
    </>
  )
}
export default DashMedRecords