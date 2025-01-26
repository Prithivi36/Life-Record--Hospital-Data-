import DashMedRecords from "./DashMedRecords"
import RecordsDetail from "./RecordsDetail/RecordsDetail"

function RecordsMain() {
  return (
    <div className="p-sm-5 p-3">
        <div className="card p-3">
            <div className="head border-bottom mb-3 pb-3">
                <h3 className="fw-bold">Medical Records</h3>
                <div className="d-flex flex-column flex-sm-row gap-3">
                    <div className="input-group ">
                        <div className="input-group-text"><i className="bi bi-search"></i></div>
                        <input type="text" placeholder="Search by diagnosis, doctor, or hospital..." className="form-control" />
                    </div>
                    <div className=" gap-3 flex-column flex-sm-row d-flex">
                        <select className="form-select"  name="" id="">
                            <option defaultValue={true} value="all">All Records</option>
                            <option  value="follow">Follow ups</option>
                        </select>
                        <select className="form-select"  name="" id="">
                            <option defaultValue={true} value="date">Sort by Date</option>
                            <option  value="hospital">Sort by Hospital</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="data gap-2 d-flex flex-column">
                {/* <RecordsDetail /> */}
                <DashMedRecords />
            </div>
        </div>
    </div>
  )
}
export default RecordsMain