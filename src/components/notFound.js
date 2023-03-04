import React from 'react';
import styled from 'styled-components';
import { Error } from '@styled-icons/boxicons-regular/Error';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  height: 50vh;
  > p {
    display: block;
  }

  > button {
    width: 50%;
    height: 30px;
    border: 1px solid #007bff;
    font-weight: 400;
    color: #007bff;
    background-color: transparent;
  }
`;
const ErrorIcon = styled(Error)`
  width: 20%;
  heigth: 20%;
  @media screen and (max-width: 600px) {
    width: 30%;
    heigth: 30%;
  }
`;
const ErrorTitle = styled.span`
  font-weight: bold;
  line-height: 2;
  color: red;
  font-size: 1.4rem;
  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;
const ErrorContent = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 2;
  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;
const NotFound = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <ErrorIcon></ErrorIcon>

      <p>
        <ErrorTitle>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</ErrorTitle>
        <ErrorContent>
          입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
        </ErrorContent>
      </p>
      <button type="button" onClick={routeChange}>
        메인으로 돌아가기
      </button>
    </Wrapper>
  );
};

export default NotFound;
