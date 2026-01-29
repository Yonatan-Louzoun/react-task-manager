import React from 'react';

function FilterBar({ currentFilter, setFilter, activeCount, onClearCompleted }) {
  return (
    <div className="filter-bar">
      <span className="todo-count">
        נותרו עוד <strong>{activeCount}</strong> משימות
      </span>
      
      
      <div className="filter-btns">
        <button 
          className={currentFilter === 'all' ? 'selected' : ''} 
          onClick={() => setFilter('all')}
        >
          הכל
        </button>
        <button 
          className={currentFilter === 'active' ? 'selected' : ''} 
          onClick={() => setFilter('active')}
        >
          פעילות
        </button>
        <button 
          className={currentFilter === 'completed' ? 'selected' : ''} 
          onClick={() => setFilter('completed')}
        >
          הושלמו
        </button>
      </div>

      <button className="clear-completed" onClick={onClearCompleted}>
        נקה הושלמו
      </button>
    </div>
  );
}

export default FilterBar;