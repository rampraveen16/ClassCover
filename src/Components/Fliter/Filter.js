import React from 'react';
import './Filter.scss'

function filterBox(props) {

     return(
         <ul>
             <li>
                <input onChange={props.change} className="all" type="radio" id="all" name="gender" value="ALL" />
                <label htmlFor="all">
                    <span class="tick all">All</span>
                </label>
                
            </li>
            <li>
                <input onChange={props.change}  type="radio" id="avaliable" name="gender" value="A" />
                <label htmlFor="avaliable"><span class="tick a">avaliable</span></label>
            </li>
            <li>
                <input onChange={props.change}  type="radio" id="booked" name="gender" value="B" />
                <label htmlFor="booked"><span class="tick b">booked</span></label>
            </li>
            <li>
                <input onChange={props.change}  type="radio" id="v" name="gender" value="V" />
                <label htmlFor="v"><span class="tick v">Vacation</span></label>
            </li>
            <li>
                <input onChange={props.change}  type="radio" id="hi" name="gender" value="HI" />
                <label htmlFor="hi"><span class="tick hi">Haven't indicated</span></label>
            </li>
            <li>
                <input onChange ={props.change} type="radio" id="ua" name="gender" value="UA" />
                <label htmlFor="ua"><span class="tick ua">unavaliable</span></label>
            </li>
         </ul>
     )
}

export default filterBox;
