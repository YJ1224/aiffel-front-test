import React, { useState } from 'react';
import styled, { css } from 'styled-components';

//버튼 크기에 따라 css 바꾸기
const SIZE = {
  sm: css`
    --button-padding: 0.25rem 0.5rem;
    --button-font-size: 0.875rem;
    --button-line-height: 1.5;
  `,
  group: css`
    --button-width: 100%;
    --button-padding: 0.25rem 0.5rem;
    --button-font-size: 0.875rem;
    --button-line-height: 1.5;
  `,
  lg: css`
    --button-padding: 0.4rem 1rem;
    --button-font-size: 1.25rem;
    --button-line-height: 1.5;
  `,
  full: `
    --button-display: block;
    --button-width: 100%;
    --button-padding: 0.4rem 1rem;
    --button-font-size: 1.25rem;
    --button-line-height: 1.5;
  `,
};

//버튼 스타일에 따라 css 바꾸기
const VARIANTS = {
  login: css`
    --button-color: #212529;
    --button-bg-color: #ffc107;
    --button-border: 1px solid #ffc107;
  `,
  newQuestion: css`
    --button-color: white;
    --button-bg-color: #007bff;
    --button-border: 1px solid #007bff;
    --button-float: right;
  `,
  reset: `
    --button-color: #fff;
    --button-bg-color: #17a2b8;
    --button-border: 1px solid #17a2b8;
    --button-float: right;
    margin-right: 10px;
  `,
  search: `
    --button-width: auto;
    --button-bg-color: transparent;
    margin-top: -10px;
    position: absolute;
    top: 0px;
    right: 5px;
    height: auto;
    position: absolute;
    top: 0px;
    right: 5px;
  `,
  write: `
    --button-bg-color: #28a745;
    --button-border: 1px solid #28a745;
    margin-right: 10px;
  `,
  forumMove: `
    --button-bg-color: #6c757d;
    --button-border: 1px solid #6c757d;
  `,
  backMove: `
    --button-display: block;
    --button-width: 40%;
    --button-bg-color: #e9e9e9;
    --button-color: #0000cd;
    --button-border: 1px solid #e9e9e9;
    @media screen and (max-width: 500px) {
      --button-width: 60%;
    }
  `,
};

const ClickBtn = styled.button`
  ${(props) => props.sizeStyle}
  ${(props) => props.variantStyle}
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);
  border: var(--button-bg-color, none);
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  line-height: var(--button-line-height, 1);
  width: var(--button-width, auto);
  display: var(--button-display, inline-block);
  float: var(--button-float, left);
  border-radius: 5px;
  height: 40px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  cursor: pointer;

  :disabled {
    background: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;
const Button = (props) => {
  //label : 버튼명
  //disabled : 버튼 disabled (true, false)
  //size : 버튼 사이즈
  //variant : 버튼 스타일 명
  const { label, disabled, onClick, size, variant } = props;
  const sizeStyle = SIZE[size];
  const variantStyle = VARIANTS[variant];

  return (
    <ClickBtn
      type="button"
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={onClick}
    >
      {label}
    </ClickBtn>
  );
};
export default Button;
