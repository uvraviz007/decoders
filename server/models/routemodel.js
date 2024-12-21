const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    routeID: {
        type: String,
        required: true,
        unique: true,
    },
    startStation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Station',
        required: true,
    },
    endStation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Station',
        required: true,
    },
    stationList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Station',
        }
    ]
});

module.exports = mongoose.model('Route', RouteSchema);
