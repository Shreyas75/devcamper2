const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Route Files
const bootcamps = require("./routes/bootcamps");

// Load the env Variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount the routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
