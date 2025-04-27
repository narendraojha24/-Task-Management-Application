const TaskCard = ({ task, onDelete, onToggle }) => {
    return (
      <div className="task-card">
        <h3>{task.title} ({task.priority})</h3>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <button onClick={() => onToggle(task._id)}>
          {task.status === "complete" ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={() => onDelete(task._id)} style={{ backgroundColor: "red", marginLeft: "10px" }}>
          Delete
        </button>
      </div>
    );
  };
  
  export default TaskCard;
  