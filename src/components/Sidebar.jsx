// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ collapsed, onToggle }) => {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-top">
        <span className="logo">{collapsed ? 'UP' : 'Unified Portal'}</span>
        <button className="toggle-btn" onClick={onToggle}>
          {collapsed ? '»' : '«'}
        </button>
      </div>
      <nav className="nav">
        <NavLink to="/dashboard" className="nav-item">
          <span>📊</span>
          {!collapsed && <span>Dashboard</span>}
        </NavLink>
        <NavLink to="/chat" className="nav-item">
          <span>💬</span>
          {!collapsed && <span>Chat</span>}
        </NavLink>
        <NavLink to="/users" className="nav-item">
          <span>👥</span>
          {!collapsed && <span>Users</span>}
        </NavLink>
        <NavLink to="/settings" className="nav-item">
          <span>⚙️</span>
          {!collapsed && <span>Settings</span>}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
