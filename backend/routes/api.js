const router = require('express').Router()
const companyController = require('../controllers/companyController')
const appoinmentController= require('../controllers/appoinmentController')

router.get('/',(req,res)=>{
    res.send('hello')
})

router.post('/addCompany',companyController().addCompany)

router.post('/addAppoinment',appoinmentController().addAppoinmnet)

module.exports=router