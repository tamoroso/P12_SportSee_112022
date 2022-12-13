import React from "react";
import PropTypes from "prop-types";
import styles from "./ActivityBarChart.module.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ActivityBarChart = ({ activityData }) => {
  const legendFormatter = (value) => {
    const content =
      value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)";

    return (
      <span style={{ color: "#74798C", fontSize: 14, fontWeigth: 500 }}>
        {content}
      </span>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.custom_tooltip}>
          <span>{payload[0]?.payload?.kilogram}kg</span>
          <span>{payload[0]?.payload?.calories}Kcal</span>
        </div>
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activityData}
          barCategoryGap={40}
          barGap={8}
          margin={{ top: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#DEDEDE" }}
            tickMargin={16}
            tick={{ fill: "#9B9EAC", fontWeight: 500 }}
          />
          <YAxis
            orientation="right"
            tickMargin={20}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontWeight: 500 }}
          />
          <Tooltip
            cursor={{ color: "#C4C4C4", opacity: 0.8 }}
            content={<CustomTooltip />}
            wrapperStyle={{ left: 20 }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ top: -20, color: "#74798C" }}
            formatter={legendFormatter}
          />
          <Bar dataKey="kilogram" fill="#282D30" radius={3} />
          <Bar dataKey="calories" fill="#E60000" radius={3} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityBarChart.propTypes = {
  activityData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

export default ActivityBarChart;
