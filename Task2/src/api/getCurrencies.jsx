import axios from "axios";
 
export const API = axios.create({
    baseURL :  "https://api.exchangerate.host/latest"
})

export  const  fetchData = async ()=>{
    const endpoint = "/";

    return (
       await API.get(endpoint)
        .then(res =>  res.data.rates )
        .catch(err => console.log(err,"fethData da hata var "))
        
    )
    
    
    }

    export const sendRequest = (selectFrom,selectTo,value) => {

        const endpoint = `?BASE=${selectFrom}&symbols=${selectTo}&amount=${value} `;

        return(
            API.get(endpoint)
        )

       
      };

   
    
 
    
   
    
