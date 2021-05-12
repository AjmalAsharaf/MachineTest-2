const Company = require('../models/company')

function companyController(){
    return{
        async addCompany(req,res){
            console.log(req.body)
            const {name,address, city, state, phone,website,email,zip} = req.body
            const exist = await Company.exists({email:email})
            if(exist){
                return res.status(409).json({error:'Email exists',status:false})
            }
            const company = new Company({
                name,
                address,
                city,
                state,
                phone,
                website,
                email,
                zip
            })
            company.save()
            .then((company)=>{
                return res.status(200).json({message:'Add success fully',status:true})
            })
            .catch((err)=>{
                return res.status(400).json({message:'Something went wrong',status:false})

            })
        }
    }
}

module.exports=companyController