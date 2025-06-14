// models/Metal.js

const mongoose=require('mongoose');


const PriceEntrySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  price: { type: Number, required: true }
}, { _id: false });

const MetalSchema = new mongoose.Schema({
  metal: { type: String, required: true },        // e.g., 'Gold'
  country: { type: String, required: true },      // e.g., 'India'
  
  currency: { type: String, default: 'INR' },     // Optional

  prices: [PriceEntrySchema],                     // Historical data (max 60–90 days)
  
  averages: {
    avg7: { type: Number },
    avg30: { type: Number },
    avg90: { type: Number }
  },

  summaryText: { type: String },                  // "Gold price has increased steadily..."
  gptSuggestion: {
    action: { type: String, enum: ['Buy', 'Wait', 'Hold'] },
    reason: { type: String }
  },

  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Metal', MetalSchema);
