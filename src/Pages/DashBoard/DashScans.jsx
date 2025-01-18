function DashScans() {
    const scans=[
        {
          testName: "Complete Blood Count",
          date: "2024-03-01",
          doctor: "Dr. Sharma",
          hospital: "City Hospital"
        },
        {
          testName: "Lipid Profile",
          date: "2024-02-25",
          doctor: "Dr. Gupta",
          hospital: "Green Valley Clinic"
        },
        {
          testName: "Liver Function Test",
          date: "2024-02-10",
          doctor: "Dr. Ramesh Patel",
          hospital: "Sunshine Labs"
        }
      ];
  return (
    scans.map((s)=>{
        return(
            <div className="card flex-row p-3">
                <div className="">
                    <p className="text-dark fw-semibold">{s.testName}</p>
                    <p className="text-secondary m-0">{s.date}</p>
                    <p className="text-secondary m-0">{s.doctor}• {s.hospital}</p>
                </div>
                <div className="ms-auto">
                    <p className="text-primary"><i className="bi bi-download me-2"></i>Download</p>
                </div>
            </div>
        )
    })
  )
}
export default DashScans