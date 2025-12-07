# API Authentication Demo

A refactored Express.js application demonstrating different API authentication methods.

## Features

- **No Authentication**: Fetch public resources
- **Basic Authentication**: Username/password authentication
- **API Key Authentication**: Query parameter-based authentication
- **Bearer Token Authentication**: JWT token-based authentication

## Project Structure

```
.
├── config/
│   └── config.js          # Configuration and environment variables
├── services/
│   └── apiService.js      # API service layer
├── routes/
│   └── authRoutes.js      # Route handlers
├── middleware/
│   └── errorHandler.js    # Error handling middleware
├── views/
│   └── index.ejs          # View template
├── index.js               # Main application entry point
├── .env.example           # Example environment variables
└── package.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in your credentials:
```bash
cp .env.example .env
```

3. Update `.env` with your API credentials:
```
API_USERNAME=your_username
API_PASSWORD=your_password
API_KEY=your_api_key
BEARER_TOKEN=your_bearer_token
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## Improvements Made

### Security
- ✅ Moved credentials to environment variables
- ✅ Added `.env.example` template
- ✅ Added `.gitignore` to prevent committing secrets

### Code Organization
- ✅ Separated concerns into modules (routes, services, config, middleware)
- ✅ Created reusable API service layer
- ✅ Improved error handling with dedicated middleware

### Code Quality
- ✅ Better error handling and logging
- ✅ Async/await error handling wrapper
- ✅ Improved code documentation
- ✅ More maintainable structure

### User Experience
- ✅ Enhanced UI with modern styling
- ✅ Better visual feedback for different auth types
- ✅ Responsive design
- ✅ Improved error display

## API Endpoints

- `GET /` - Home page
- `GET /noAuth` - Fetch random secret (no authentication)
- `GET /basicAuth?page=2` - Fetch secrets with basic auth
- `GET /apiKey?score=5` - Fetch secrets with API key
- `GET /bearerToken?id=2` - Fetch secret with bearer token


