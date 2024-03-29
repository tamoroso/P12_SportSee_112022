import React, { useEffect, useMemo, useState } from "react";
import {
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserData,
  fetchUserPerformance,
} from "../services/api";
import { ReactComponent as Energy } from "../assets/icons/energy.svg";
import { ReactComponent as Chicken } from "../assets/icons/chicken.svg";
import { ReactComponent as Apple } from "../assets/icons/apple.svg";
import { ReactComponent as Cheeseburger } from "../assets/icons/cheeseburger.svg";
import {
  ActivityData,
  AverageSessions,
  MainData,
  PerformanceData,
} from "../classes/UserData";

const useUserData = (userId) => {
  const [currentUserData, setCurrentUserData] = useState();
  const [currentPerformanceData, setCurrentPerformanceData] = useState();
  const [currentAverageSessions, setCurrentAverageSessions] = useState();
  const [currentActivityData, setCurrentActivityData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetchError, setHasFetchError] = useState(false);

  useEffect(() => {
    fetchUserData(userId)
      .then((res) => setCurrentUserData(new MainData(res)))
      .catch((error) => {
        setHasFetchError(true);
        console.error(`useUserData::Fetch user data error : ${error}`);
      });
    fetchUserActivity(userId)
      .then((res) => setCurrentActivityData(new ActivityData(res)))
      .catch((error) => {
        setHasFetchError(true);
        console.error(`useUserData::Fetch user activity data error : ${error}`);
      });
    fetchUserPerformance(userId)
      .then((res) => {
        console.log(res);
        setCurrentPerformanceData(new PerformanceData(res));
      })
      .catch((error) => {
        setHasFetchError(true);
        console.error(`useUserData::Fetch user performance error : ${error}`);
      });
    fetchUserAverageSessions(userId)
      .then((res) => setCurrentAverageSessions(new AverageSessions(res)))
      .catch((error) => {
        setHasFetchError(true);
        console.error(
          `useUserData::Fetch user average session error : ${error}`
        );
      });
  }, [userId]);

  useEffect(() => {
    setIsLoading(
      !(
        currentUserData &&
        currentPerformanceData &&
        currentActivityData &&
        currentAverageSessions
      )
    );
  }, [
    currentUserData,
    currentPerformanceData,
    currentActivityData,
    currentAverageSessions,
  ]);

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
      console.log(currentPerformanceData);
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

  const averageSessionsData = useMemo(() => {
    if (currentAverageSessions) {
      const averageSessionsDayMapping = {
        1: "L",
        2: "M",
        3: "M",
        4: "J",
        5: "V",
        6: "S",
        7: "D",
      };
      return currentAverageSessions?.sessions.reduce((acc, item) => {
        acc.push({
          day: averageSessionsDayMapping[item.day],
          sessionLength: item.sessionLength,
        });

        return acc;
      }, []);
    }
  }, [currentAverageSessions]);

  const activityData = useMemo(() => {
    if (currentActivityData) {
      return currentActivityData?.sessions.map((element) => {
        const date = new Date(element?.day);
        return { ...element, day: date.getDate() };
      });
    }
  }, [currentActivityData]);

  return {
    currentUserData,
    activityData,
    averageSessionsData,
    performanceData,
    scoreData,
    KeyDataFormated,
    isLoading,
    hasFetchError,
  };
};

export default useUserData;
