/**
 * Error handling middleware
 * Handles errors and sends appropriate responses
 */
export function errorHandler(err, req, res, next) {
  console.error("Error:", {
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    url: req.originalUrl,
    method: req.method,
  });

  const statusCode = err.response?.status || err.statusCode || 500;
  const errorMessage = err.message || "An unexpected error occurred";
  const errorDetails = err.response?.data || null;

  // If it's an API request (JSON), send JSON response
  if (req.headers.accept?.includes("application/json")) {
    return res.status(statusCode).json({
      error: errorMessage,
      details: errorDetails,
    });
  }

  // Otherwise, render error page
  res.status(statusCode).render("index.ejs", {
    content: JSON.stringify(
      {
        error: errorMessage,
        details: errorDetails,
        status: statusCode,
      },
      null,
      2
    ),
    error: true,
  });
}

/**
 * Async handler wrapper to catch errors in async route handlers
 */
export function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}


