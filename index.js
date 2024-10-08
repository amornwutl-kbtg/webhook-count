const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Initialize a counter to track the number of webhook calls
let webhookCount = 0;

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Webhook route
app.post('/webhook', (req, res) => {
    // Increment the webhook counter
    webhookCount++;

    // Log the request body for debugging purposes
    console.log("Webhook received:", req.body);

    // Respond with the current count of webhook calls
    res.json({
        message: "Webhook received",
        count: webhookCount
    });
});

// Route to get the current webhook count
app.get('/webhook-count', (req, res) => {
    res.json({
        count: webhookCount
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
