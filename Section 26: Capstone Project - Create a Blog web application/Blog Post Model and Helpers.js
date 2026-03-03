/**
 * Blog Web Application - Post Model and Helpers
 * Data structure and utility functions for a blog capstone project.
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

const blogPostSchema = {
  id: "string or number",
  title: "string",
  content: "string (full body or markdown)",
  excerpt: "string (short summary)",
  author: "string",
  createdAt: "Date or ISO string",
  updatedAt: "Date or ISO string",
  tags: "array of strings",
};

// In-memory store example (replace with DB in real app)
let posts = [];
let nextId = 1;

function createPost({ title, content, excerpt, author, tags = [] }) {
  const now = new Date().toISOString();
  const post = {
    id: nextId++,
    title,
    content,
    excerpt: excerpt || content.slice(0, 120) + "...",
    author,
    createdAt: now,
    updatedAt: now,
    tags,
  };
  posts.push(post);
  return post;
}

function getAllPosts() {
  return [...posts];
}

function getPostById(id) {
  return posts.find((p) => p.id === Number(id) || p.id === id);
}

function updatePost(id, updates) {
  const post = getPostById(id);
  if (!post) return null;
  Object.assign(post, updates, { updatedAt: new Date().toISOString() });
  return post;
}

function deletePost(id) {
  const index = posts.findIndex((p) => p.id === Number(id) || p.id === id);
  if (index === -1) return false;
  posts.splice(index, 1);
  return true;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    blogPostSchema,
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
  };
}
