class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep.";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

/** Cars are a type of vehicle with 4 wheels. */

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

/** Cars are a type of vehicle with 2 wheels. */

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
let myFirstVehicle = new vehicle("Chevy", "Cruze",2012);
console.log(myFirstVehicle.honk());
myFirstVehicle.toString();
let myFirstCar = new Car("Ford", "F150", 1998);
myFirstCar.toString();
myFirstCar.honk();
myFirstCar.numWheels;
let myFirstMotorcycle = new Motorcycle("Honda","Nighthawk",2000);
myFirstMotorcycle.toString();
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels;
let garage = new Garage(2);
garage.vehicles;
garage.add(new Car("Hyundai","Elantra",2015));
garage.vehicles;
garage.add(new Motorcycle("Honda","Nighthawk",2000));
garage.vehicles;
