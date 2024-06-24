import React from 'react';
import './DoctorCard.scss';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <div>
        <h2>{doctor.name}</h2>
        <p>{doctor.specialty}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
