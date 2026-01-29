import { useState } from 'react';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  // state מקומי כדי לדעת אם המשימה הספציפית הזו כרגע במצב עריכה
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
            autoFocus
          />
          <button onClick={handleSave}>שמור</button>
          <button onClick={() => setIsEditing(false)}>ביטול</button>
        </div>
      ) : (
        <div className="view-mode">
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => onToggle(task.id)} 
          />
          <span className="task-text">{task.text}</span>
          <button onClick={() => setIsEditing(true)}>ערוך</button>
          <button onClick={() => onDelete(task.id)}>מחק</button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;