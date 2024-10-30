"use client"

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';
import { AppDispatch } from '@/redux/store';
import { addBooking } from '@/redux/features/bookSlice';
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function Booking() {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [id, setId] = useState('');
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [hospital, setHospital] = useState('');

  const makeReservation = () => {
    if (name && surname && bookDate && hospital && id) {
      const item: BookingItem = {
        name,
        surname,
        id,
        bookDate: dayjs(bookDate).format("YYYY/MM/DD"),
        hospital
      };
      dispatch(addBooking(item));
      alert("Reservation submitted successfully!");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">Vaccine Reservation Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="surname"
            type="text"
            placeholder="Last Name"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            National ID Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            placeholder="National ID Number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Reservation Date
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={bookDate}
              onChange={(value) => setBookDate(value)}
              className="w-full"
            />
          </LocalizationProvider>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hospitial">
            Hospital
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hospitial"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          >
            <option value="" disabled>Select Hospital</option>
            <option value="Chulalongkorn Hospital">Chulalongkorn Hospital</option>
            <option value="Rajavithi Hospital">Rajavithi Hospital</option>
            <option value="Thammasat University Hospital">Thammasat University Hospital</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={makeReservation}
          >
            Submit Reservation
          </button>
        </div>
      </div>
    </div>
  );
}