// src/pages/Settings.jsx
import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-root">
      <h2>Settings</h2>
      <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Notification Email
          <input type="email" placeholder="supervisor@example.com" />
        </label>
        <label>
          Daily Summary Time
          <input type="time" />
        </label>
        <label>
          Default Region
          <select>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;
