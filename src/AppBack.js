import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoute from './components/publicRoute'; //로그인 전 접근제어
import PrivateRoute from './components/privateRoute'; //로그인 해야한 접근 가능
import Header from './components/header';
import Login from './components/login'; //로그인
import Forum from './components/forum'; //포럼 목록 컴포넌트
import ForumWrite from './components/forumWrite'; //포럼 작성 컴포넌트
import ForumDetail from './components/forumDetail'; //포럼 상세화면 컴포넌트
import NotFound from './components/notFound'; //없는 경로 노출 시 나오는 페이지
import GlobalStyle from './components/GlobalStyle'; //전역 스타일

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        {/* 로그인 */}
        <Route path="/" element={<PublicRoute component={<Login />} />} />
        {/* 서비스 포럼 목록 */}
        <Route path="/forum" element={<PrivateRoute component={<Forum />} />} />
        {/* 서비스 포럼 작성 */}
        <Route
          path="/forum/write"
          element={<PrivateRoute component={<ForumWrite />} />}
        />
        {/* 서비스 포럼 상세 */}
        <Route
          path="/forum/:id"
          element={<PrivateRoute component={<ForumDetail />} />}
        />
        {/* 없는 경로시 에러페이지 */}
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
