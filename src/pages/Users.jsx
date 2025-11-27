// src/pages/Users.jsx
import React from 'react';
import './Users.css';

const users = [
  { id: 1, name: 'Vaibhav', role: 'Field Agent' },
  { id: 2, name: 'Anita', role: 'Supervisor' },
  { id: 3, name: 'Rahul', role: 'Field Agent' },
];

const Users = () => {
  return (
    <div className="users-root">
      <h2>Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
