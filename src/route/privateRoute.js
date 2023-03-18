// 로그인 하지 않은 사용자 접근 제한을 위해
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component }) => {
  const user = useSelector((state) => state.user.info);
  //{...alert('로그인 후 이용가능')}
  console.log(user);
  return user.length > 0 ? Component : <Navigate to="/" />;
};

export default PrivateRoute;
