import React from 'React';
import HourItem from './HoursItem.jsx';
import moment from 'moment';
import style from './Hours.css';

//string.toUpperCase().split(' - '); for time to show AM/PM
//open time and close time
//take current time from moment();
//compare date now with date bounds;
//render open now / closed now if 
// day matches currday

let currDay = moment().format('dddd').slice(0, 3);
let currHours = moment().format('h:mma');
let currHoursMoment = moment(currHours, 'h:mma');

const Hours = (props) => {
  let days = Object.keys(props.hours);
  let hourBounds, startToday, endToday, isOpen;

  if (!!props.hours[currDay]) {
    hourBounds = props.hours[currDay].replace(' ', '').split('-');
  }
  if (!!hourBounds) {
    startToday = moment(hourBounds[0], 'h:mma');
    endToday = moment(hourBounds[1], 'h:mma');
    if (hourBounds[0].includes('pm') && hourBounds[1].includes('am') && currHours.includes('pm')) {
      isOpen = (currHoursMoment.isAfter(startToday));
    } else if (hourBounds[0].includes('pm') && hourBounds[1].includes('am') && currHours.includes('am')) {
      isOpen = (currHoursMoment.isBefore(endToday));
    } else {
      isOpen = (currHoursMoment.isAfter(startToday) && currHoursMoment.isBefore(endToday));
    }
  }

  return (
    <div>
      <span className={style.redtext}>
        Hours
      </span>
      <table className={style.tablepadding}>
        <tbody>
          {days.map(day => 
            <HourItem 
              key={day} 
              day={day} 
              hours={props.hours[day]}
              currDay={currDay}
              isOpen={isOpen}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Hours;