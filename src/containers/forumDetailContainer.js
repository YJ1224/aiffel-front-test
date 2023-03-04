import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ForumDetail from '../components/forumDetail';
import { forumDetail } from '../store/module/forum';
import Modal from 'react-modal'; //모달

const ForumDetailContainer = () => {
  let { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/forum/${id}`);
      if (res.data) {
        dispatch(forumDetail(res.data));
      }
    } catch (e) {
      alert('잘못된 접근 입니다.');
      navigate('/forum');
    }
  };

  //게시글 좋아요 토글
  const likeToggle = async (isLiked) => {
    try {
      const res = await axios.patch(`http://localhost:5000/forum/${id}`, {
        isLiked: isLiked,
      });
      if (res.data) {
        dispatch(forumDetail(res.data));
      }
    } catch (e) {
      console.log(e);
    }
  };

  //게시글 삭제
  const forumDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:5000/forum/${id}`);
      if (res.data) {
        navigate('/forum');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <ForumDetail
        detailData={useSelector((state) => state.forum.forumDatail)}
        likeToggle={likeToggle}
        forumDelete={forumDelete}
      />
    </>
  );
};

export default ForumDetailContainer;
