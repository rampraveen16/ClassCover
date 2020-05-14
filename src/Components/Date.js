import React from "react";
import { getDateArray } from './CreateDate'

function dateText(props)  {
    const dateList = getDateArray(props.dateFrom, props.toDate)
    const filterDate = dateList.map((ele,index)=>{
        let split = ele.toString().split(' ')
        return(
            <div className="box" key={index}>
                <span>{split[0]} </span>
                <span>{split[1]}</span>
                <span>{split[2]}</span>
            </div>
        );
    })
     return(
        <React.Fragment>
            {filterDate}
        </React.Fragment>
     )
}

export default dateText