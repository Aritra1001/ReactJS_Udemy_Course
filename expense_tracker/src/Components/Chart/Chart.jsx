import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //This will return an array of data point numbers
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <>
      <div className="chart">
        {props.dataPoints.map((dataPoint) => {
          return (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaximum}
              label={dataPoint.label}
            />
          );
        })}
      </div>
    </>
  );
};

export default Chart;
