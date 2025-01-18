import { User } from "lucide-react"
import image from "../../assets/image.png"
function DashBoard() {
  return (
    <div className="bg-light p-4">
        <div className="p-4 rounded-4 shadow-sm  bg-white">
            <div className="d-flex align-items-center">
                <div className="p-3">
                    <img className=" rounded-circle profile" src={image} alt="" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <h4 className="m-0 fw-bold">Rahul Sharma</h4>
                    <p className="text-secondary m-0">ID : 6818 8659 3676</p>
                </div>
            </div>
            <div className="px-3 d-flex flex-column gap-3 flex-md-row justify-content-between">
                <div className="dob d-flex gap-3 align-items-center">
                    <i className="bi bi-calendar4 fw-bolder fs-5 text-secondary"></i>
                    <div className="">
                        <p className="text-secondary my-0">Date of Birth</p>
                        <p className="text-dark fw-bolder my-0">01-09-2004</p>
                    </div>
                </div>
                <div className="phn d-flex gap-3 align-items-center">
                    <i className="bi bi-telephone fw-bolder fs-5 text-secondary"></i>
                    <div className="">
                        <p className="text-secondary my-0">Phone</p>
                        <p className="text-dark fw-bolder my-0">+918220812131</p>
                    </div>
                </div>
                <div className="blood d-flex gap-3 align-items-center">
                    <i className="bi bi-activity fw-bolder fs-5 text-secondary"></i>
                    <div className="">
                        <p className="text-secondary my-0">Blood Group</p>
                        <p className="text-dark fw-bolder my-0">O+ve</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default DashBoard