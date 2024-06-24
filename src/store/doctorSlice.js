import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: [
    {
      id: '1',
      name: 'Dr. Sudhis',
      specialty: 'Child Specialist',
      image:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    },
    {
      id: '2',
      name: 'Dr. Rohan',
      specialty: 'General Physician',
      image:
        'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    },
    {
      id: '3',
      name: 'Dr. Priya',
      specialty: 'Gynaecologist',
      image:
        'https://t4.ftcdn.net/jpg/03/20/74/45/360_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg',
    },
    {
      id: '4',
      name: 'Dr. Ramesh',
      specialty: 'Orthopedic',
      image:
        'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
    },
    {
      id: '5',
      name: 'Dr. Suresh',
      specialty: 'Dermatologist',
      image:
        'https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg',
    },
  ],
  appointments: {

  },
};

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    bookAppointment: (state, action) => {
      const { doctor, slot, name, age, phone, doctorName } = action.payload;
      if (!state.appointments[doctor]) {
        state.appointments[doctor] = [];
      }
      state.appointments[doctor].push({ slot, name, age, phone, doctorName });
    },
  },
});

export const { bookAppointment } = doctorSlice.actions;

export default doctorSlice.reducer;
