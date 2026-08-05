import shure from "./shure";
import sennheiser from "./sennheiser";
import akg from "./akg";
import neumann from "./neumann";
import other from "./other";

const microphones = [
  ...shure,
  ...sennheiser,
  ...akg,
  ...neumann,
  ...other,
];

export default microphones;