export const AIPrompt = `Generate Travel Plan for Location: {location}, for {days} Days with {peoples} people with a {budget} budget, Give me a  geo coordinates, descriptions and best time to visit with description in JSON format. important note i stricly wants json data in following format :{
  "travelPlan": {
    "location": "Pune, Maharashtra, India",
    "duration": "3 Days",
    "people": 2,
    "budget": "₹1000 (Note: This budget is **critically insufficient** for 2 people for 3 days in Pune. It does not realistically cover accommodation, food, and local travel for two individuals. This plan assumes reliance on external support like staying with friends/family for free, or finding extremely basic, potentially free religious lodging (like a Dharamshala, availability and suitability not guaranteed). Food would be limited to the absolute cheapest shared street options, and travel restricted almost entirely to walking.)"
  },
  "locationDetails": {
    "geoCoordinates": {
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "description": "A 3-day trip for two people to Pune constrained by an exceedingly tight ₹1000 budget. Activities must be entirely free: exploring historical areas like the Peths on foot, visiting temple exteriors (e.g., Dagdusheth Halwai Ganpati Temple from outside), relaxing in public parks (e.g., Saras Baug, Okayama Friendship Garden - check for entry fees if any), and potentially walking around the Pune University campus. Accommodation is the biggest challenge and unlikely to be found commercially within this budget; relying on personal contacts is essential. Food options are restricted to minimal, shared, very basic street food like Vada Pav or Poha once a day. All travel would ideally be walking, with maybe one or two absolutely essential, short PMPML bus rides."
  },
  "bestTimeToVisit": {
    "description": "The best time to visit Pune, especially on such a restrictive budget requiring extensive walking, is during the winter months (October to February). The weather is cool and pleasant (typically 12°C to 30°C), making outdoor exploration comfortable. Monsoon (June to September) brings heavy rain, hindering walking, while Summer (March to May) is very hot (often exceeding 35°C), making extensive walking strenuous and unpleasant."
  }
}`