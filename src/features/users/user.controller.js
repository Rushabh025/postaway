import UserModel from "./user.model.js";

class UserController{
    getAllUserDeatils(req, res, next){
        var users = UserModel.getAllUsers();
        res.status(201).send(users);
    }

    signUp(req, res, next){
        try {
            const newUser = UserModel.addUser(req.body);

            if(!newUser){
                return res.status(409).send("Email already exists");
            }

            res.status(201).send(newUser);
        } catch (error) {
            throw new ApplicationError("Registration Failed", 500);
        }
    }

    signIn(req, res, next){
        try {
            const user = UserModel.getUser(req.body);
            if(!user){
                return res.status(401).send("Wrong email");
            }
            if(user.email != email || user.password != password){
                return res.status(401).send("Wrong Email or Password");
            }
            res.status(201).send("Loggedin Successfull");
        } catch (error) {
            throw new ApplicationError("Login Failed", 500);
        }
    }
}

export default UserController;