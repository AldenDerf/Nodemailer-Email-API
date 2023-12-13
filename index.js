const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT ; // Define the PORT variable

require("dotenv").config();

// Import email routes
const emailRoutes = require("./Routes/emailRoutes");

// Middleware to parse incoming JSON data
app.use(express.json());

// Mount the email routes
app.use("/email", emailRoutes);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
