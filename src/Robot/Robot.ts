import { getRandomLetter, getRandomNumber } from "../utils/RandomUtils";

type RobotType = "cleaner" | "waiter" | "developer";

interface Robot {
  name: string;
  type: RobotType;
  battery: number;
  reset: () => void;
  work: () => void;
}

class RobotImpl implements Robot {
  name;
  type;
  battery;
  constructor(type: RobotType) {
    this.name = this.getRandomName();
    this.type = type;
    this.battery = 100;
  }
  reset() {
    this.battery = 100;
    this.name = this.getRandomName();
  }
  work() {
    switch (this.type) {
      case "cleaner":
        console.log("Larala larita, I clean my little house");
        break;
      case "developer":
        console.log(
          "JavaScript is cool - I develop with JavaScript -> I'm cool"
        );
        break;
      case "waiter":
        console.log("Do you feel like a mini of fuet?");
        break;
    }
  }

  getRandomName(): string {
    return getRandomLetter(3) + getRandomNumber(2);
  }
}

export default RobotImpl;
