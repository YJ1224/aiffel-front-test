import React from 'react';
import styled from 'styled-components';
import { Like } from '@styled-icons/boxicons-regular/Like';
import { ThumbLike } from '@styled-icons/fluentui-system-filled/ThumbLike';
import { useNavigate } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Button from '../common/button'; //버튼 공통 컴포넌트
const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
`;

//좋아요 눌렀을 떄 아이콘
const SelLikeBtn = styled(ThumbLike)`
  width: 20px;
  cursor: pointer;
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
  background-color: ${(props) => props.bgColor};
  border-radius: 20px;
  padding: 4px 10px 4px;
  margin-right: 5px;
`;

const ForumContent = styled.span`
  width: 100%;
  display: inline-block;
  font-size: 1rem;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
  line-height: 2;
`;
const Delete = styled.button`
  margin-left: 10px;
  width: auto;
  height: 30px;
  border-radius: 10px;
  color: #fff;
  background-color: #dc3545;
  border: none;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
`;
const ForumDetail = (props) => {
  const { detailData, likeToggle, forumDelete } = props;
  const navigate = useNavigate();
  console.log(detailData.length || detailData);
  const confirm = () => {
    confirmAlert({
      title: '게시글 삭제',
      message: '정말로 게시글을 삭제하시겠어요?',
      buttons: [
        {
          label: '네',
          onClick: () => forumDelete(),
        },
        {
          label: '아니오',
        },
      ],
    });
  };
  return (
    <>
      {detailData.length !== 0 && (
        <Wrapper>
          <ForumBox>
            <ButtonBox>
              <Button
                type={'button'}
                disabled={false}
                label={'이전으로 돌아가기'}
                onClick={() => {
                  navigate(`/forum`);
                }}
                variant={'backMove'}
              ></Button>
            </ButtonBox>

            <ListBox>
              <ContentBox>
                <Title>{detailData.title}</Title>
                <Delete onClick={() => confirm()}>삭제하기</Delete>
                {detailData.tag ? (
                  <ForumTagBox>
                    <ForumTag bgColor={detailData.tag.color}>
                      {detailData.tag.name}
                    </ForumTag>
                  </ForumTagBox>
                ) : null}
              </ContentBox>
            </ListBox>
            <ForumContent>{detailData.content}</ForumContent>
            <IsLikedBox>
              {detailData.isLiked ? (
                <SelLikeBtn
                  onClick={() => {
                    likeToggle(false);
                  }}
                />
              ) : (
                <NoSelLikeBtn
                  onClick={() => {
                    likeToggle(true);
                  }}
                />
              )}
            </IsLikedBox>
          </ForumBox>
        </Wrapper>
      )}
    </>
  );
};

export default ForumDetail;
