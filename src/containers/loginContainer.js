import React from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Login from '../components/login'; // 로그인 UI 컴포넌트(Presentational)
import axios from 'axios';
import { userLogin } from '../store/module/login';

const LoginContainer = () => {
  const dispatch = useDispatch();
  /*
    "email": "we.want.u@aiffel.com",
    "password": "passpassplz",
  */
  const handleLoginFunc = async (email, password) => {
    try {
      const res = await axios.get('http://localhost:5000/login', {
        params: {
          email: email,
          password: password,
        },
      });
      if (res.data.length > 0) {
        dispatch(userLogin(res.data[0].email, res.data[0].username));
      } else {
        alert('이메일 및 비밀번호가 일치하지 않습니다.');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <Login handleLoginFunc={handleLoginFunc}></Login>;
};

export default LoginContainer;
