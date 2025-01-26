import React from "react";
import RecordsMain from "../RecordsMain";

function RecordsDetail() {

  const data ={
    "title": "Hypertension",
    "followUp":true,
    "followUpDate": "10-4-2024",
    "doctor": {
      "name": "Dr. Patel",
      "date": "10/3/2024"
    },
    "hospital": "City Hospital",
    "symptoms": ["Headache", "Dizziness", "High Blood Pressure", "Fatigue", "Nausea"],
    "prescriptions": [{
      "name": "Amlodipine",
      "dosage": "5mg",
      "daily":"once",
      "duration": "30",
      "instructions": "Take after breakfast"
    },{
      "name": "Amlodipine",
      "dosage": "5mg",
      "daily":"once",
      "duration": "30",
      "instructions": "Take after breakfast"
    }
  ],
    "doctorNotes": "Patient advised to monitor blood pressure daily and maintain a low-salt diet."
  }
  

  return (
    <div className="container mt-4 p-3 border rounded bg-light">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
        <h4 className="m-0">{data.title}</h4>
        <p className="text-primary">
          <i className="bi bi-calendar-event"></i> Follow-up: {data.followUpDate}
        </p>
      </div>
      <div className="mb-3">
        <p className="m-0 text-secondary">
          <i className="bi bi-person"></i> {data.doctor.name}
        </p>
        <p className="m-0 text-secondary">
          <i className="bi bi-building"></i> {data.hospital}
        </p>
        <p className="m-0 text-secondary">
          <i className="bi bi-clock"></i> {data.date}
        </p>
      </div>
      <div className="mb-3">
        <h6>Symptoms</h6>
        <div className="d-flex flex-wrap gap-2">
          {
            data.symptoms.map((sym,i)=><span key={i} className="badge bg-secondary">{sym}</span>)
          }
        </div>
      </div>
        <h6>Prescriptions</h6>
      <div className="mb-3 d-flex gap-4 flex-wrap">
        {
          data.prescriptions.map((pres,i)=>{
            return(
              <div key={i}>
                <p className="m-0">
                  <i className="bi bi-link"></i> <strong>{pres.name}</strong>
                </p>
                <p className="m-0">{pres.dosage} - {pres.daily} daily</p>
                <p className="m-0">Duration: {pres.duration} days</p>
                <p className="m-0">{pres.instructions}</p>
              </div>
            )
          })
        }
      </div>
      <div className="p-3 bg-warning-subtle rounded">
        <h6>Doctor's Notes</h6>
        <p className="m-0">
          {data.doctorNotes}
        </p>
      </div>
    </div>
  );
}

export default RecordsDetail;
