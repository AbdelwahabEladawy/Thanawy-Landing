const BASE_URL = "https://backend.thanawy.com"
export const getSubjects = async () => {
  try {
   
    const response = await fetch('/api/subjects')

    if (!response.ok) {
      throw new Error("")
    }

    const data = await response.json()
     return data
  } catch (error) {
    console.error("Fetch error details:", error)
    throw error
  }
}
export const getUnits = async () => {
    
  try {
   
    const response = await fetch('/api/subjects/6a345cc6-d251-423a-9712-81c89662d4e9')

    if (!response.ok) {
      throw new Error("")
    }

    const data = await response.json()
     return data
  } catch (error) {
    console.error("Fetch error details:", error)
    throw error
  }
}
