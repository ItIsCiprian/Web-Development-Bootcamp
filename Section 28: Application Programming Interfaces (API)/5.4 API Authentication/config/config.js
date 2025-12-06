import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  apiUrl: process.env.API_URL || "https://secrets-api.appbrewery.com",
  credentials: {
    username: process.env.API_USERNAME || "",
    password: process.env.API_PASSWORD || "",
    apiKey: process.env.API_KEY || "",
    bearerToken: process.env.BEARER_TOKEN || "",
  },
};

