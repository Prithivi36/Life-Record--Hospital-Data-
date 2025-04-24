import React from 'react'

export default function Scan(props) {
  return (
    <div className="card flex-row p-3">
        <div className="">
            <p className="text-dark fw-semibold">{props.ss.testName}</p>
            <p className="text-secondary m-0">{props.ss.date}</p>
            <p className="text-secondary m-0">{props.ss.doctor}• {props.ss.hospital}</p>
        </div>
        <div className="ms-auto">
            <p className="text-primary"><i className="bi bi-download me-2"></i>Download</p>
        </div>
    </div>
  )
}
