const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
    trainID: {
        type: String,
        required: true,
        unique: true,
    },
    route: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Route',
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    platformAssignments: [
        {
            stationID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Station',
            },
            platformNumber: {
                type: Number,
                required: true,
            }
        }
    ]
});

module.exports = mongoose.model('Train', TrainSchema);
