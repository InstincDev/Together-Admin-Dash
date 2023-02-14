const mongoose = require("mongoose");

const STRING_MAX_LENGTH = 280;
// Event's starting date should be less than (strictly) EVENT_MAX_DATE
const EVENT_MAX_DATE = "2024-01-01";
// Recurring events should span no more than MAX_RECURRENCE_PERIOD number of days
const MAX_RECURRENCE_PERIOD = 90;
const DAYS_OF_WEEK = ["1", "2", "3", "4", "5", "6", "0"];

const EventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            maxLength: STRING_MAX_LENGTH,
            require: true,
        },
        description: {
            type: String,
            trim: true,
            maxLength: STRING_MAX_LENGTH,
            require: true,
        },
        startAt: {
            type: Date,
            require: true,
            // validate: {
            //     validator: function (value) {
            //         const greateThanToday = value > new Date() - 1000 * 60 * 60 * 26;
            //         const limitTo2023 = value < new Date("2024-01-01");
            //         return greateThanToday && limitTo2023;
            //       },
            // },
        },
        endAt: {
            type: Date,
            require: true,
            // validate: {
            //     validate: {
            //         validator: function (value) {
            //           return value > this.startAt;
            //         },
            //         message: "should be greater than 'startAt' field",
            //       },
            // },
        },
        location: {
            type: String,
            require: true,
            maxLength: STRING_MAX_LENGTH,
            require: true,
        },
        user: {
            type: mongoose.SchemaTypes.ObjectId, // User: is the ObjectId of author user
            require: true,
            ref: "User",
        },
        groupId: {
            type: String,
        },
        rsvpList: [{ type: mongoose.SchemaTypes.ObjectId }],
    },
    { timestamps: true }
);
module.exports = mongoose.model("Event", EventSchema);