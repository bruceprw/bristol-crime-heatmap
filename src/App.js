import React, { useState } from 'react';
import CrimeMap from './components/Map';
import DateSelector from './components/DateSelector';
import 'leaflet/dist/leaflet.css';
import './App.css';

const App = () => {
  const [date, setDate] = useState('2023-01-01');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-600 text-white w-full p-4 text-center shadow-md">
        <h1 className="text-2xl font-bold">Bristol Crime Heat Map</h1>
      </header>
      <main className="flex flex-col items-center w-full p-4">
        <DateSelector onDateChange={setDate} />
        <div className="w-full h-96 mt-4">
          <CrimeMap date={date} />
        </div>
      </main>
    </div>
  );
};

export default App;