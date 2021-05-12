const Appoinment= require('../models/appoinments')
const moment = require('moment')

function appoinmentController(){
    return{
        async addAppoinmnet(req,res){
            console.log(req.body)
            let {startTime,endTime,day} =req.body
            startTime=moment().format()
            endTime=moment().format()
            console.log('start and end',startTime,endTime)
            const exists=await Appoinment.find({day:day})
            if(exists){
                exists.map((value,k)=>{
                    console.log('sarttime',Date.parse(value.startTime))
                    console.log('endtime',Date.parse(value.endTime))
                    
                    let start=Date.parse(startTime)
                    let end=Date.parse(endTime)
                  console.log('start9999',start,end)
                  console.log(Date.parse(value.startTime)-start)
                    if(value.startTime >= start && value.endTime <= end ){
                        return res.json({error:'Date erro'})
                    }
                })
            }
            const appoinment=new Appoinment({
               
                 day:day,
                 startTime:startTime,
                 endTime:endTime
            })
            appoinment.save()
            .then((response)=>{
                res.status(200).json({message:'success'})
            })
            .catch((err)=>{
                res.status(400).json({message:'failed',err:err})
            })
        }
    }
}
module.exports=appoinmentController