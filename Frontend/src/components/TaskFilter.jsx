const TaskFilter = ({ filter, setFilter }) => {
    return (
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    );
  };
  
  export default TaskFilter;
  