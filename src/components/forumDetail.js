import React from 'react';
import styled from 'styled-components';
import { Like } from '@styled-icons/boxicons-regular/Like';
import { ThumbLike } from '@styled-icons/fluentui-system-filled/ThumbLike';
const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
const BackBtn = styled.button`
  display: block;
  width: 40%;
  background-color: #e9e9e9;
  color: #0000cd;
  border: 1px solid #e9e9e9;
  @media screen and (max-width: 500px) {
    width: 60%;
  }
`;
const ForumBox = styled.div`
  width: 70vw;
  height: 100vh;
  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;
const ListBox = styled.div`
  display: flex;
  margin-top: 40px;
  border-bottom: 1px solid gray;
`;
const ContentBox = styled.div`
  position: inline-block;
  width: 100%;
  height: 100%;
`;
const IsLikedBox = styled.div`
  display: inline-block;
  width: 100%;
  text-align: left;
  margin-top: 10px;
`;

//좋아요 안눌렀을 때 아이콘
const NoSelLikeBtn = styled(Like)`
  width: 20px;
  color: gray;
`;

//좋아요 눌렀을 떄 아이콘
const SelLikeBtn = styled(ThumbLike)`
  width: 20px;
`;

const LikeCount = styled.span`
  padding-left: 5px;
  color: gray;
`;
const Title = styled.span`
  display: inline-block;
  font-size: 1rem;
  height: 30px;
`;
const ForumTagBox = styled.div`
  position: inline-block;
  margin-bottom: 20px;
`;

const ForumTag = styled.div`
  display: inline-block;
  font-size: 0.7rem;
  color: white;
  background-color: #ff1357;
  border-radius: 20px;
  padding: 4px 10px 4px;
  margin-right: 5px;
`;

const ForumContent = styled.span`
  display: inline-block;
  font-size: 1rem;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
  line-height: 2;
`;

const ForumDetail = () => {
  return (
    <Wrapper>
      <ForumBox>
        <BackBtn> {'< '}이전으로 돌아가기</BackBtn>
        <ListBox>
          <ContentBox>
            <Title>질문이 있습니다</Title>
            <ForumTagBox>
              <ForumTag>bug</ForumTag>
              <ForumTag>tip</ForumTag>
              <ForumTag>general</ForumTag>
            </ForumTagBox>
          </ContentBox>
        </ListBox>
        <ForumContent>
          불어 밝은 위하여 커다란 사라지지 새 가진 같은 가는 것이다. 못하다
          무엇을 용기가 그들은 이것이다. 동산에는 있으며, 바로 이것을 것은 길지
          인생을 청춘 그들을 끓는다. 피고, 위하여 피에 품었기 속잎나고, 무한한
          사랑의 말이다. 눈에 못하다 투명하되 우리 인간의 간에 미묘한 영원히
          아름다우냐? 장식하는 광야에서 보내는 얼음 고행을 긴지라 이것이다.
          사랑의 더운지라 있음으로써 위하여, 놀이 쓸쓸하랴? 주며, 황금시대를
          현저하게 있음으로써 꽃 봄바람이다. 청춘의 피가 없는 것은 말이다.
        </ForumContent>
        <IsLikedBox>
          <NoSelLikeBtn></NoSelLikeBtn>
          <LikeCount>1</LikeCount>
        </IsLikedBox>
      </ForumBox>
    </Wrapper>
  );
};

export default ForumDetail;
