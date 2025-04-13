const getBaseUrl = () => {
    if (typeof window !== "undefined") {
      // Running on the client (browser)
      return window.location.hostname === "localhost"
        ? "http://localhost:3000/api"
        : "https://backend.thanawy.com";
    }
  
    // Default fallback for SSR/server or environments without `window`
    return "https://backend.thanawy.com";
  };
  
  const BASE_URL = getBaseUrl();
  
  // جلب المواد
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
  
  // جلب الوحدات بناءً على subjectId
  export const getUnits = async (subjectId) => {
    try {
      if (!subjectId) {
        throw new Error("subjectId is required to fetch units");
      }
  
      const response = await fetch(`${BASE_URL}/subjects/${subjectId}`);
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
  