import { useEffect, useState } from "react";
import api from "../services/api";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async (task) => {
    const res = await api.post("/tasks", task);
    setTasks([...tasks, res.data]);
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const toggleTask = async (id) => {
    const task = tasks.find(t => t._id === id);
    await api.put(`/tasks/${id}`, { status: task.status === "complete" ? "incomplete" : "complete" });
    fetchTasks();
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return task.status === "incomplete";
    if (filter === "completed") return task.status === "complete";
    return true;
  });

  return { tasks, addTask, deleteTask, toggleTask, filter, setFilter, filteredTasks };
};

export default useTasks;
