import './App.css';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppointmentPage from './components/AppointmentPage';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking-page" element={<BookingPage />} />
              <Route path="/appointment-page" element={<AppointmentPage />} />
            </Routes>

          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
