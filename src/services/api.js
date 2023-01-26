import axios from "axios";

/**
 * build the api url based on local environment variable and user ID
 * @param {string} userId the user ID to integrate to the request
 * @returns {string} the built api url
 */
const buildApiUrl = (userId) => {
  const appEnvironment = process.env.REACT_APP_ENVIRONMENT;
  const isDevEnv = appEnvironment === "dev";
  const baseUrl = isDevEnv ? "/mock/user" : "http://localhost:3000/user";

  return {
    fetchUserDataUrl: `${baseUrl}/${userId}${
      isDevEnv ? "/main_data.json" : ""
    }`,
    fetchUserActivityUrl: `${baseUrl}/${userId}/${
      isDevEnv ? "activity.json" : "activity"
    }`,
    fetchUserAverageSessionsUrl: `${baseUrl}/${userId}/${
      isDevEnv ? "average_sessions.json" : "average-sessions"
    }`,
    fetchUserPerformanceUrl: `${baseUrl}/${userId}/${
      isDevEnv ? "performance.json" : "performance"
    }`,
  };
};

/**
 * fetch main user data based on user ID
 * @param {string} userId the user ID to integrate to the request
 * @returns {object} the data object of the response
 */
export const fetchUserData = async (userId) => {
  try {
    if (!userId) {
      throw new Error(
        "mockedApi.js/fetchUserData error :: userId must be provided"
      );
    }
    const { fetchUserDataUrl } = buildApiUrl(userId);
    const response = await axios.get(fetchUserDataUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * fetch activity data based on user ID
 * @param {string} userId the user ID to integrate to the request
 * @returns {object} the data object of the response
 */
export const fetchUserActivity = async (userId) => {
  try {
    if (!userId) {
      throw new Error(
        "mockedApi.js/fetchUserActivity error :: userId must be provided"
      );
    }
    const { fetchUserActivityUrl } = buildApiUrl(userId);
    const response = await axios.get(fetchUserActivityUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * fetch average sessions data based on user ID
 * @param {string} userId the user ID to integrate to the request
 * @returns {object} the data object of the response
 */
export const fetchUserAverageSessions = async (userId) => {
  try {
    if (!userId) {
      throw new Error(
        "mockedApi.js/fetchUserAverageSessions error :: userId must be provided"
      );
    }
    const { fetchUserAverageSessionsUrl } = buildApiUrl(userId);
    const response = await axios.get(fetchUserAverageSessionsUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * fetch performance data based on user ID
 * @param {string} userId the user ID to integrate to the request
 * @returns {object} the data object of the response
 */
export const fetchUserPerformance = async (userId) => {
  try {
    if (!userId) {
      throw new Error(
        "mockedApi.js/fetchUserPerformance error :: userId must be provided"
      );
    }
    const { fetchUserPerformanceUrl } = buildApiUrl(userId);
    const response = await axios.get(fetchUserPerformanceUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
