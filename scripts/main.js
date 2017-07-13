/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  let total = 0;
  console.log(hand);
  for (var i = 0; i < hand.length; i++) {

    if (isNaN(hand[i])) {
      if (hand[i] != 'A') {
        total += 10;
      }
    } else {
      total += +hand[i];
    }
  }
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === 'A') {
      if (total > 11) {
        total += 1;
      } else {
        total += 11;
      }
    }
  }
  console.log(total);
  return total;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
