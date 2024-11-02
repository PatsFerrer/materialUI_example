import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

// Material chart options
const options = {
  title: "Population of Largest U.S Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  colors: ['rgb(53,138,148)', 'rgb(40,34,70)']
};

export default function HBarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height='270px'
      data={data}
      options={options}
    />
  );
}
