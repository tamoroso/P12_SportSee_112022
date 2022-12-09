import React from "react";
import PropTypes from "prop-types";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "./PerformanceRadarChart.module.css";

const PerformanceRadarChart = ({ performanceData }) => {
  return (
    <div className={styles.wrapper}>
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            tick={{ fontSize: 12, fontWeight: 500 }}
          />
          <PolarGrid stroke="white" radialLines={false} />
          <Radar dataKey="value" fill="#FF0101B2" fillOpacity="0.7" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceRadarChart.propTypes = {};

export default PerformanceRadarChart;
