import React from 'react'
import Scan from '../DashBoard/Scan';
import Navbar from '../../components/Navbar';

export default function Reports() {
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
        ,{
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
    <>
    
    <Navbar/>
    <div className='p-md-3'>
      <div className="card gap-3 p-md-4 p-2">
        <h4 className='fw-medium'>Scans & Reports</h4>
        {scans.map((s,i)=>{
                return(
                    <Scan key={i} ss={s}/>
                )
            })}
      </div>
    </div>
    </>
  )
}
