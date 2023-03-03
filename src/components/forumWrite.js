import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
const ForumBox = styled.div`
  width: 70vw;
  height: auto;
  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;

const Title = styled.span`
  display: inline-block;
  font-size: 1.6rem;
  height: 40px;
`;

const FormLabelGroup = styled.div`
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 30px;
`;

const BtnGroup = styled.label`
  display: inline-block;
  width: 100%;
  text-align: center;
  > button {
    width: 45%;
    margin-top: 20px;
  }
`;

const WriteBtn = styled.button`
  background-color: #28a745;
  border: none;
  margin-right: 10px;
`;

const CancelBtn = styled.button`
  color: #fff;
  background-color: #6c757d;
  border: none;
`;

const ForumWrite = () => {
  return (
    <Wrapper>
      <ForumBox>
        <Title>질문하기</Title>
        <FormLabelGroup>
          <Label htmlFor="forumTitle">질문 제목</Label>
          <input
            id="forumTitle"
            type="text"
            placeholder="ex. 질문이 있습니다."
            required
            autoFocus
          />
        </FormLabelGroup>
        <FormLabelGroup>
          <Label htmlFor="forumTags">분류</Label>
          <select id="forumTags">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </FormLabelGroup>
        <FormLabelGroup>
          <Label htmlFor="forumContent">질문 내용</Label>
          <textarea id="forumContent" placeholder="ex)질문내용~" />
        </FormLabelGroup>
        <BtnGroup>
          <WriteBtn type="button">등록하기</WriteBtn>
          <CancelBtn>포럼목록 가기</CancelBtn>
        </BtnGroup>
      </ForumBox>
    </Wrapper>
  );
};

export default ForumWrite;
