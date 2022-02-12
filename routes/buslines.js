import express from "express";
import { getBusLines } from "../middleware/getBusLines.js";
import { getBusStopNames } from "../middleware/getBusStopNames.js";
import DATA from "../data/response.js";

const router = express.Router();

router.get("/buslines", getBusLines, getBusStopNames, (req, res) => {
  if (process.env.NODE_ENV === "prod") {
    const { busStopNames, busLines } = req;
    busLines.map((busLine) => {
      const busStopName = busStopNames.filter(
        (busStop) =>
          busStop.StopPointNumber === busLine.JourneyPatternPointNumber
      )[0];
      busLine.StopName = busStopName;
    });
    res.json(busLines);
  } else {
    const { busLines, busStopNames } = DATA;
    busLines.map((busLine) => {
      const busStopName = busStopNames.filter(
        (busStop) =>
          busStop.StopPointNumber === busLine.JourneyPatternPointNumber
      )[0];
      busLine.StopName = busStopName;
    });
    res.json(busLines);
  }
});

export default router;
