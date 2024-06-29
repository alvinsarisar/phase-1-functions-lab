// Code your solution in this file!
const hq = 42;

// Calculates the distance from HQ in blocks
function distanceFromHqInBlocks(street) {
  return Math.abs(street - hq);
}

// Calculates the distance from HQ in feet (1 block = 264 feet)
function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

// Calculates the distance traveled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

// Calculates the fare price for the trip
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
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
