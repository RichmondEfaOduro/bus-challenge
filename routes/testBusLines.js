import express from "express";
import SMALLDATA from "../data/smallResponse.js";

const router = express.Router();

router.get("/testbuslines", (req, res) => {
  const { busLines, busStopNames } = SMALLDATA;
  busLines.map((busLine) => {
    const busStopName = busStopNames.filter(
      (busStop) => busStop.StopPointNumber === busLine.JourneyPatternPointNumber
    )[0];
    busLine.StopName = busStopName;
  });
  res.json(SMALLDATA.busLines);
});

export default router;
