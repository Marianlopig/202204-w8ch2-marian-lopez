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
  work() {}

  getRandomName(): string {
    return getRandomLetter(3) + getRandomNumber(2);
  }
}

export default RobotImpl;
