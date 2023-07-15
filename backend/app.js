const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const eventsRouter = require('./routes/events');
const fundraisersRouter = require('./routes/fundraisers');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Middleware

app.use(express.json());

// Routes
app.use('/api/events', eventsRouter);
app.use('/api/fundraisers', fundraisersRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
