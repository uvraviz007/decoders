const mongoose = require('mongoose');

const StationSchema = new mongoose.Schema({
    stationID: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        }
    },
    availablePlatforms: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Station', StationSchema);
