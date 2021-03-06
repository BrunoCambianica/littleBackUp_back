import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a first name'
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    coursesTime: {
        type: Number
    },
    role: {
        type: String
    },
    photo: {
        type: String
    },
    credits: {
        type: Number
    },
    participatedLessons: {
        type: Array
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});