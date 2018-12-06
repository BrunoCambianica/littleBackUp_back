import {Request, Response, NextFunction} from "express";
import { UserController } from "../controllers/userController";

export class Routes { 
    
    public userController: UserController = new UserController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'Welcome to Little Back Up API !'
            })
        })
        
        // get all users
        app.route('/user')
        .get(this.userController.getUsers)        
        // create a new user
        .post(this.userController.addNewUser);

        app.route('/user/:userId')
        // get user details per ID
        .get(this.userController.getUserWithID)
        // update an existing user per ID
        .put(this.userController.updateUser)
        // delete a user per ID
        .delete(this.userController.deleteUser)

    }
}