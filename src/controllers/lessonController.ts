import * as mongoose from 'mongoose';
import { LessonSchema } from '../models/lessonModel';
import { Request, Response } from 'express';

const Lesson = mongoose.model('Lesson', LessonSchema);

export class LessonController{

    public addNewLesson (req: Request, res: Response) {                
        let newLesson = new Lesson(req.body);
    
        newLesson.save((err, lesson) => {
            if(err){
                res.send(err);
            }    
            res.json(lesson);
        });
    }

    public getLessons (req: Request, res: Response) {           
        Lesson.find({}, (err, lesson) => {
            if(err){
                res.send(err);
            }
            res.json(lesson);
        });
    }

    public getLessonWithID (req: Request, res: Response) {           
        Lesson.findById(req.params.lessonId, (err, lesson) => {
            if(err){
                res.send(err);
            }
            res.json(lesson);
        });
    }

    public updateLesson (req: Request, res: Response) {           
        Lesson.findOneAndUpdate({ _id: req.params.lessonId }, req.body, { new: true }, (err, lesson) => {
            if(err){
                res.send(err);
            }
            res.json(lesson);
        });
    }

    public deleteLesson (req: Request, res: Response) {           
        Lesson.remove({ _id: req.params.lessonId }, (err, lesson) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted lesson!'});
        });
    }
    
}