import RobotImpl from "./Robot/Robot";
import createRobot from "./Robot/RobotFactory";

const robot = createRobot("developer");
const robot2 = createRobot("cleaner");
const robot3 = createRobot("waiter");
console.log(robot.name);
console.log(robot.battery);
console.log(robot.type);

robot.reset();

console.log(robot.name);
console.log(robot.battery);
console.log(robot.type);

robot.work();
