const http = require('http');
require('dotenv').config();
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
}

startServer();
