import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks-data');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks-data', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (text) => {
    const newTask = { 
      id: crypto.randomUUID(), 
      text, 
      completed: false 
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(t => !t.completed));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true; 
  });

  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="container">
      <h1>ניהול משימות</h1>
      
      <TaskInput onAdd={addTask} />
      
      <FilterBar 
        currentFilter={filter} 
        setFilter={setFilter} 
        activeCount={activeCount}
        onClearCompleted={clearCompleted}
      />
      
      <TaskList 
        tasks={filteredTasks} 
        onToggle={toggleTask} 
        onDelete={deleteTask} 
        onEdit={editTask} 
      />
    </div>
  );
}

export default App;