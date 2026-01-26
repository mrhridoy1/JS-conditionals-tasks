/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 60;
const isStudent = false;
const ticketPrice = 800;

if (age < 10) {
  console.log("Hi babu! You don`t need to buy a bus ticket ");
} else if (!!isStudent) {
  const ticketDis = (ticketPrice * 50) / 100;
  const ticket = ticketPrice - ticketDis;
  console.log(ticket);
} else if (age >= 60) {
  const seniorDis = (ticketPrice * 15) / 100;
  const seniorCitizen = ticketPrice - seniorDis;
  console.log(seniorCitizen);
} else {
  console.log("ticket fare 800 tk");
}
