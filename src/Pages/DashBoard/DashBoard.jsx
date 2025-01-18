import { User } from "lucide-react"
import image from "../../assets/image.png"
import DashHeader from "./DashHeader"
import DashInfo from "./DashInfo"
import DashContact from "./DashContact"
function DashBoard() {
  return (
    <div className="bg-light p-4">
        <div className="p-4 d-flex flex-column gap-3 rounded-4 shadow-sm  bg-white">
            <div className="d-flex align-items-center">
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
    </div>
  )
}
export default DashBoard