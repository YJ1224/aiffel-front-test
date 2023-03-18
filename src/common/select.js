import React from 'react';
import styled, { css } from 'styled-components';
const Select = styled.select`
  width: 40%;
  height: 35px;
  background: white;
  color: black;
  padding-left: 10px;
  font-size: 1rem;
  border: 1px solid black;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
const select = (props) => {
  const { id, onChangeFunc, Tags, tagValue } = props;
  return (
    <Select id={id} onChange={onChangeFunc} value={tagValue}>
      <option value="">선택</option>
      {Tags.tagList.map((item, index) => {
        return (
          <option key={index} value={item.value}>
            {item.value}
          </option>
        );
      })}
    </Select>
  );
};

export default select;
