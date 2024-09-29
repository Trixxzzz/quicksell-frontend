import React from 'react';
import Column from './Column.jsx';
import './Board.css';

function Board({ tickets, users, groupBy }) {
  return (
    <div className="board">
      {/* {console.log(groupBy)} */}
      {Object.entries(tickets).map(([key, columnTickets]) => (
        <Column 
          key={key} 
          title={key} 
          tickets={columnTickets} 
          users={users} 
          groupBy={groupBy} 
        />
      ))}
    </div>
  );
}

export default Board;