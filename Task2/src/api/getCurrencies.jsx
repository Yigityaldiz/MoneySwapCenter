import axios from "axios";
 
export  const  fetchData = ()=>{
    const baseURL =  "https://api.exchangerate.host/latest";

    return (
        axios.get(baseURL)
        .then(res => res.data.rates )
        .catch(err => console.log(err,"fethData da hata var "))
        
    )
    
    
    }

    export const sendRequest = (selectFrom,selectTo,value) => {

        const sendRequestUrl = `https://api.exchangerate.host/latest?BASE=${selectFrom}&symbols=${selectTo}&amount=${value}`;

        return(
            axios.get(sendRequestUrl)
            .then((res) => setResult(res.data.rates))
            .catch((err) =>console.log(err))
        )

       
      };

   
    
 
    
   
    
