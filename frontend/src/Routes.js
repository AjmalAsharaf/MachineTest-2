import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddCompany from './component/AddCompany';
const Routes = ()=>{
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
            <Route path='/' exact component={Home} />
                 
                <Route path='/addCompany' exact component={AddCompany} />
               

                </Switch>
        </BrowserRouter>
    )
}

export default Routes