// Importing the Express module
import express from "express"; 
// Importing the Path module for handling file paths
import path from "path"; 
// Importing the JSON data
import data from "./data/sports_data.json" assert { type: "json" }; 
// Creating an Express application
const app = express(); 
// Defining the port number for the server
const port = 3000; 

// Serve static files from the 'public' directory
app.use(express.static("public")); 
// Define a route to handle GET requests to '/api/sports'
app.get("/api/sports", (req, res) => {
  
  // Send the JSON data as a response
  res.json(data); 
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server starts
  console.log(`Server is running at http://localhost:${port}`); 
});
