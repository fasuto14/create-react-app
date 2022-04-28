import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
            <h1>React Folder Template</h1>
        }
      />
    </Routes>
  );
};

export default Routing;