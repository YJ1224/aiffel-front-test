import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* 로그인 관련 */
import PublicRoute from './route/publicRoute'; //로그인 전 접근제어
import PrivateRoute from './route/privateRoute'; //로그인 해야만 접근 가능

import GlobalStyle from './components/GlobalStyle'; //전역 스타일
import { useSelector } from 'react-redux';

//Containers Component
import Header from './components/header';
import LoginContainer from './containers/loginContainer'; //로그인
import ForumContainer from './containers/forumContainer'; //포럼 목록
import ForumDetailContainer from './containers/forumDetailContainer'; //포러 상세 화면
import ForumWriteContainer from './containers/forumWriteContainer'; //포럼 작성
import ProfileContainer from './containers/profileContainer'; //내 정보 수정

//NotFound Component
import NotFound from './components/notFound'; //없는 경로 노출 시 나오는 페이지
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      {useSelector((state) => state.user.info).length > 0 && <Header />}

      <Routes>
        {/* 로그인 */}
        <Route
          path="/"
          element={<PublicRoute component={<LoginContainer />} />}
        />
        {/* 서비스 포럼 목록 */}
        <Route
          path="/forum"
          element={<PrivateRoute component={<ForumContainer />} />}
        />
        {/* 서비스 포럼 상세 */}
        <Route
          path="/forum/:id"
          element={<PrivateRoute component={<ForumDetailContainer />} />}
        />
        {/* 서비스 포럼 작성 */}
        <Route
          path="/forum/write"
          element={<PrivateRoute component={<ForumWriteContainer />} />}
        />
        {/* 프로필 조회 & 수정 ?*/}
        <Route
          path="/profile"
          element={<PrivateRoute component={<ProfileContainer />} />}
        />
        {/* 없는 경로시 에러페이지 */}
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
