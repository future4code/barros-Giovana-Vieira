import {app} from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.get("/users", userController.getAllUsers)

app.post("/users", userController.createUser)

app.delete("/users/:userId", userController.deleteUser)