export const addCompany=data=>{
    return fetch(`http://localhost:5000/api/addCompany`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response=>{
        return response.json()
    })
    .catch((err)=>{
        console.log(err);
    })
}