import axios from "axios";

export const getBusLines = async (req, res, next) => {
  if (process.env.NODE_ENV === "prod") {
    console.log("process: ", process.env.NODE_ENV);
    const requestURL = `https://api.sl.se/api2/LineData.json?model=jour&key=${process.env.SL_API_KEY}&DefaultTransportModeCode=BUS`;
    const response = await axios
      .get(requestURL)
      .then((data) => {
        return data.data.ResponseData.Result;
      })
      .catch((error) => console.log(error));
    req.busLines = response;
  }
  next();
};
