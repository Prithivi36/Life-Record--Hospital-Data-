import image from "../../assets/image.png"
import AddForm from "./AddForm"


function DashHeader(props) {
  return (
    <>
        <div className="p-3">
            <img className=" rounded-circle profile" src={image} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-center">
            <h4 className="m-0 fw-bold">{props.name}</h4>
            <p className="text-secondary m-0">ID : {props.adhr}</p>
        </div>
        <button data-bs-target="#addform" data-bs-toggle="modal"   className="btn btn-primary ms-auto">Add Records</button>
        <AddForm/>
    </>
  )
}
export default DashHeader