import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import styles from "./AverageSessionsLineChart.module.css";

const AverageSessionsLineChart = ({ averageSessionsData }) => {
  const wrapperRef = useRef(null);

  const customMouseEnter = (e) => {
    const wrapper = wrapperRef.current;
    if (e.isTooltipActive) {
      let windowWidth = wrapper.offsetWidth;
      let mouseXpercent = Math.floor(
        (e.activeCoordinate.x / windowWidth) * 100
      );

      wrapper.style.background = `linear-gradient(90deg, #ff0000 ${mouseXpercent}%, #E60000 ${mouseXpercent}%, #E60000 100%)`;
    } else {
      wrapper.removeAttribute("style");
    }
  };

  const customMouseOut = () => {
    const wrapper = wrapperRef.current;
    wrapper.removeAttribute("style");
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.custom_tooltip}>
          {payload[0].payload.sessionLength} min
        </div>
      );
    }

    return null;
  };

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={averageSessionsData}
          margin={{ bottom: 105, right: 15, left: 15 }}
          onMouseMove={(e) => customMouseEnter(e)}
          onMouseOut={customMouseOut}
        >
          <defs>
            <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="white" stopOpacity="40%" />
              <stop offset="100%" stopColor="white" stopOpacity="100%" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "white", opacity: 0.5 }}
            tickMargin={20}
          />
          <Line
            dataKey="sessionLength"
            dot={false}
            type="natural"
            stroke="url(#lgrad)"
            strokeWidth={2}
            activeDot={{
              stroke: "#ffffff30",
              strokeWidth: 10,
              r: 3.5,
              fill: "#ffffff",
            }}
          />
          <Tooltip cursor={false} content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// TODO: DEFINE PROPTYPES
AverageSessionsLineChart.propTypes = {};

export default AverageSessionsLineChart;
