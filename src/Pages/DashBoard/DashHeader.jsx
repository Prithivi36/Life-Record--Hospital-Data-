import image from "../../assets/image.png"


function DashHeader() {
  return (
    <>
        <div className="p-3">
            <img className=" rounded-circle profile" src={image} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-center">
            <h4 className="m-0 fw-bold">Rahul Sharma</h4>
            <p className="text-secondary m-0">ID : 6818 8659 3676</p>
        </div>
        <button  disabled className="btn btn-primary ms-auto">Add Records</button>
    </>
  )
}
export default DashHeader