import React,{Fragment,useState} from 'react'

import { addCompany } from './../api/index';

export default function AddCompany() {
  const [values,setvalues]=useState({
    name:'',
    email:'',
    address:'',
    city:'',
    state:'',
    zip:'',
    phone:'',
    website:'',
    email:'',
   



  })
  const {name, address, city, state,phone,website,email,zip} =values
  const onHandleChange =name =>event=>{
    setvalues({...values,[name]:event.target.value})
  }
  
  function submit(event){
    event.preventDefault()
    addCompany(values).then(response=>{

    }).catch((err)=>{
      console.log('err')
    })
  }
    return (
        <Fragment>
            <section className="col-md-5 ml-5 mt-5">
    <h2>COMPANY INFORMATION</h2>
    <form  id="subForm">
       
        <div className="form-group">
          <label >Name</label>
          <input type="text" className="form-control"aria-describedby="emailHelp" name="name" value={name} onChange={onHandleChange('name')}/>
        </div>
        <div className="form-group">
          <label >Address</label>
          <input type="text" className="form-control"  name="address" value={address} onChange={onHandleChange('address')}/>
        </div>

        <div className="form-row">
        <div className="form-group col-md-4">
            <label >City</label>
            <input type="text" className="form-control" name="city" value={city} onChange={onHandleChange('city')}/>
          </div>
          <div className="form-group col-md-4">
            <label >State</label>
            <input type="text" className="form-control" name="state" value={state} onChange={onHandleChange('state')}/>
          </div>
          <div className="form-group col-md-4">
            <label >Zip</label>
            <input type="number" className="form-control"    name="zip" value={zip }onChange={onHandleChange('zip')}/>
          </div>
        </div>

        <div className="form-group">
            <label >Phone</label>
            <input type="number" className="form-control" name="phone" value={phone} onChange={onHandleChange('phone')}/>
          </div>
          <div className="form-group">
            <label >Website</label>
            <input type="text" className="form-control" name="website" value={website} onChange={onHandleChange('website')}/>
          </div>
          
          <div className="form-group">
            <label >Email</label>
            <input type="email" className="form-control"  name="email" value={email} onChange={onHandleChange('email')}/>
          </div>
          
  
            <div className=" text-center">
                <span id="error" style={{"display": "none", "color": "red", "font-weight": "bold", "margin-bottom": "10px"}}>d</span>
                <button  onClick={submit} className="btn" style={{"width": "200px", "border-radius": "25px", "background-color": "#7c09ad", "color": "white"}}>Submit</button>

            </div>
                      {JSON.stringify(values)}     
      </form>
</section>
        </Fragment>
    )
}
