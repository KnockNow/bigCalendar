import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';
import moment from 'moment';


let Basic = React.createClass({
  render(){
    return (
      <BigCalendar
          {...this.props}
          events={events}
          defaultDate={new Date(2015, 3, 12)}
          views={['week', 'month']}
          defaultView='week'
          step={60}
          timeslots={1}
          min={moment('7:00am', 'h:mma').toDate()}
          max={moment('11:59pm', 'h:mma').toDate()}
      />
    )
  }
})

export default Basic;
