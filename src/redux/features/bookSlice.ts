import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const existingBookingIndex = state.bookItems.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.hospital === action.payload.hospital
      );
      
      if (existingBookingIndex === -1) {
        state.bookItems.push(action.payload);
      } else {
        state.bookItems[existingBookingIndex] = action.payload;
      }
    },
    removeBooking: (state, action: PayloadAction<string>) => {
      state.bookItems = state.bookItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;