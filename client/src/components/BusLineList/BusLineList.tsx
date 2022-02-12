import React from "react";
import { BusLine } from "../../models/BusLine.interface";
import BusLineListItem from "../BusLineListItem.tsx/BusLineListItem";
import styles from "./BusLineList.module.css";

interface BusLineListProps {
  BusLines: Array<BusLine[]>;
}

export const BusLineList = ({ BusLines }: BusLineListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.table__header}>
        <div>Linje</div>
        <div>Antal stopp</div>
        <div>Start</div>
        <div>Slut</div>
      </div>
      <>
        {BusLines.length &&
          BusLines.map((busline: Array<BusLine>, index: number) => (
            <BusLineListItem key={index} BusLines={busline} />
          ))}
      </>
    </div>
  );
};
