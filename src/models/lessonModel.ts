import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LessonSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    urlVideo: {
        type: String
    },
    urlImage: {
        type: String
    },
    credits: {
        type: Number
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