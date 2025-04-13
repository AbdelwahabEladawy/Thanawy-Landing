const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
const BASE_URL = isLocal ? "/api" : "https://backend.thanawy.com";

export const getSubjects = async () => {
  try {
    const response = await fetch(`${BASE_URL}/subjects`);
    if (!response.ok) {
      throw new Error("Failed to fetch subjects");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error details:", error);
    throw error;
  }
};

export const getUnits = async () => {
  try {
    const response = await fetch(`${BASE_URL}/subjects/6a345cc6-d251-423a-9712-81c89662d4e9`);
    if (!response.ok) {
      throw new Error("Failed to fetch units");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error details:", error);
    throw error;
  }
};
