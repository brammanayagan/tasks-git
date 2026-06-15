import React, { useState } from "react";

export default function MovieTicketBooking() {
  const [movie, setMovie] = useState("Leo");
  const [seats, setSeats] = useState(1);
  const [total, setTotal] = useState(0);

  const handleBook = () => {
    let price = 0;

    if (movie === "Leo") {
      price = 150;
    } else if (movie === "GOAT") {
      price = 180;
    } else if (movie === "Coolie") {
      price = 200;
    }

    setTotal(price * seats);
  };

  return (
    <div>
      <h2>Movie Ticket Booking</h2>

      <label>Movie:</label>
      <select
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      >
        <option value="Ayan">Leo</option>
        <option value="Karuppu">GOAT</option>
        <option value="S47">Coolie</option>
      </select>

      <br />
      <br />

      <label>Seats:</label>
      <input
        type="number"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleBook}>
        Book Ticket
      </button>

      <h3>Booking Details</h3>
      <p>Movie: {movie}</p>
      <p>Seats: {seats}</p>
      <p>Total Amount: ₹{total}</p>
    </div>
  );
}