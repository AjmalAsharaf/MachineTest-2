import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <Fragment>
        <div>
            <div className="row  ml-1 mt-5">
                <div className="col-md-6">
                    <select name="order" style={{"border-radius": "20px", "padding-left": "10px","padding-block": "2px", "font-size": "12px"}}>
                        <option value="">Order By : First Name</option>
                    </select>
                    <input type="text" placeholder="search" style={{"border-radius": "20px", "padding-left": "10px","font-size": "12px","padding-block": "2px"}} />
                </div>
            <div className="col-md-6 d-flex justify-content-end">

                <Link to="/addCompany"> <button className="btn mr-3" style={{"background-color": "#7c09ad", "color": "white", "border-radius": "25px"}}>Add New Company</button></Link> 
                <button className="btn mr-3 " style={{"background-color": "#7c09ad", "color": "white", "border-radius": "25px"}}>Add Appoinment</button>
                <button className="btn mr-5" style={{"background-color": "#7c09ad", "color": "white", "border-radius": "25px"}}>_</button>
               
               
                </div>
            </div>
        </div>

        </Fragment>
    )
}
