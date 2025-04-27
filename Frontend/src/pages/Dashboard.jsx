import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import TaskFilter from "../components/TaskFilter";
import useTasks from "../hooks/useTasks";

const Dashboard = () => {
  const { tasks, addTask, deleteTask, toggleTask, filter, setFilter, filteredTasks } = useTasks();

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <TaskForm onAdd={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      {filteredTasks.map(task => (
        <TaskCard key={task._id} task={task} onDelete={deleteTask} onToggle={toggleTask} />
      ))}
    </div>
  );
};

export default Dashboard;
