function DashContact() {
    const contact=[
        {
            name:"Nithi Sharma",
            relation:"Spouse",
            mobile:"+919942811189"

        },
        {
            name:"Maha Sharma",
            relation:"Daughter",
            mobile:"+91939239894"

        }
    ]
  return (
    <>
    
    {contact.map((c,i)=>{
        return(
        <div key={i} className=" d-sm-flex align-items-center p-3 mb-3 bg-light">
            <div className="">
                <p className="fw-medium">{c.name}</p>
                <p className="text-secondary m-0 fw-light">{c.relation}</p>
            </div>
            <div className="ms-auto">
                <p className="text-primary">{c.mobile}</p>
            </div>
        </div>
        )
    })}
    </>
  )
}
export default DashContact