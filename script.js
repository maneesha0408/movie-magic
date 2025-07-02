const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

updateTotal();

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (!seat.classList.contains('occupied')) {
      seat.classList.toggle('selected');
      updateTotal();
    }
  });
});

movieSelect.addEventListener('change', updateTotal);

function updateTotal() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatCount = selectedSeats.length;
  const ticketPrice = +movieSelect.value;
  count.innerText = seatCount;
  total.innerText = seatCount * ticketPrice;
}

document.getElementById('bookBtn').addEventListener('click', () => {
  alert('🎉 Booking confirmed!\nEnjoy your movie!');
});