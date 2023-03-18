import React from 'react';
import styled, { css } from 'styled-components';
const TextArea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  max-height: 400px;
  padding-top: 10px;
  padding-left: 10px;
`;
const textarea = (props) => {
  const { id, placeholder, onChangeFunc } = props;
  return <TextArea id={id} placeholder={placeholder} onChange={onChangeFunc} />;
};

export default textarea;
