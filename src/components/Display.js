import React from 'react';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Display = () => {
  const today = new Date();
  const day = weekdays[today.getDay()];
  const month = months[today.getMonth()];
  const date = today.getDate();
  return (
    <div className="display">
      <h4 className="day">{day}</h4>
      <h4 className="month-date">
        {month} {date}
      </h4>
    </div>
  );
};

export default Display;
