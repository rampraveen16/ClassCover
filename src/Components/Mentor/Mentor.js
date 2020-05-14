import React from 'react';
import Status from '../SelectBox/StatusBox'
import { getDateArray } from '../CreateDate'
import './Mentor.css'

function mentor(props) {
      const dateList = getDateArray(props.dateFrom, props.toDate)

      const box = dateList.map((ele, index)=>{
            return <Status key={index}  id={props.detail.id} change={props.change} color={props.data.background}/>
    });
    return (
        <React.Fragment>
            <article>
                <div className="leftBlock">
                    <p>{props.detail.name}</p>
                    <p>{props.detail.phone}</p>
                </div>
            <div className="rightBlock selectBoxWrap">
                {box}
            </div>
            </article>
        </React.Fragment>
    );
  }
  
  export default mentor;