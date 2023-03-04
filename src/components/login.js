import React, { useImperativeHandle, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
//calc
const LoginBox = styled.div`
  width: 50vw;
  height: 70vh;
  @media screen and (max-width: 500px) {
    width: 70vw;
  }
  > div,
  input,
  button {
    margin-bottom: 15px;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Explanation = styled.div`
  font-size: 1em;
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const Input = styled.input`
  border: 1px solid #ffc107;
`;
const Button = styled.button`
  color: #212529;
  background-color: #ffc107;
  border: 1px solid #ffc107;
`;
const Password = styled.div`
  font-size: 1em;
  color: #6c757d;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
  > a {
    float: right;
    text-decoration: underline;
    color: #6c757d;
  }
`;
const ErrorMessage = styled.span`
  font-size: 0.6rem;
  color: red;
  font-weight: bold;
  display: flex;
  margin-bottom: 15px;
  margin-top: -10px;
`;
const Login = (props) => {
  const { handleLoginFunc } = props;
  const [email, setEmail] = useState(''); //이메일 값
  const [password, setPassword] = useState(''); //비밀번호 값

  const [isEmail, setIsEmail] = useState(false); //이메일 유효성 검사 결과
  const [isPassword, setIsPassword] = useState(false); //패스워드 유효성 검사 결과

  //이메일 유효성 체크
  const emailValidation = (e) => {
    setEmail(e.target.value);
    const checkRegex =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (checkRegex.test(e.target.value)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  //비밀번호 유효성 체크 (10자리 이상)
  const passWordValidation = (e) => {
    setPassword(e.target.value);
    const checkRegex = /^.{8,}$/;
    if (checkRegex.test(e.target.value)) {
      setIsPassword(true);
    }
  };
  return (
    <>
      <Wrapper>
        <LoginBox>
          <Title>Willing to Explore?</Title>
          <Explanation>매일매일 모험하며 제대로 배우자</Explanation>
          <Input
            type={'email'}
            placeholder={'이메일 주소'}
            onChange={emailValidation}
          ></Input>
          {email.length > 0 && !isEmail && (
            <ErrorMessage>이메일을 확인해주세요.</ErrorMessage>
          )}

          <Input
            type={'password'}
            placeholder={'비밀번호 10자리 이상'}
            onChange={passWordValidation}
          ></Input>
          {password.length > 0 && !isPassword && (
            <ErrorMessage>비밀번호는 8자리 이상 입력해주세요.</ErrorMessage>
          )}
          <Password>
            <span>비밀번호를 잊으셨나요?</span>
            <a href="/findPassword">비밀번호 찾기</a>
          </Password>
          <Button
            disabled={!isEmail || !isPassword}
            type="button"
            onClick={() => handleLoginFunc(email, password)}
          >
            로그인
          </Button>
        </LoginBox>
      </Wrapper>
    </>
  );
};

export default Login;
