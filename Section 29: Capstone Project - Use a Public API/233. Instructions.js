/**
 * Use A Public API - Capstone Project
 * Fetching and using public APIs (REST, JSON).
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

// Example: fetch from a public API (no key required)
const PUBLIC_APIS = {
  jsonplaceholder: "https://jsonplaceholder.typicode.com",
  dogCeo: "https://dog.ceo/api/breeds/image/random",
  randomUser: "https://randomuser.me/api/",
};

async function fetchPosts(limit = 5) {
  const res = await fetch(`${PUBLIC_APIS.jsonplaceholder}/posts?_limit=${limit}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function fetchRandomDogImage() {
  const res = await fetch(PUBLIC_APIS.dogCeo);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.message; // image URL
}

async function fetchRandomUser() {
  const res = await fetch(PUBLIC_APIS.randomUser);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.results[0];
}

// Generic fetch with error handling
async function fetchFromApi(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) return res.json();
  return res.text();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PUBLIC_APIS,
    fetchPosts,
    fetchRandomDogImage,
    fetchRandomUser,
    fetchFromApi,
  };
}
