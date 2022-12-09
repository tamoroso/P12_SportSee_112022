import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "../../components";
import { fetchUserData, fetchUserPerformance } from "../../services/api";
import styles from "./UserProfile.module.css";
import { ReactComponent as Energy } from "../../assets/icons/energy.svg";
import { ReactComponent as Chicken } from "../../assets/icons/chicken.svg";
import { ReactComponent as Apple } from "../../assets/icons/apple.svg";
import { ReactComponent as Cheeseburger } from "../../assets/icons/cheeseburger.svg";
import {
  PerformanceRadarChart,
  ScoreRadialChart,
} from "../../components/Charts";

const UserProfile = () => {
  const { userId } = useParams();
  const [currentUserData, setCurrentUserData] = useState();
  const [currentPerformanceData, setCurrentPerformanceData] = useState();

  useEffect(() => {
    fetchUserData(userId).then((res) => setCurrentUserData(res));
  }, [userId]);

  useEffect(() => {
    fetchUserPerformance(userId).then((res) => setCurrentPerformanceData(res));
  }, [userId]);

  const KeyDataFormated = useMemo(() => {
    const keyDataFormat = {
      calorieCount: {
        color: "#FF0000",
        unit: "kCal",
        icon: <Energy />,
        label: "Calories",
      },
      proteinCount: {
        color: "#4AB8FF",
        unit: "g",
        icon: <Chicken />,
        label: "Proteines",
      },
      carbohydrateCount: {
        color: "#FDCC0C",
        unit: "g",
        icon: <Apple />,
        label: "Glucides",
      },
      lipidCount: {
        color: "#FD5181",
        unit: "g",
        icon: <Cheeseburger />,
        label: "Lipides",
      },
    };
    if (currentUserData) {
      return Object.keys(currentUserData.keyData).reduce((acc, key) => {
        acc.push({
          badgeData: `${currentUserData.keyData[key]}${keyDataFormat[key].unit}`,
          badgeLabel: keyDataFormat[key].label,
          badgeIcon: keyDataFormat[key].icon,
          badgeColor: keyDataFormat[key].color,
        });
        return acc;
      }, []);
    }
  }, [currentUserData]);

  const scoreData = useMemo(() => {
    if (currentUserData) {
      return [
        {
          label: "Score",
          value: currentUserData.todayScore,
          fill: "#FF0000",
        },
      ];
    }
  }, [currentUserData]);

  const performanceData = useMemo(() => {
    if (currentPerformanceData) {
      const performanceKindMapping = {
        cardio: "Cardio",
        energy: "Energie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité",
      };
      return currentPerformanceData?.data.reduce((acc, item) => {
        acc.unshift({
          value: item.value,
          kind: performanceKindMapping[currentPerformanceData.kind[item.kind]],
        });
        return acc;
      }, []);
    }
  }, [currentPerformanceData]);

  useEffect(() => {
    if (currentPerformanceData) {
      console.log(currentPerformanceData);
      console.log(performanceData);
    }
  }, [currentPerformanceData]);

  return (
    <>
      {currentUserData && (
        <h1>Bonjour, {currentUserData?.userInfos?.firstName}</h1>
      )}
      <ul className={styles.badges_wrapper}>
        {KeyDataFormated &&
          KeyDataFormated.map((key, index) => (
            <Badge
              badgeLabel={key.badgeLabel}
              badgeData={key.badgeData}
              badgeIcon={key.badgeIcon}
              badgeColor={key.badgeColor}
              key={index}
            />
          ))}
      </ul>
      {/* {scoreData && <ScoreRadialChart scoreData={scoreData} />} */}
      {performanceData && (
        <PerformanceRadarChart performanceData={performanceData} />
      )}
    </>
  );
};

export default UserProfile;
