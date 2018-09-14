import React from 'React';
import HourItem from './HoursItem.jsx';

//string.toUpperCase().split(' - '); for time to show AM/PM
//min time and max time
//take current time from new Date();
//convert Date() to 12hour AMPM with
//.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
//compare date now with date bounds;

const Hours = (props) => {
  let days = Object.keys(props.hours);
  return (
    <div>
      <h4 className="red-text">
        Hours
      </h4>
      <table>
        <tbody>
          {days.map(day => 
            <HourItem 
              key={day} 
              day={day} 
              hours={props.hours[day]}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Hours;