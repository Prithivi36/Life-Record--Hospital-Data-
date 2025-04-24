import React from 'react'

export default function Admin() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className="">
            <h3 className='text-center'>Admin Panel</h3>
            <p className='text-center'>appoint as doctor</p>
            <div className="card gap-3 p-5">
                <label htmlFor="docid">Doctor Id</label>
                <input id='docid' className='form-control' type="text" placeholder='doctor id' />
                <button className='btn btn-primary'>Appoint</button>
            </div>
        </div>
    </div>
  )
}
