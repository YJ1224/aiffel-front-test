import React from 'react';
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
const Login = () => {
  return (
    <>
      <Wrapper>
        <LoginBox>
          <Title>Willing to Explore?</Title>
          <Explanation>매일매일 모험하며 제대로 배우자</Explanation>
          <Input type={'email'} placeholder={'이메일 주소'}></Input>
          <Input type={'password'} placeholder={'비밀번호'}></Input>
          <Password>
            <span>비밀번호를 잊으셨나요?</span>
            <a href="/findPassword">비밀번호 찾기</a>
          </Password>
          <Button type="button" onClick={() => alert(1)}>
            로그인
          </Button>
        </LoginBox>
      </Wrapper>
    </>
  );
};

export default Login;
