import React from "react";
import './Box.css'
function status(props)  {
     return(
         <select style={{ background: props.color}}id={props.id} onChange={props.change} className="box">
             <option value="A">A</option>
             <option value="A">B</option>
             <option value="Hi">HI</option>
             <option value="V">V</option>
             <option value="UA">UA</option>
         </select>
     )
}

export default status