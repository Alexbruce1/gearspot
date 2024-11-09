import axios from "axios";

const unsplashAPIKey = process.env.REACT_APP_UNSPLASH_API_KEY
const clientID = `Client-ID ${unsplashAPIKey}`

export const fetchImage = async (query) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        page: 1,
        query: `sports car ${query = ""}`,
      },
      headers: {
        Authorization: clientID,
      },
    });


    if (response.data && response.data.results.length > 0) {
      return response.data.results[0].urls.regular;
    } else {
      console.log("No images found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching the image:", error);
    return null;
  }
};

export const fetchCarMakes = async () => {
  try {
    const response = await axios.get('https://api.auto.dev/makes', {
      headers: {
        Authorization: clientID,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching car makes:', error);
    return [];
  }
};

export const fetchCarModels = async (make) => {
  try {
    const response = await axios.get(`https://api.auto.dev/models?make=${make}`, {
      headers: {
        Authorization: clientID,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching car models:', error);
    return [];
  }
};