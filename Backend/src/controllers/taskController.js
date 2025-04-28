import Task from "../models/task.js";

  // Import Task model

// Create a new task
export const createTask = async (req, res) => {
    const { title, description, priority } = req.body;
    const userId = req.user._id;  // Get the user ID from the auth middleware

    // Validate the input fields
    if (!title || !priority) {
        return res.status(400).json({
            success: false,
            message: "Title and priority are required fields",
        });
    }

    const validPriorities = ['low', 'medium', 'high'];
    if (!validPriorities.includes(priority)) {
        return res.status(400).json({
            success: false,
            message: "Priority must be one of the following: low, medium, high",
        });
    }

    if (!userId) {
        return res.status(400).json({
            success: false,
            message: "User is not authenticated",
        });
    }

    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            userId: req.user._id,   
        });

        await task.save();
        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task,
        });
    } catch (error) {
        console.error(error); 
        res.status(500).json({
            success: false,
            message: "Server error, failed to create task",
        });
    }
};


// Get all tasks of the logged-in user
export const getTasks = async (req, res) => {
    const userId = req.user.id;  // Get userId from auth middleware
    try {
        const tasks = await Task.find({ user: userId });
        res.status(200).json({
            success: true,
            tasks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error, failed to fetch tasks",
        });
    }
};

// Update a task (mark as complete or update details)
export const updateTask = async (req, res) => {
    const taskId = req.params.id;
    const { title, description, priority, status } = req.body;
    const userId = req.user.id;

    try {
        const task = await Task.findOne({ _id: taskId, user: userId });
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        task.title = title || task.title;
        task.description = description || task.description;
        task.priority = priority || task.priority;
        task.status = status || task.status;

        await task.save();

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error, failed to update task",
        });
    }
};

// Delete a task
export const deleteTask = async (req, res) => {
    const taskId = req.params.id;
    const userId = req.user.id;

    try {
        const task = await Task.findOneAndDelete({ _id: taskId, user: userId });
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error, failed to delete task",
        });
    }
};

// Filter tasks by status (All, Active, Completed)
export const filterTasksByStatus = async (req, res) => {
    const status = req.query.status || "all";  // Default to 'all' status
    const userId = req.user.id;

    try {
        let tasks;
        if (status === "all") {
            tasks = await Task.find({ user: userId });
        } else {
            tasks = await Task.find({ user: userId, status });
        }

        res.status(200).json({
            success: true,
            tasks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error, failed to filter tasks",
        });
    }
};
