// src/pages/Dashboard.jsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import './Dashboard.css';

const chartData = [
  { name: 'Mon', inspections: 8 },
  { name: 'Tue', inspections: 12 },
  { name: 'Wed', inspections: 9 },
  { name: 'Thu', inspections: 15 },
  { name: 'Fri', inspections: 11 },
];

const recentActivity = [
  'Vaibhav uploaded 3 site images',
  'New audio note recorded for Site #42',
  'Supervisor commented on Inspection #109',
  'New user added: field_agent_07',
];

const Dashboard = () => {
  return (
    <div className="dash-root">
      <div className="kpi-row">
        <div className="kpi-card">
          <h3>Total Inspections</h3>
          <p className="kpi-value">128</p>
          <span className="kpi-sub">+12 this week</span>
        </div>
        <div className="kpi-card">
          <h3>Active Agents</h3>
          <p className="kpi-value">18</p>
          <span className="kpi-sub">4 in the field now</span>
        </div>
        <div className="kpi-card">
          <h3>Open Issues</h3>
          <p className="kpi-value">23</p>
          <span className="kpi-sub">5 high priority</span>
        </div>
      </div>

      <div className="dash-main">
        <div className="dash-chart">
          <h3>Inspections per Day</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="inspections" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="dash-activity">
          <h3>Recent Activity</h3>
          <ul>
            {recentActivity.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
