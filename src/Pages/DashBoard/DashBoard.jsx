import { User } from "lucide-react"
import image from "../../assets/image.png"
import DashHeader from "./DashHeader"
import DashInfo from "./DashInfo"
import DashContact from "./DashContact"
import DashScans from "./DashScans"
import DashMedRecords from "../Records/DashMedRecords"
import { useNavigate } from "react-router"
import Navbar from "../../components/Navbar"
function DashBoard() {
    const navigator = useNavigate();
  return (
    <>
    <Navbar />
    <div className="bg-light d-flex flex-column gap-3 p-4">
        <div className="p-4 d-flex flex-column gap-3 rounded-4 shadow-sm  bg-white">
            <div className="d-sm-flex text-center text-sm-start align-items-center">
                <DashHeader />
            </div>
            <div className="px-3 d-flex flex-column gap-3 flex-md-row justify-content-between">
                <DashInfo/>
            </div>
            <div className="ps-3">
                <div className="d-flex justify-content-between">
                    <p className="text-primary-emphasis  fw-bold">Emergency Contact</p>
                    <i className="bi fw-bolder text-primary text-decoration-none bi-plus"> Add</i>
                </div>
                    <DashContact />
            </div>
        </div>
        <div className="p-4 pb-0 d-flex flex-column gap-3 rounded-4 shadow-sm  bg-white">
            <p className="fs-5 fw-medium">Recent Medical Records</p>
            <DashMedRecords sample={true} />
            <div className="end">
                <p onClick={()=>navigator("/records")} className="text-center text-primary text-decoration-none border-top py-3 more m-0">View more</p>
            </div>
        </div>
        <div className="p-4 pb-0 d-flex flex-column gap-3 rounded-4 shadow-sm  bg-white">
            <p className="fs-5 fw-medium">Scans & Report</p>
            <DashScans />
            <div className="end">
                <p className="text-center text-primary text-decoration-none border-top py-3 more m-0">View more</p>
            </div>
        </div>
    </div>
    </>
  )
}
export default DashBoard