import React from 'react';

const Info = ({ setInfo }) => {
  const { subject, name, faculty, slot, subjectCode, classroomLink, meetLink } =
    setInfo;
  return (
    <article className="info">
      <div className="heading">
        <h3>{subject}</h3>
        <h4 className="info-heading-name">{name}</h4>
      </div>
      <div className="body">
        <aside className="text">
          <h4 className="info-body-name">
            <span>{name}</span>
          </h4>
          <h4>
            <span>Faculty: </span>
            {faculty}
          </h4>
          <h4>
            <span>Slot: </span>
            {slot}
          </h4>
          <h4>
            <span>Code: </span>
            {subjectCode}
          </h4>
        </aside>
        <aside className="info-buttons">
          <a href={classroomLink} target="_blank" className="classroom">
            Calssroom
          </a>
          <a href={meetLink} target="_blank" className="meet">
            Meet
          </a>
        </aside>
      </div>
    </article>
  );
};

export default Info;
