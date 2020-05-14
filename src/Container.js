import React, { Component } from 'react'
import axios from 'axios'
import Mentor from './Components/Mentor/Mentor'
import DateText from './Components/Date'
import FliterBox from './Components/Fliter/Filter'

class Container extends Component {
    
    state = {
        dateFrom: new Date(),
        toDate:new Date(2020, 4, 30),
        filter:'',
        background:'',
        mentors:[]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            this.setState({
                mentors: res.data
            })
        })
    }
    selectBoxChange= (e) => {
        if(e.target.value==='UA') {
            this.setState({ background:'#000'})
        }
    }
    search = (e) => {
        this.setState({ filter: e.target.value });
    }
    render() {
        const { filter, mentors} = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = mentors.filter(item => {
            return item.name.toLowerCase().includes(lowercasedFilter)
          });
        const mentorList =filteredData.map((ele,index)=>{
            return <Mentor key ={index} detail = {ele} data = {this.state}dateFrom ={this.state.dateFrom} toDate ={this.state.toDate} change={this.selectBoxChange}/>
        })
        return(
            <React.Fragment>
                <section>
                <div className="leftBlock">
                    <label>Search Name</label>
                    <input  onChange={this.search}/>
                </div>
                <div className="rightBlock">
                    <FliterBox></FliterBox>
                </div>
                </section>
            <section>
                <div className="leftBlock"></div>
                <div className="rightBlock dateWrap">
                   <DateText dateFrom ={this.state.dateFrom} toDate ={this.state.toDate}/> 
                </div>
            </section>
            <section>
            <h4 class="title">Show Details(Subject and Tags)</h4>
              <div className="mentorList">
               {mentorList}
               </div>
            </section>
            </React.Fragment>
        )
    }
}

export default Container