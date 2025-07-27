# Weather Forecast App

This is a Node.js Express application that provides weather forecasts for a given location using the OpenWeatherMap API and OpenStreetMap geocoding.

## Project Structure

- `index.js` (main server file, in `MyProj/weather_forecast/`)
- `public/` (static assets, if any)
- `views/index.ejs` (main EJS template)
- `package.json` (dependencies)

## Prerequisites
- Node.js and npm installed
- Internet connection (for API requests)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd MyProj/weather_forecast
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   node index.js
   ```
   or (if using nodemon):
   ```bash
   npx nodemon index.js
   ```

4. **Open in browser:**
   Go to [http://localhost:3000](http://localhost:3000)

## File Locations
- Main server: `MyProj/weather_forecast/index.js`
- Views: `MyProj/weather_forecast/views/`
- Static files: `MyProj/weather_forecast/public/`

## Example Git Bash Commands
```bash
git clone <your-repo-url>
cd MyProj/weather_forecast
npm install
node index.js
```

## Notes
- Make sure to replace `<your-repo-url>` with your actual GitHub repository URL.
- The OpenWeatherMap API key is hardcoded in `index.js`. For production, use environment variables.

---
Feel free to open issues or contribute!
