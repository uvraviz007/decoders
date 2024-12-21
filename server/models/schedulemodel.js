const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    trainID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Train',
        required: true,
    },
    stationID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Station',
        required: true,
    },
    arrivalTime: {
        type: Date,
        required: true,
    },
    departureTime: {
        type: Date,
        required: true,
    },
    delay: {
        type: Number, // delay in minutes
        default: 0,
    }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
