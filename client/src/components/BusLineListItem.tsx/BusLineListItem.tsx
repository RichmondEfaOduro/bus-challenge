import React, { useState } from "react";
import styles from "./BusLineListItem.module.css";
import { BusLine } from "../../models/BusLine.interface";

interface BusLineListProps {
  BusLines: Array<BusLine>;
}

const BusLineListItem = ({ BusLines }: BusLineListProps) => {
  const [open, setOpen] = useState<Boolean>(false);
  const handleOpen: React.MouseEventHandler<HTMLDivElement> = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={
          open ? `${styles.container} ${styles.open}` : `${styles.container}`
        }
        onClick={handleOpen}
      >
        <div>{BusLines[0].LineNumber}</div>
        <div>{BusLines.length}</div>
        <div>{BusLines[0].StopName?.StopPointName}</div>
        <div>{BusLines[BusLines.length - 1].StopName?.StopPointName}</div>
      </div>
      {open && (
        <div className={styles.childContainer}>
          {BusLines.map((busLine: BusLine, index: number) => {
            return (
              <div
                className={styles.busLineItem}
                key={busLine.LineNumber + "_" + index}
              >
                {busLine?.StopName?.StopPointName}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BusLineListItem;
