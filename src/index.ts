import RobotImpl from "./Robot/Robot";

const robot = new RobotImpl("cleaner");

console.log(robot.name);
console.log(robot.battery);
console.log(robot.type);

robot.reset();

console.log(robot.name);
console.log(robot.battery);
console.log(robot.type);

robot.work();
