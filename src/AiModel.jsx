import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-pro-exp-03-25",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for location : Kashmir for 5 days with 2 people and budget of 50000, Give me the  GeoCoordinates, description in 3-4 lines and  budget tips with best time to visit and best time to book the hotel in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `json
          {
          "travelPlan": {
          "location": "Pune, Maharashtra, India",
          "duration": "2 Days",
          "people": 2,
          "budget": "₹2000 (Note: This is an extremely tight budget for 2 people for 2 days covering accommodation, food, and local travel. Requires strict adherence to budget options.)"
        },
        "bestTimeToVisit": {
          "description": "The best time to visit Pune is during the winter months, from October to February. The weather during this period is pleasant and cool, ideal for sightseeing and outdoor activities. Monsoon (June to September) brings heavy rainfall, while summer (March to June) can be quite hot."
        },
        "budgetTips": [
          "Stay in budget lodges or guesthouses near the railway station or bus stand.",
          "Utilize Pune's PMPML local buses for transport – they are very economical.",
          "Walk short distances between nearby attractions.",
          "Eat at local Maharashtrian eateries, 'Khanavals' (mess halls), or street food stalls for authentic and cheap meals (Vada Pav, Misal Pav, Poha).",
          "Prioritize free attractions like temples, parks, and walking through old city areas.",
          "Carry your own water bottle and refill it to save money.",
          "Avoid expensive restaurants, cafes, and shopping.",
          "Allocate budget strictly: Approx. ₹800-1000 for accommodation (1 night), ₹800-1000 for food (2 days), and ₹200-400 for local travel & minimal entry fees."
        ],
              
          }
        }
}
        }
`,
        },
      ],
    },
  ],
});
