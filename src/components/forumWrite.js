import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/button'; //버튼 공통 컴포넌트
import Input from '../common/input'; //input 공통 컴포넌트
import Select from '../common/select'; //select 공통 컴포넌트
import TextArea from '../common/textarea'; // textarea 공통 컴포넌트
import Tags from '../json/tag.json'; //태그 JSON 파일
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
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  > button {
    width: 45%;
    margin-top: 20px;
  }
`;

const ForumWrite = (props) => {
  const [title, setTitle] = useState(''); //제목
  const [tagValue, setTagValue] = useState(''); //태그
  const [content, setContent] = useState(''); //내용

  const { forumFunc } = props;
  const navigate = useNavigate();
  //제목 change
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  //셀렉트 change
  const handleSelect = (e) => {
    setTagValue(e.target.value);
    console.log(tagValue);
  };
  //내용 change
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <>
      <Wrapper>
        <ForumBox>
          <Title>질문하기</Title>
          <FormLabelGroup>
            <Label htmlFor="forumTitle">질문 제목</Label>
            <Input
              type={'text'}
              placeholder={'ex. 질문이 있습니다.'}
              onChangeFunc={handleTitle}
            />
          </FormLabelGroup>
          <FormLabelGroup>
            <Label htmlFor="forumTags">분류</Label>
            <Select
              id={'forumTags'}
              onChangeFunc={handleSelect}
              tagValue={tagValue}
              Tags={Tags}
            ></Select>
          </FormLabelGroup>
          <FormLabelGroup>
            <Label htmlFor="forumContent">질문 내용</Label>
            <TextArea
              id={'forumContent'}
              placeholder={'ex)질문내용~'}
              onChangeFunc={handleContent}
            />
          </FormLabelGroup>
          <BtnGroup>
            <Button
              type={'button'}
              disabled={!title || !tagValue || !content}
              label={'등록하기'}
              size={'group'}
              variant={'write'}
              onClick={() => {
                forumFunc(title, tagValue, content);
              }}
            ></Button>
            <Button
              type={'button'}
              label={'포럼목록 가기'}
              size={'group'}
              variant={'forumMove'}
              onClick={() => {
                navigate(`/forum`);
              }}
            />
          </BtnGroup>
        </ForumBox>
      </Wrapper>
    </>
  );
};

export default ForumWrite;
