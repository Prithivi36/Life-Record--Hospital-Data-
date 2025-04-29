function DashInfo(props) {
    const info=[
        {
            icon:"calendar4",
            field:"Date of Birth",
            value:props.dob
        },
        {
            icon:"telephone",
            field:"Phone",
            value:props.phn
        },
        {
            icon:"activity",
            field:"Blood Group",
            value:props.blood
        }
    ]
  return (
    <>
        {
            info.map((i,ind)=>{
                return(
                    <div key={ind} className="dob d-flex gap-3 align-items-center">
                    <i className={`bi bi-${i.icon} fw-bolder fs-5 text-secondary`}></i>
                    <div className="">
                        <p className="text-secondary my-0">{i.field}</p>
                        <p className="text-dark fw-medium my-0">{i.value}</p>
                    </div>
                </div>
                )
            })
        }
    </>
  )
}
export default DashInfo