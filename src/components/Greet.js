import React ,{ useState } from "react";



function Greet() {
    let [name ,setName] = useState ({firstName:' ',lastName: ' '}); 
    return (
      <div>
             <form>
                <input type = "text" value ={name.firstName} onChange ={e =>{setName({...name,firstname:e.target.value})}}></input>
                <input type = "text" value ={name.lastName} onChange ={e =>{setName({ ...name,lastname:e.target.value})}}></input>

            </form>
            {name.firstName}
            {name.lastName}
 

        </div>)
    


      
    
}

export default Greet;
