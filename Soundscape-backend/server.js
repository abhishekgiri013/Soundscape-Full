const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // ✅ Import CORS
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();

// ✅ Enable CORS for all origins
app.use(cors());

app.use(express.json());

// ✅ Connect to MongoDB Atlas using .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Use API Routes
app.use('/api', apiRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
