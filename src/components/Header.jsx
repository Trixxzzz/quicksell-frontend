import React, { useState } from 'react';
import DisplayIcon from '../logos/icons_FEtask/Display.svg';
import DownIcon from "../logos/icons_FEtask/down.svg"
import './Header.css';

function Header({ groupBy, setGroupBy, sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
      <img src={DisplayIcon} alt="Display Icon" className="dis-icon" />
      <span>Display</span>
      <img src={DownIcon} alt="Down Icon" className="icon" />
    </div>
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;