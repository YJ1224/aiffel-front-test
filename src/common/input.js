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
