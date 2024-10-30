import BookingList from '@/components/BookingList';

export default function MyBooking() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-teal-600">Vaccine Booking System</h1>
      <BookingList />
    </div>
  );
}