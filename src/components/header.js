import React from 'react';
import styled from 'styled-components';
import AiffelLogo from '../images/aiffel_logo.png';
import Profile from '../images/profile.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 11vh;
  border-bottom: 1px solid gray;
`;

const LogoImages = styled.img`
  width: 10.875rem;
  object-fit: contain;
  margin-left: 15%;
  @media screen and (max-width: 500px) {
    margin-left: 0;
    width: 6.875rem;
  }
`;

const Nav = styled.nav`
  width: auto;
  margin-right: 15%;
  @media screen and (max-width: 500px) {
    margin-right: 5%;
  }
`;

const UL = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

const LI = styled.li`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

const ProfileImages = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
  border-radius: 70%;
`;

const Name = styled.span`
  font-size: 1em;
`;

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.info);
  return (
    <>
      <Headers>
        <LogoImages src={AiffelLogo} title={'서비스 로고'}></LogoImages>
        <Nav>
          <UL onClick={() => navigate('/profile')}>
            <LI>
              <ProfileImages src={Profile}></ProfileImages>
            </LI>
            <LI>
              <Name>{JSON.parse(user)[0].username}님</Name>
            </LI>
          </UL>
        </Nav>
      </Headers>
    </>
  );
};

export default Header;
