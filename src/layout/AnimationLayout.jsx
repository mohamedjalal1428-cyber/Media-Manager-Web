// src/layout/AdminLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './AdminLayout.css';
import Sidebar from '../components/sidebar';

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-root">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <main className={`admin-content ${collapsed ? 'collapsed' : ''}`}>
        <header className="admin-header">
          <h3>Unified Admin Portal</h3>
        </header>
        <section className="admin-page">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
