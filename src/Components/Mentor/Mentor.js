import React, { Component } from 'react';
import Status from '../SelectBox/StatusBox'
import './Mentor.scss'
import {ReactComponent as Star} from '../../img/star.svg'
import {ReactComponent as Phone} from '../../img/phone.svg'

class Mentor extends Component {
    state = {
        text:'',
        display:true
    }
    click = () => {
        this.setState({
            display: !this.state.display
        })
    }
    change = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    submit = (event) => {
        event.preventDefault()
        this.setState({
            display: !this.state.display
        })
    }
    render() {
        const box = this.props.detail.avalible.map((ele, index)=>{
              return <Status key={index} id ={this.props.detail.id} change ={this.props.change}data = {ele} />
      });
      const noteText = (this.state.text === '') ? <span>Add Note</span>: <span>Edit Note</span>
      const classes = `check${this.props.count}`
      const button  = (this.state.display)  ? <button onClick={this.click}>{noteText}</button> 
                                            : <div>
                                                <form onSubmit={this.submit}>
                                                    <input type="text" onChange={this.change}/>
                                                    <input type="submit" value="Save"/>
                                                </form>
                                                <button>Edit Note</button>
                                            </div>
        return (
            <React.Fragment>
                <article>
                    <div className="leftBlock">
                        <div class="nameBlock">
                            <p className='name'><span>{this.props.detail.name} </span><span className="star"><Star />< Star /></span></p>
                            <p className='phone'><span><Phone /></span><span>{this.props.detail.phone}</span></p>
                        </div>
                        <div className="checkBox">
                            <input  type="checkbox" id={classes}  className="check" name="gender" value="AE" />
                            <label htmlFor={classes}><span class="tick b">AE+C?</span></label>
                        </div>
                        <div className="note">
                            <p>{this.state.text}</p>
                            {button}
                        </div>
                    </div>
                <div className="rightBlock selectBoxWrap">
                    {box}
                </div>
                </article>
            </React.Fragment>
        );
    }
}
    

  
  export default Mentor;