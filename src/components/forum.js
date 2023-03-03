import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';
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
const Button = styled.button`
  width: 90px;
  float: right;
  font-size: 0.7rem;
  color: #212529;
  background-color: #007bff;
  border: 1px solid #007bff;
`;

const Label = styled.label`
  position: relative;
`;
const Input = styled.input`
  dispaly: none;
  margin-top: 20px;
`;
const SearchBtn = styled.button`
  border: none;
  background-color: white;
  width: auto;
  height: auto;
  margin-top: 60px;
  position: absolute;
  top: 0px;
  right: 5px;
`;

const BlueSearch = styled(Search)`
  width: 15px;
  color: #007bff;
`;

const ListBox = styled.div`
  display: flex;
  height: 25vh;
  margin-top: 20px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  @media screen and (max-width: 500px) {
    height: 20vh;
  }
`;
const ContentBox = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
`;
const TimeBox = styled.div`
  display: inline-block;
  width: 20%;
  text-align: center;
  line-height: 150px;
`;
const ForumTitle = styled.span`
  display: block;
  font-size: 1.3rem;
  padding-top: 20px;
`;
const ForumContent = styled.span`
  display: block;
  font-size: 1rem;
  padding-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ForumTagBox = styled.div`
  position: absolute;
  bottom: 20px;
`;

const ForumTag = styled.div`
  display: inline-block;
  font-size: 1.2rem;
  color: white;
  background-color: #ff1357;
  border-radius: 20px;
  padding: 4px 10px 4px;
  margin-right: 5px;
`;
const Forum = () => {
  return (
    <Wrapper>
      <ForumBox>
        <Title>묻고 답하기</Title>
        <Button>+ 새로운 질문</Button>
        <Label>
          <Input type={'search'} placeholder={'검색...'}></Input>
          <SearchBtn>
            <BlueSearch></BlueSearch>
          </SearchBtn>
        </Label>
        <ListBox>
          <ContentBox>
            <ForumTitle>질문이 있습니다</ForumTitle>
            <ForumContent>
              불어 밝은 위하여 커다란 사라지지 새 가진 같은 가는 것이다. 못하다
              무엇을 용기가 그들은 이것이다. 동산에는 있으며, 바로 이것을 것은
              길지 인생을 청춘 그들을 끓는다. 피고, 위하여 피에 품었기 속잎나고,
              무한한 사랑의 말이다. 눈에 못하다 투명하되 우리 인간의 간에 미묘한
              영원히 아름다우냐? 장식하는 광야에서 보내는 얼음 고행을 긴지라
              이것이다. 사랑의 더운지라 있음으로써 위하여, 놀이 쓸쓸하랴? 주며,
              황금시대를 현저하게 있음으로써 꽃 봄바람이다. 청춘의 피가 없는
              것은 말이다.
            </ForumContent>
            <ForumTagBox>
              <ForumTag>bug</ForumTag>
              <ForumTag>tip</ForumTag>
              <ForumTag>general</ForumTag>
            </ForumTagBox>
          </ContentBox>
          <TimeBox>5시간전</TimeBox>
        </ListBox>
      </ForumBox>
    </Wrapper>
  );
};

export default Forum;
