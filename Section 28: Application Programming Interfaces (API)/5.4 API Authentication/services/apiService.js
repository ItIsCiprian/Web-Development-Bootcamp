import axios from "axios";
import { config } from "../config/config.js";

const API_URL = config.apiUrl;

/**
 * Fetches a random resource without authentication
 * @returns {Promise<Object>} API response data
 */
export async function fetchRandomSecret() {
  const response = await axios.get(`${API_URL}/random`);
  return response.data;
}

/**
 * Fetches paginated secrets using basic authentication
 * @param {number} page - Page number to fetch
 * @returns {Promise<Object>} API response data
 */
export async function fetchSecretsWithBasicAuth(page = 2) {
  const { username, password } = config.credentials;
  
  if (!username || !password) {
    throw new Error("Basic auth credentials are not configured");
  }

  const response = await axios.get(`${API_URL}/all`, {
    params: { page },
    auth: {
      username,
      password,
    },
  });
  
  return response.data;
}

/**
 * Fetches filtered secrets using API key authentication
 * @param {number} score - Minimum score filter
 * @returns {Promise<Object>} API response data
 */
export async function fetchSecretsWithApiKey(score = 5) {
  const { apiKey } = config.credentials;
  
  if (!apiKey) {
    throw new Error("API key is not configured");
  }

  const response = await axios.get(`${API_URL}/filter`, {
    params: {
      score,
      apiKey,
    },
  });
  
  return response.data;
}

/**
 * Fetches a specific secret using Bearer token authentication
 * @param {number} secretId - ID of the secret to fetch
 * @returns {Promise<Object>} API response data
 */
export async function fetchSecretWithBearerToken(secretId = 2) {
  const { bearerToken } = config.credentials;
  
  if (!bearerToken) {
    throw new Error("Bearer token is not configured");
  }

  const response = await axios.get(`${API_URL}/secrets/${secretId}`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
  
  return response.data;
}


