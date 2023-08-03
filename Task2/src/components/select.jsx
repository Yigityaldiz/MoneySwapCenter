 export default function Select({options, onChange ,label, ...props}){
 return(

    <div >
    <label>{label}</label>   
    <select onChange={onChange} >
      {options?.map((exh, i) => (
        <option key={i}>{exh}</option>
      ))}
    </select>
  </div>

 )

    
}