import React from "react";

function dateText(props)  {
    const date = (props.date !== null) ?
        props.date.map((ele,index)=>{
        let split = ele.toString().split(' ')
        return(
            <div className="box" key={index}>
                <span>{split[0]} </span>
                <span style={{fontWeight:'bold'}}>{split[2]}</span>
                <span>{split[1]}</span>
            </div>
        );
    }): null
     return(
        <React.Fragment>
            {date}
        </React.Fragment>
     )
}

export default dateText