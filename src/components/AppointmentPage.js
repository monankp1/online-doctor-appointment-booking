import React from 'react';
import { useSelector } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './AppointmentPage.scss';

const AppointmentPage = () => {
  const { doctors, appointments } = useSelector((state) => state.appointments);
  const navigate = useNavigate();

  const getAppointmentsForDoctor = (doctorId) => {
    return appointments[doctorId] || [];
  };

  const handleBack = () => {
    navigate('/');
  }

  return (
    <div >
      <div className='top-left-btn'>
        <button onClick={handleBack}>
          <BsArrowLeft size={20} /> Back
        </button>
      </div>

      <div className='appointment-details'>
        <h1>Appointment Page</h1>

        {doctors.map((doctor) => (
          <div key={doctor.id}>
            <h2>{doctor.name}</h2>
            <table>
              <thead>
                <tr>
                  <th>Slot</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {getAppointmentsForDoctor(doctor.id).map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.slot}</td>
                    <td>{appointment.name}</td>
                    <td>{appointment.age}</td>
                    <td>{appointment.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          </div>
        ))}
      </div>

    </div>
  );
};

export default AppointmentPage;
