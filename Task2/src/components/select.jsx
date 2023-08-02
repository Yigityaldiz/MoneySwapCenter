 export default function Select({options, onChange , ...props}){
 return(

    <div >
    <select onChange={onChange} >
      {options?.map((exh, i) => (
        <option key={i}>{exh}</option>
      ))}
    </select>
  </div>

 )

    
}