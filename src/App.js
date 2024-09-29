import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import { fetchData } from './utils/api';
import { groupTickets, sortTickets } from './utils/dataManipulation';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');

  useEffect(() => {
    fetchData().then(data => {
      setTickets(data.tickets);
      setUsers(data.users);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const groupedTickets = groupTickets(tickets, groupBy);
  const sortedTickets = sortTickets(groupedTickets, sortBy);

  return (
    <div className="app">
      <Header 
        groupBy={groupBy} 
        setGroupBy={setGroupBy} 
        sortBy={sortBy} 
        setSortBy={setSortBy} 
      />
      <Board tickets={sortedTickets} users={users} groupBy={groupBy} />
    </div>
  );
}

export default App;