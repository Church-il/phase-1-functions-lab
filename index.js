// Code your solution in this file!
const scuberHqBlock = 42;
let blocks = 34;


function distanceFromHqInBlocks(blocks){
  //returns the absolute distance between the two blocks.
  return Math.abs((blocks - scuberHqBlock));
}
console.log(distanceFromHqInBlocks(blocks));



function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks)*264
}
console.log(distanceFromHqInFeet(blocks));



function distanceTravelledInFeet (start, destination){
return Math.abs(destination - start)*264
}
console.log (distanceTravelledInFeet(43, 48));
console.log (distanceTravelledInFeet(50, 60));
console.log (distanceTravelledInFeet(34, 28));


//returns the fare price based on the distance travelled.
//returns the distance traveled in feet by inheriting from our previous function above.
function calculatesFarePrice (start, destination){
  const distance = distanceTravelledInFeet(start, destination);

  //free sample for rides >= 400feet.
  //2 cents per foot for rides from 401 to 2000 feet.
  //25 dollars for rides from 2000 to 2500 feet.
  //Rides from 2501 onwards are not logged/traveled.
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
console.log(calculatesFarePrice(1, 1));
console.log(calculatesFarePrice(5, 7));
console.log(calculatesFarePrice(10, 1));
console.log(calculatesFarePrice(10, 25));































