import express from "express";
import {
  fetchRandomSecret,
  fetchSecretsWithBasicAuth,
  fetchSecretsWithApiKey,
  fetchSecretWithBearerToken,
} from "../services/apiService.js";
import { asyncHandler } from "../middleware/errorHandler.js";

const router = express.Router();

/**
 * Home page route
 */
router.get("/", (req, res) => {
  res.render("index.ejs", {
    content: "API Response.",
    title: "API Authentication Demo",
  });
});

/**
 * Route: No Authentication
 * Fetches a random resource from the API without any authentication
 */
router.get(
  "/noAuth",
  asyncHandler(async (req, res) => {
    const data = await fetchRandomSecret();
    res.render("index.ejs", {
      content: JSON.stringify(data, null, 2),
      title: "No Authentication",
      authType: "none",
    });
  })
);

/**
 * Route: Basic Authentication
 * Fetches paginated data using basic authentication (username and password)
 */
router.get(
  "/basicAuth",
  asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 2;
    const data = await fetchSecretsWithBasicAuth(page);
    res.render("index.ejs", {
      content: JSON.stringify(data, null, 2),
      title: "Basic Authentication",
      authType: "basic",
    });
  })
);

/**
 * Route: API Key Authentication
 * Fetches filtered data using an API key passed as a query parameter
 */
router.get(
  "/apiKey",
  asyncHandler(async (req, res) => {
    const score = parseInt(req.query.score) || 5;
    const data = await fetchSecretsWithApiKey(score);
    res.render("index.ejs", {
      content: JSON.stringify(data, null, 2),
      title: "API Key Authentication",
      authType: "apikey",
    });
  })
);

/**
 * Route: Bearer Token Authentication
 * Fetches a specific secret using a Bearer token in the Authorization header
 */
router.get(
  "/bearerToken",
  asyncHandler(async (req, res) => {
    const secretId = parseInt(req.query.id) || 2;
    const data = await fetchSecretWithBearerToken(secretId);
    res.render("index.ejs", {
      content: JSON.stringify(data, null, 2),
      title: "Bearer Token Authentication",
      authType: "bearer",
    });
  })
);

export default router;

