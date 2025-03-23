import React from 'react'

function AddForm() {
    const [form,setForm]=React.useState({
        condition :"",
        symptoms:"",
        prescriptionName: "",
        dosage: "",
        daily: "",
        duration: "",
        instructions: ""
    })
    const [comp,setComp]=React.useState([])
    const [prescriptions, setPrescriptions] = React.useState([]);
    function addPrescription(event) {
        event.preventDefault();
        if (!form.prescriptionName || !form.dosage || !form.daily || !form.duration || !form.instructions) {
          alert("Please fill in all the fields for the prescription");
        } else {
          setPrescriptions((prev) => [
            ...prev, 
            {
              name: form.prescriptionName,
              dosage: form.dosage,
              daily: form.daily,
              duration: form.duration,
              instructions: form.instructions
            }
          ]);
          setForm((prev) => ({
            ...prev,
            prescriptionName: "",
            dosage: "",
            daily: "",
            duration: "",
            instructions: ""
          }));
        }
      }
    
      function removePrescription(index) {
        setPrescriptions((prevPrescriptions) => prevPrescriptions.filter((_, i) => i !== index));
      }
    function addSymp(event){
        event.preventDefault()
        if(form.symptoms==""){
            alert("Enter some symptoms befor proceed");
        }
        else{
            setComp((prev)=>([...prev,(form.symptoms)]))
            setForm((prev) => ({
                ...prev,
                symptoms: "" 
              }));
        }
    }
    function removeSymptom(index) {
        setComp((prevComp) => prevComp.filter((_, i) => i !== index));
    }
      
    function handleChange(event){
        const {name,value}=event.target
        setForm((prev)=>({...prev,[name]:value}))
    }
  return (
    <div id='addform' className="modal fade" >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Add Diagnosis</h5>
            </div>
            <div className="modal-body ">
                <form className='' action="">
                    <p className='fw-bolder mb-3 pb-0'>Condition :</p>
                    <div className="form-floating">
                        <input name='condition' onChange={()=>handleChange(event)} id='condi' className='form-control mb-3' placeholder='Patient Condition ' type="text" />
                        <label className='text-secondary fw-medium' htmlFor="condi">Patient Condition</label>
                    </div>
                        <label className=' fw-medium mb-3' htmlFor="symp">Symptoms:</label>
                        <div className='input-group mb-3'>
                            <input id="symp"  value={form.symptoms} name='symptoms' onChange={()=>handleChange(event)}  className='form-control ' placeholder='Symptoms ' type="text" />
                            <button onClick={()=>addSymp(event)} className="btn btn-primary"> add</button>
                        </div>
                    <div className="d-flex flex-wrap">
                        {
                            comp.map((ele,i)=>{
                                return(
                                    <>
                                    <div className="m-3"><div className="d-inline m-0 bg-light p-2 rounded-3">{ele}</div><div className="d-inline text-secondary"  onClick={()=>removeSymptom(i)}>&nbsp;&nbsp;&nbsp;&nbsp; x</div></div>
                                    </>
                                )
                            })
                        }
                        
                    </div>
                    <p className='fw-bolder mb-3 pb-0'>Prescription :</p>
                    <div className="d input-group column-gap-4 align-items-center justify-content-center">
                        <div className="">
                            <div className="form-floating">

                                <input
                                name="prescriptionName"
                                onChange={handleChange}
                                id="prescriptionName"
                                className="form-control mb-3"
                                placeholder="Prescription Name"
                                type="text"
                                value={form.prescriptionName}
                                />
                                <label className='text-secondary fw-medium' htmlFor="prescriptionName">Prescription Name</label>
                            </div>
                        </div>
                        <div className="">

                            <div className="form-floating">
                                <input
                                name="dosage"
                                onChange={handleChange}
                                id="dosage"
                                className="form-control mb-3"
                                placeholder="Dosage"
                                type="text"
                                value={form.dosage}
                                />
                                <label className='text-secondary fw-medium' htmlFor="dosage">Dosage</label>
                            </div>
                        </div>
                        <div className="">

                            <div className="form-floating">
                                <input
                                name="daily"
                                onChange={handleChange}
                                id="daily"
                                className="form-control mb-3"
                                placeholder="Daily Frequency"
                                type="text"
                                value={form.daily}
                                />
                                <label className='text-secondary fw-medium' htmlFor="daily">Daily Frequency</label>
                            </div>
                        </div>
                        <div className="">
                            <div className="form-floating">
                                <input
                                name="duration"
                                onChange={handleChange}
                                id="duration"
                                className="form-control mb-3"
                                placeholder="Duration"
                                type="text"
                                value={form.duration}
                                />
                                <label className='text-secondary fw-medium' htmlFor="duration">Duration</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-floating">
                        <input
                        name="instructions"
                        onChange={handleChange}
                        id="instructions"
                        className="form-control mb-3"
                        placeholder="Instructions"
                        type="text"
                        value={form.instructions}
                        />
                        <label className='text-secondary fw-medium' htmlFor="instructions">Instructions</label>
                    </div>

                    <button onClick={addPrescription} className="btn btn-primary">
                    Add Prescription
                    </button>

                    <div className="d-flex flex-wrap mt-3">
                    {prescriptions.map((presc, i) => {
                        return (
                        <div key={i} className="m-3">
                            <div className="bg-light p-2 rounded-3">
                            {presc.name} - {presc.dosage} - {presc.daily} - {presc.duration} days - {presc.instructions}
                            </div>
                            <div className="d-inline text-secondary" onClick={() => removePrescription(i)}>
                            &nbsp;&nbsp;&nbsp;&nbsp; x
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AddForm