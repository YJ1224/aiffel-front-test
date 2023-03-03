// 로그인 하지 않은 사용자 접근 가능을 위해
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

const PrivateRoute = ({ component: Component }) => {
  return isLogin() ? <Navigate to="/forum" /> : Component;
};

export default PrivateRoute;
