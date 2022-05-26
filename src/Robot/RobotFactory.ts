import RobotImpl, { Robot, RobotType } from "./Robot";

const createRobot = (type: RobotType): Robot => {
  return new RobotImpl(type);
};

export default createRobot;
