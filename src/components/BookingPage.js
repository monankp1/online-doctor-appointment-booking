import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookAppointment } from '../store/doctorSlice';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import './BookingPage.scss';

const allSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
]


const BookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { appointments, doctors } = useSelector((state) => state.appointments);


  const [doctor, setDoctor] = useState(doctors[0].id);
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');


  const handleBack = () => {
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDoctor = doctors.find((doc) => doc.id === doctor);
    const doctorName = selectedDoctor ? selectedDoctor.name : '';
    dispatch(bookAppointment({ doctor, slot, name, age, phone, doctorName }));
    setDoctor(doctors[0].id);
    setSlot('');
    setName('');
    setAge('');
    setPhone('');
    navigate('/appointment-page');
  };

  const availableSlots = allSlots.filter((timeSlot) => {
    return !appointments[doctor]?.some((appointment) => appointment.slot === timeSlot);
  });


  return (
    <div>
      <div className='top-left-btn'>
        <button onClick={handleBack}>
          <BsArrowLeft size={20} /> Back
        </button>
      </div>

      <div className='booking-details'>
        <form onSubmit={handleSubmit}>
          <label>
            Select Doctor:
            <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
              {doctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Select Slot:
            <select value={slot} onChange={(e) => setSlot(e.target.value)}>
              <option value="" disabled>Select a slot</option>
              {availableSlots.map((timeSlot, index) => (
                <option key={index} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <br />
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </label>
          <br />
          <button className='btn' type="submit" disabled={!slot || !name || !age || !phone}>Book </button>
        </form>
      </div>

    </div>

  );
}

export default BookingPage



