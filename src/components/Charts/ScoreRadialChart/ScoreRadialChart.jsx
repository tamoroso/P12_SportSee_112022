import React from "react";
import PropTypes from "prop-types";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "./ScoreRadialChart.module.css";

const ScoreRadialChart = ({ scoreData }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Score</h2>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="90%"
          outerRadius="100%"
          data={scoreData}
          startAngle={180}
          endAngle={-180}
          barSize={20}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            data={[scoreData[0]]}
            cornerRadius={30 / 2}
          />
          <circle cx="50%" cy="50%" r="38%" fill="white" />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            <tspan x="50%" fontSize={26} fontWeight="700" fill="#282D30">
              {scoreData[0].value * 100}%
            </tspan>
            <tspan
              x="50%"
              dy="1.7em"
              fontWeight="500"
              fontSize={16}
              fill="#74798C"
            >
              de votre
            </tspan>
            <tspan
              x="50%"
              dy="1em"
              fontWeight="500"
              fontSize={16}
              fill="#74798C"
            >
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

ScoreRadialChart.propTypes = {};

export default ScoreRadialChart;
