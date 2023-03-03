// 로그인 하지 않은 사용자 접근 제한을 위해
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

const PrivateRoute = ({ component: Component }) => {
  return isLogin() ? (
    Component
  ) : (
    <Navigate to="/" {...alert('로그인 후 이용가능')} />
  );
};

export default PrivateRoute;
