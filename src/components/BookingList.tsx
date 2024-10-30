"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { removeBooking } from '@/redux/features/bookSlice';

interface BookingItem {
  name: string;
  surname: string;
  id: string;
  hospital: string;
  bookDate: string;
}

export default function BookingList() {
  const bookings = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  const handleCancelBooking = (booking: BookingItem) => {
    dispatch(removeBooking(booking.id));
  };

  if (!bookings || bookings.length === 0) {
    return <div className="text-center text-gray-500 mt-4 text-lg">No Vaccine Booking</div>;
  }

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-teal-600">Your Vaccine Bookings</h2>
      {bookings.map((booking, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl p-6 mb-4 border border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <p><span className="font-semibold text-gray-700">Name:</span> {booking.name} {booking.surname}</p>
            <p><span className="font-semibold text-gray-700">National ID:</span> {booking.id}</p>
            <p><span className="font-semibold text-gray-700">Hospital:</span> {booking.hospital}</p>
            <p><span className="font-semibold text-gray-700">Date:</span> {booking.bookDate}</p>
          </div>
          <button
            onClick={() => handleCancelBooking(booking)}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
}