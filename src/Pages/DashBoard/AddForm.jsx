import React from 'react'

function AddForm() {
    const [form,setForm]=React.useState({
        condition :"",
        symptoms:""
    })
    const [comp,setComp]=React.useState([])
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
            <div className="modal-body">
                <form action="">
                    <label htmlFor="condi">Patient Condition</label>
                    <input name='condition' onChange={()=>handleChange(event)} id='condi' className='form-control mb-3' placeholder='Patient Condition ' type="text" />
                    <label htmlFor="symp">Symptoms</label>
                    <div className='input-group mb-3'>
                        <input value={form.symptoms} name='symptoms' onChange={()=>handleChange(event)} id="symp" className='form-control ' placeholder='Symptoms ' type="text" />
                        <button onClick={()=>addSymp(event)} className="btn btn-primary"> add</button>
                    </div>
                    <ul>
                        {
                            comp.map((ele,i)=>{
                                return(<li onClick={()=>removeSymptom(i)}>{ele}</li>)
                            })
                        }
                        
                    </ul>
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