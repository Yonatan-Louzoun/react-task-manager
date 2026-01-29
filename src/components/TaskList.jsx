import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  // בדיקה למניעת שגיאות אם הרשימה ריקה
  if (!tasks || tasks.length === 0) {
    return <p className="empty-msg">אין משימות להצגה כרגע.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;