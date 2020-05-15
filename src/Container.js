import React, { Component } from 'react'
// import axios from 'axios'
import Mentor from './Components/Mentor/Mentor'
import DateText from './Components/Date'
import FliterBox from './Components/Fliter/Filter'
import { getDateArray } from './Components/CreateDate'
import json from './Data.json'
class Container extends Component {
    
    state = {
        dateFrom: new Date(2020, 4, 15),
        toDate:new Date(2020, 4, 30),
        filter:'',
        getDate:null,
        filterStatus:null,
        mentors: json
    }

    componentDidMount() {
        const date = getDateArray(this.state.dateFrom, this.state.toDate)
        this.setState({
                getDate: date
        })
        /*axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            console.log(res)
           //let temp =  res.data.map(ele =>({...this.state.data, avalible}))
            this.setState({
                mentors: res
            })
        })*/
    }
    selectBoxChange= (e) => {
        let temp = this.state.mentors.map((ele)=>{
            if(ele.id===parseInt(e.target.id)) {
               let test =  ele.avalible.filter((d)=>{
                    if(d.date=== e.target.getAttribute('date')) {
                        d.status = e.target.value
                       return d
                    }
                    return d
                    
                })
                ele.avalible = test
                return ele
            }
            return ele
        })
        this.setState({
            mentors:temp
        })

    }
    filterStatus = (e) => {
        
        console.log(e.target.value)
        let temp = this.state.mentors.filter((ele)=>{
             for(let i of ele.avalible) {
                 if(i.status === e.target.value){
                     console.log(i.status)
                 return ele
                 }
             }
        })
        this.setState({
            filterStatus: temp
        })
        if(e.target.value === 'ALL') {
            this.setState({
                filterStatus: this.state.mentors
            })
        }
    }
    search = (e) => {
        this.setState({ filter: e.target.value });
    }
    render() {
        const { filter, mentors} = this.state;
        const lowercasedFilter = filter.toLowerCase();
        console.log()
        let filterMentor = (this.state.filterStatus === null) ? mentors : this.state.filterStatus 
        const filteredData = filterMentor.filter(item => {
            return item.name.toLowerCase().includes(lowercasedFilter)
          });
        const mentorList = filteredData.map((ele,index)=>{
            return <Mentor key ={index} count ={index} detail = {ele} change={this.selectBoxChange}/>
        })

        return(
            <React.Fragment>
                <section className="filterBlock">
                    <input  type="search" onChange={this.search} placeholder="Search Name"/>
                    <FliterBox change = {this.filterStatus}></FliterBox>

                </section>
                <section class="dateBlock">
                    <div className="leftBlock"></div>
                    <div className="rightBlock dateWrap">
                        <DateText date={this.state.getDate}/> 
                    </div>
                </section>
                <section class="mentorBlock">
                    <h4 className="title">Show Details(Subject and Tags)</h4>
                    <div className="mentorList">
                    {mentorList}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Container