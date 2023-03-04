import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Forum from '../components/forum';
import Pageination from '../components/pagination';
import axios from 'axios';
import { forumSelect, allForumSelect } from '../store/module/forum';
const ForumContainer = () => {
  const [page, setPage] = useState(1); //페이징 번호
  const [limit, setLimit] = useState(5); //한 페이지당 보여줄 갯수
  /*
    페이징할 리스트 기법 
    0 : json-server 페이징용
    1 : Array.filter 페이징용
  */
  const [paginationType, SetPagationType] = useState(0);
  const [filterPage, setFilterPage] = useState(1);
  const dispatch = useDispatch();

  const ForumListData = useSelector((state) => state.forum.forumList);
  const allForumListData = useSelector((state) => state.forum.allForumList);
  const [paginationData, setPaginationData] = useState([]);
  const [paginationCount, setPaginationCount] = useState(0);
  //페이징 처리 리스트 (조회)
  const getForumList = async (page) => {
    try {
      const res = await axios.get('http://localhost:5000/forum', {
        params: {
          _page: page,
          _limit: limit,
        },
      });
      if (res.data.length > 0) {
        //목록이 1개 이상일 경우
        dispatch(forumSelect(res.data));
      }
    } catch (e) {
      console.log(e);
    }
  };

  //전체 페이지 리스트 조회 : 페이지네이션과 Array.filter를 위해
  const getAllList = async () => {
    try {
      const res = await axios.get('http://localhost:5000/forum');
      if (res.data.length > 0) {
        //목록이 1개 이상일 경우
        dispatch(allForumSelect(res.data.length, res.data));
      }
    } catch (e) {
      console.log(e);
    }
  };

  //검색하기 누를 시
  const SearchClick = (value) => {
    if (!value) {
      alert('검색어를 입력해주세요');
    } else {
      SetPagationType(1);
      setFilterPage(1);
      //제목, 내용에 검색어가 포함되어 있으면 새로운 배열로 반환
      const newList = allForumListData.allForumListData.filter(
        (data) =>
          data.title.toLowerCase().includes(value) ||
          data.content.toLowerCase().includes(value),
      );
      setPaginationCount(newList.length);
      if (newList.length > 0) {
        let newArr = [...paginationData];
        newArr = arrdivide(newList);
        //배열 페이징으로 나누기
        setPaginationData(newArr);
      } else {
        setPaginationData([]);
      }
    }
  };
  //페이징 나누는 로직
  const arrdivide = (newList) => {
    var arr = [];
    var cnt =
      Math.floor(newList.length / 5) +
      (Math.floor(newList.length % 5) > 0 ? 1 : 0);
    for (var i = 0; i < cnt; i++) {
      arr.push(newList.splice(0, 5));
    }
    return arr;
  };

  //초기화 누를 시
  const Reset = () => {
    SetPagationType(0);
    setPage(1);
  };
  //페이지 번호가 변경 될 시
  useEffect(() => {
    getForumList(page);
  }, [page, setPage]);

  //검색하기 누를 시
  useEffect(() => {
    getAllList();
  }, []);
  return (
    <>
      <Forum
        ListData={
          paginationType === 0
            ? ForumListData
            : paginationCount > 0
            ? paginationData[filterPage - 1]
            : []
        }
        SearchClick={SearchClick}
        Reset={Reset}
      />
      <Pageination
        totalCount={
          paginationType === 0 ? allForumListData.totalCount : paginationCount
        }
        limit={limit}
        page={paginationType === 0 ? page : filterPage}
        setPage={paginationType === 0 ? setPage : setFilterPage}
      />
    </>
  );
};

export default ForumContainer;
