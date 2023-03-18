// 로그인 하지 않은 사용자 접근 가능을 위해
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component }) => {
  const user = useSelector((state) => state.user.info);
  return user.length > 0 ? <Navigate to="/forum" /> : Component;
};

export default PrivateRoute;
