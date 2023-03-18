import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
  display : ${(props) => (props.type === 'search' ? 'inline-flex;' : 'flex;')}
  padding-left: 5px;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: ${(props) => props.border};
  
  //x버튼 없애기
  ::-ms-clear,
  ::-ms-reveal{
    display:none;width:0;height:0;
  }
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration{
    display:none;
  }
`;
const input = (props) => {
  const { type, placeholder, border, onChangeFunc, value } = props;
  return (
    <Input
      type={type}
      placeholder={placeholder}
      border={border}
      onChange={onChangeFunc}
      value={value}
    ></Input>
  );
};

export default input;
