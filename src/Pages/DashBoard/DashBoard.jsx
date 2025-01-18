import { User } from "lucide-react"
import image from "../../assets/image.png"
import DashHeader from "./DashHeader"
import DashInfo from "./DashInfo"
import DashContact from "./DashContact"
function DashBoard() {
  return (
    <div className="bg-light d-flex flex-column gap-3 p-4">
        <div className="p-4 d-flex flex-column gap-3 rounded-4 shadow-sm  bg-white">
            <div className="d-sm-flex text-center text-sm-start align-items-center">
                <DashHeader />
            </div>
            <div className="px-3 d-flex flex-column gap-3 flex-md-row justify-content-between">
                <DashInfo/>
            </div>
            <div className="ps-3">
                <p className="text-primary-emphasis  fw-bold">Emergency Contact</p>
                    <DashContact />
            </div>
        </div>
        <div className="p-4 pb-0 d-flex flex-column gap-3 rounded-4 shadow-sm  bg-white">
            <p className="fs-5 fw-medium">Recent Medical Records</p>
            <div className="callout d-flex">
                <div className="p-3 ">
                    <p className="m-0 fw-medium">Respiratory Disorder</p>
                    <p className="m-0 text-secondary">Dr. Anjali Gupta</p>
                </div>
                <div className="p-3 ms-auto">
                    <p className="m-0 text-secondary">10 Mar 2024</p>
                </div>
            </div>
            <div className="callout d-flex">
                <div className="p-3 ">
                    <p className="m-0 fw-medium">Respiratory Disorder</p>
                    <p className="m-0 text-secondary">Dr. Anjali Gupta</p>
                </div>
                <div className="p-3 ms-auto">
                    <p className="m-0 text-secondary">10 Mar 2024</p>
                </div>
            </div>
            <div className="callout d-flex">
                <div className="p-3 ">
                    <p className="m-0 fw-medium">Respiratory Disorder</p>
                    <p className="m-0 text-secondary">Dr. Anjali Gupta</p>
                </div>
                <div className="p-3 ms-auto">
                    <p className="m-0 text-secondary">10 Mar 2024</p>
                </div>
            </div>
            <div className="end">
                <p className="text-center text-primary text-decoration-none border-top py-3 more m-0">View more</p>
            </div>
        </div>
    </div>
  )
}
export default DashBoard