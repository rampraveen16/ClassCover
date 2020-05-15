import React from "react";
import './Box.scss'
function status(props)  {
    let classes = ['box', props.data.status.toLowerCase()].join(' ')
    let status = ['A','B','V','HI','V','UA']
    
    let option = status.map((ele, index)=>{
        if(props.data.status === ele) {
            return <option key={index} value={ele} selected="selected">{ele}</option>
        }
    return <option key={index} value={ele} >{ele}</option>
    })
     return(
         <select date={props.data.date}  status ={props.data.status}id= {props.id} className={classes} onChange={props.change}>
              {option}
            
         </select>
     )
}

export default status