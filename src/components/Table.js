import React from 'react';
import Info from './Info';
import { useState, useEffect } from 'react';
import { subjects } from './subjects';

const Table = () => {
  const [course, setCourse] = useState(subjects[0]);
  const [displayInfo, setDisplayInfo] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll('.hover');

    buttons.forEach((button) => {
      subjects.forEach((subject) => {
        if (subject.periods.includes(parseInt(button.dataset.table)))
          button.textContent = subject.subject;
      });
    });

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        setDisplayInfo(true);
        const period = button.textContent;
        subjects.forEach((sub) => {
          if (sub.subject === period) setCourse(subjects[sub.id]);
        });
      });
    });
  }, []);

  return (
    <div className="table">
      <div className="grid">
        <button className="btn half-border-topleft" data-table="day">
          HOUR
          <br />
          DAY
        </button>
        <button className="btn quater-border-up" data-table="day">
          I <br />
          <span> 9:15am - 10:00am </span>
        </button>
        <button className="btn quater-border-up" data-table="day">
          II <br />
          <span> 10:15am - 11:00am </span>
        </button>
        <button className="btn quater-border-up" data-table="day">
          III <br />
          <span> 11:15am - 12:0pm </span>
        </button>
        <button className="btn quater-border-up" data-table="day">
          IV <br />
          <span> 12:15pm - 1:00pm </span>
        </button>
        <button className="btn half-border-topright" data-table="day">
          V <br />
          <span> 2:00pm - 3:00pm </span>
        </button>

        <button className="btn quater-border-left" data-table="day">
          MON
        </button>
        <button
          className="btn full-border hover appSp"
          data-table="11"
        ></button>
        <button className="btn full-border hover" data-table="12"></button>
        <button className="btn full-border hover" data-table="13"></button>
        <button className="btn full-border hover" data-table="14"></button>
        <button className="btn quater-border-right hover" data-table="15">
          os lab
        </button>

        <button className="btn quater-border-left" data-table="day">
          TUE
        </button>
        <button className="btn full-border hover" data-table="21"></button>
        <button className="btn full-border hover" data-table="22"></button>
        <button className="btn full-border hover" data-table="23"></button>
        <button className="btn full-border hover" data-table="24"></button>
        <button
          className="btn quater-border-right hover"
          data-table="25"
        ></button>

        <button className="btn quater-border-left" data-table="day">
          WED
        </button>
        <button className="btn full-border hover" data-table="31"></button>
        <button className="btn full-border hover" data-table="32"></button>
        <button className="btn full-border hover" data-table="33"></button>
        <button className="btn full-border hover" data-table="34"></button>
        <button className="btn quater-border-right" data-table="35"></button>

        <button className="btn quater-border-left" data-table="day">
          THU
        </button>
        <button className="btn full-border hover" data-table="41"></button>
        <button className="btn full-border hover" data-table="42"></button>
        <button className="btn full-border hover" data-table="43"></button>
        <button className="btn full-border hover" data-table="44"></button>
        <button className="btn quater-border-right" data-table="45"></button>

        <button className="btn quater-border-left" data-table="day">
          FRI
        </button>
        <button className="btn full-border hover" data-table="51"></button>
        <button className="btn full-border hover" data-table="52"></button>
        <button className="btn full-border hover" data-table="53"></button>
        <button className="btn full-border hover" data-table="54"></button>
        <button className="btn quater-border-right" data-table="55"></button>

        <button className="btn half-border-bottomleft" data-table="day">
          SAT
        </button>
        <button
          className="btn quater-border-down hover"
          data-table="61"
        ></button>
        <button
          className="btn quater-border-down hover"
          data-table="62"
        ></button>
        <button className="btn quater-border-down" data-table="63"></button>
        <button className="btn quater-border-down" data-table="64"></button>
        <button
          className="btn half-border-bottomright"
          data-table="65"
        ></button>
      </div>
      {displayInfo && <Info setInfo={course} />}
    </div>
  );
};

export default Table;
