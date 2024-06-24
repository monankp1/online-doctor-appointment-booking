// Home.js
import React from 'react';
import Header from './Header';
import About from './About';
import DoctorCard from './DoctorCard';
import { useSelector } from 'react-redux';
import './Home.scss';



const Home = () => {
    const doctors = useSelector((state) => state.appointments.doctors);

    console.log(doctors);

    return (
        <div>
            <Header />
            <div className="doctor-cards-container">
                {doctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
            <About />
        </div>
    );
};

export default Home;
