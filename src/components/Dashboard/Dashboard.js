import React from 'react';
import Trips from '../Trips'
import Goals from '../Goals'
import List from '../List'
import Finances from '../Finances'
import Calendar from '../Calendar'
import GoalForm from '../GoalForm'

class Dashboard extends React.Component {

state = {
  trips: [],
  goals: [],
  list: [], 
  finances: [], 
  appointments: []
}

componentDidMount () {

  fetch("http://localhost:3000/trips")
  .then(resp => resp.json())
  .then(data => this.setState({trips: data}))

  fetch("http://localhost:3000/goals")
  .then(resp => resp.json())
  .then(data => this.setState({goals: data}))


   fetch("http://localhost:3000/list_items")
  .then(resp => resp.json())
  .then(data => this.setState({list: data}))

   fetch("http://localhost:3000/finance_items")
  .then(resp => resp.json())
  .then(data => this.setState({finances: data}))


   fetch("http://localhost:3000/appointments")
  .then(resp => resp.json())
  .then(data => this.setState({appointments: data}))

}

listSubmit = (e) => {
  e.preventDefault()

let newGoal = {
  "name": e.target[0].value,
  "start_date": e.target[1].value,
  "completion_date": e.target[2].value
}
console.log(newGoal)
fetch("http://localhost:3000/goals/", {
  method: "POST", 
  headers: {
    'content-type': 'application/json',
    'accept':'application/json'
  },
  body: JSON.stringify(newGoal)
})
.then(resp => resp.json())
.then(newGoal => this.setState({
  goals: [...this.state.goals, newGoal]
}))
}





  render(){

    return(
      <div>
        <h5>My Trips</h5>
        <Trips trips={this.state.trips}/>
        <hr></hr>
        <h5>Weekly Goals</h5>
        <GoalForm listSubmit={this.listSubmit}/>
        <Goals goals={this.state.goals} />
        <hr></hr>
        <h5>To do List</h5>
        <List list={this.state.list}/>
        <hr></hr>
        <h5>Finances</h5>
        <Finances finances={this.state.finances}/>
        <h5>Calendar</h5>
        <Calendar appointments={this.state.appointments}/>
      </div>
    )
  }
}

export default Dashboard