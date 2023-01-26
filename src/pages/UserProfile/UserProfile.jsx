import React from "react";
import { useParams } from "react-router-dom";
import { Badge, Spinner } from "../../components";
import styles from "./UserProfile.module.css";
import {
  ActivityBarChart,
  AverageSessionsLineChart,
  PerformanceRadarChart,
  ScoreRadialChart,
} from "../../components/Charts";
import useUserData from "../../hooks/useUserData";

const UserProfile = () => {
  const { userId } = useParams();
  const {
    isLoading,
    currentUserData,
    activityData,
    averageSessionsData,
    performanceData,
    scoreData,
    KeyDataFormated,
    hasFetchError,
  } = useUserData(userId);

  if (hasFetchError) {
    return (
      <p className={styles.nodata_error}>
        Veuillez nous excuser !<br /> Nos services rencontrent un problème,
        rechargez la page ou revenez plus tard.
      </p>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <>
        <h1>
          Bonjour <span>{currentUserData?.userInfos?.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </>
      <div className={styles.dashboard}>
        <div className={styles.main_charts}>
          <ActivityBarChart activityData={activityData} />
          <div className={styles.small_charts_wrapper}>
            <AverageSessionsLineChart
              averageSessionsData={averageSessionsData}
            />
            <PerformanceRadarChart performanceData={performanceData} />

            <ScoreRadialChart scoreData={scoreData} />
          </div>
        </div>
        <aside>
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
        </aside>
      </div>
    </div>
  );
};

export default UserProfile;
