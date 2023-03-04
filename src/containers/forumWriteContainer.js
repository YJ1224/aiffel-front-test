import React from 'react';
import { useNavigate } from 'react-router-dom';
import ForumWrite from '../components/forumWrite';
import axios from 'axios';
const ForumWriteContainer = () => {
  const navigate = useNavigate();
  const forumFunc = async (title, tagValue, content) => {
    try {
      const res = await axios.post('http://localhost:5000/forum', {
        title: title,
        tagValue: tagValue,
        content: content,
        isLiked: false,
        tag: {
          name: tagValue,
          color: '#ff1357',
        },
      });
      if (res.data) {
        alert('게시글이 등록되었습니다.');
        navigate('/forum');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <ForumWrite forumFunc={forumFunc} />;
};

export default ForumWriteContainer;
