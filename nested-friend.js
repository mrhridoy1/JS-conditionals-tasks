/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 

    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.

    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myScore = 85;
const friendScore = 59;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("Go for a lunch");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("good luck next time");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("keep your friend's message unseen");
  } else if (friendScore < 40) {
    console.log("Ja sala tui block kha");
  }
} else if (myScore < 40) {
  console.log("Det bal amio jay halka hisu kore ghumiye thaki");
}
