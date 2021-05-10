import React from 'react'
import Calendar from './Calendar'

const Calendars = (props) => {
return(
    <div>
        {props.appointments.map(appointment => <Calendar key={appointment.id} appointment={appointment}/>)}
    </div>
)
   
}

export default Calendars