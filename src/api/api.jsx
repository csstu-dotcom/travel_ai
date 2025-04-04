
import { AIPrompt } from "../components/option";
import { chatSession } from "../AiModel";
import axios from "axios";

export const getData = async (data) => {
  try {
    const FinalPrompt = AIPrompt.replace("{location}", data.destination.label)
      .replace("{days}", data.days)
      .replace("{peoples}", data.people)
      .replace("{budget}", data.budget);

    console.log(FinalPrompt);

    const result = await chatSession.sendMessage(FinalPrompt);
    return result
  } catch (error) {
    return error;
  }
};

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-key":
            "03f869451dmshc91238c7dc8ef29p1cd498jsne52e633d0ca9",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    // console.log(process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        "https://community-open-weather-map.p.rapidapi.com/find",
        {
          params: { lat, lon: lng },
          headers: {
            "x-rapidapi-key":
              "03f869451dmshc91238c7dc8ef29p1cd498jsne52e633d0ca9",
            "x-rapidapi-host": "open-weather13.p.rapidapi.com",
          },
        }
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
