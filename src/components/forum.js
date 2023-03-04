import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  width: auto;
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
  @media screen and (min-width: 1020px) {
    height: 30vh;
  }
  > span {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
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
  background-color: ${(props) => props.bgColor};
  display: inline-block;
  font-size: 1.2rem;
  color: white;
  border-radius: 20px;
  padding: 4px 10px 4px;
  margin-right: 5px;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const ResetBtn = styled.button`
  margin-right: 10px;
  width: auto;
  float: right;
  color: #fff;
  background-color: #17a2b8;
  border: none;
`;
const Forum = (props) => {
  const { ListData, SearchClick, Reset } = props;
  const [searchValue, setSearchValue] = useState(''); //검색어
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const forumDetail = (id) => {
    navigate(`/forum/${id}`);
  };
  return (
    <Wrapper>
      <ForumBox>
        <Title>묻고 답하기</Title>

        <Button type={'button'} onClick={() => navigate(`/forum/write`)}>
          + 새로운 질문
        </Button>
        <ResetBtn
          onClick={() => {
            Reset();
            setSearchValue('');
          }}
        >
          초기화
        </ResetBtn>
        <Label>
          <Input
            type={'search'}
            placeholder={'검색어를 입력해주세요'}
            onChange={handleSearch}
            value={searchValue}
          ></Input>
          <SearchBtn onClick={() => SearchClick(searchValue)}>
            <BlueSearch></BlueSearch>
          </SearchBtn>
        </Label>

        {ListData.length > 0 ? (
          <div>
            {ListData.map((item, index) => (
              <ListBox key={index} onClick={() => forumDetail(item.id)}>
                <ContentBox>
                  <ForumTitle>{item.title}</ForumTitle>
                  <ForumContent>{item.content}</ForumContent>
                  <ForumTagBox>
                    <ForumTag bgColor={item.tag.color}>
                      {item.tag.name}
                    </ForumTag>
                  </ForumTagBox>
                </ContentBox>
                <TimeBox>5시간전</TimeBox>
              </ListBox>
            ))}
          </div>
        ) : (
          <div>
            <ListBox>
              <span>검색 결과 없음</span>
            </ListBox>
          </div>
        )}
      </ForumBox>
    </Wrapper>
  );
};

export default Forum;
