
import  React, { useState } from 'react';

 
 export default function Fun() {

 const [switchstate,setswitchstate]=useState("red");
 return(
    <><p>hook concept:</p>
    <p>The switch is On to colour { switchstate} </p>
    <button type ="button" onClick={() => setswitchstate("blue")}> the switch is on </button>
    </>
    
)
};





