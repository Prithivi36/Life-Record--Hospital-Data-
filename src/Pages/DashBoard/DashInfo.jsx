function DashInfo() {
    const info=[
        {
            icon:"calendar4",
            field:"Date of Birth",
            value:"01-09-2004"
        },
        {
            icon:"telephone",
            field:"Phone",
            value:"+918220812131"
        },
        {
            icon:"activity",
            field:"Blood Group",
            value:"O+ve"
        }
    ]
  return (
    <>
        {
            info.map((i)=>{
                return(
                    <div className="dob d-flex gap-3 align-items-center">
                    <i className={`bi bi-${i.icon} fw-bolder fs-5 text-secondary`}></i>
                    <div className="">
                        <p className="text-secondary my-0">{i.field}</p>
                        <p className="text-dark fw-bolder my-0">{i.value}</p>
                    </div>
                </div>
                )
            })
        }
    </>
  )
}
export default DashInfo