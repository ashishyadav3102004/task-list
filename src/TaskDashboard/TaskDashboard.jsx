import React, { useState } from 'react';
import './TaskDashboard.css';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete project proposal', completed: false },
    { id: 2, title: 'Review code changes', completed: true },
    { id: 3, title: 'Update documentation', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <div className="dashboard">
      <h1>Task Dashboard</h1>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="progress-text">
          {completedTasks} of {tasks.length} tasks completed
        </p>
      </div>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />
        <button type="submit" className="add-button">
          +
        </button>
      </form>

      {showAlert && (
        <div className="alert">
          <h4>Success!</h4>
          <p>New task has been added to your list.</p>
        </div>
      )}

      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <div className="task-content">
              <button
                onClick={() => toggleTask(task.id)}
                className="toggle-button"
              >
                {task.completed ? '✓' : '○'}
              </button>
              <span className={task.completed ? 'task-title completed' : 'task-title'}>
                {task.title}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-button"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDashboard;