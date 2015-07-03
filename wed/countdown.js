'use strict'


function blastoff() {
 var second = 5;
 var intervalId = setInterval(function () {
   if (second == 0) {
     console.log("Blast Off!!!!");
     clearInterval(intervalId);
   } else {
     console.log(second);
     second -= 1;
   }
 }, 1000);
}

blastoff();
// blastoff(countdown, 50000);