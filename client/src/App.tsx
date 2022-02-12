import React, { useEffect, useState } from "react";
import { API } from "./api/api";

import { BusLineList } from "./components/BusLineList/BusLineList";
import { BusLine } from "./models/BusLine.interface";

function App() {
  const [busLines, setBusLines] = useState<Array<any>>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let temporaryList: Array<any> = [];
    let response: Array<BusLine> = await API.getBusLines();

    //filters away one direction
    response = response.filter((busLine) => busLine.DirectionCode === "1");
    //get unique Line numbers
    let uniqueLineNumbers: any = Array.from(
      new Set(response.map((line) => line.LineNumber))
    );
    uniqueLineNumbers.map((uniqueLineNumber: string) => {
      let currentUniqueLineNumber = response.filter(
        (line) => line.LineNumber === uniqueLineNumber
      );
      temporaryList.push(currentUniqueLineNumber);
    });
    temporaryList = temporaryList
      .sort(
        (listA: Array<BusLine[]>, listB: Array<BusLine[]>) =>
          listB.length - listA.length
      )
      .slice(0, 10);
    setBusLines(temporaryList);
  };

  return (
    <div className="App">
      <h1>Bus Lines</h1>
      {busLines.length < 1 ? (
        <div>loading ... </div>
      ) : (
        <BusLineList BusLines={busLines} />
      )}
    </div>
  );
}

export default App;
