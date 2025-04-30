function DashContact(props) {

  return (
    <>
        <div className=" d-sm-flex align-items-center p-3 mb-3 bg-light">
            <div className="">
                <p className="fw-medium">{props.data&&props.data.name}</p>
                <p className="text-secondary m-0 fw-light">{props.data&&props.data.relation}</p>
            </div>
            <div className="ms-auto">
                <p className="text-primary">{props.data&&props.data.phone}</p>
            </div>
        </div>
    </>
  )
}
export default DashContact