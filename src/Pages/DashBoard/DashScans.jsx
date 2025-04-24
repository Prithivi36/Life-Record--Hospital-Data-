import Scan from "./Scan";

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
    scans.map((s,i)=>{
        return(
            <Scan key={i} ss={s}/>
        )
    })
  )
}
export default DashScans