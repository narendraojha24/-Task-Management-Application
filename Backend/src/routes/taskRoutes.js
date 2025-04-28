import express from "express";
import { createTask, deleteTask,  getTasks, updateTask ,filterTasksByStatus} from "../controllers/taskController.js";

import {protect} from "../middleware/authMiddleware.js"

const taskRouter=express.Router();

taskRouter.route("/tasks")
    .post(protect, createTask)
    .get(protect, getTasks);

    taskRouter.route("/tasks/:id")
    .put(protect, updateTask)
    .delete(protect, deleteTask);

    taskRouter.route("/tasks/filter")
    .get(protect, filterTasksByStatus);

export default taskRouter;    