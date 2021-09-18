function carPassing(cars, speed) {
  let object = {
    time : Date.now(),
    speed : 0
  }
  object.speed = speed;
  cars.push(object);
  return cars;
}

const speed = 38;

console.log(carPassing(cars, speed));