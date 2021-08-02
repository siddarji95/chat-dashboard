import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import grid from "../assets/grid.svg";
import messageCircle from "../assets/message-circle.svg";
import person from "../assets/person.svg";
import bell from "../assets/bell.svg";
import calendar from "../assets/calendar.svg";
import settings from "../assets/settings-2.svg";
import power from "../assets/power.svg";

const Sidebar = () => {
  return (
    <Container>
      <ProfileWrapper>
        <img src={profile} alt="" />
        <p>Henry Jabbawockiez</p>
      </ProfileWrapper>
      <MenuWrapper>
      <Menu>
      <img src={grid} alt="" />
      <p>HOME</p>
      </Menu>
      <Menu>
      <img src={messageCircle} alt="" />
      <p>CHAT</p>
      </Menu>
      <Menu>
      <img src={person} alt="" />
      <p>CONTACT</p>
      </Menu>
      <Menu>
      <img src={bell} alt="" />
      <p>NOTFICATION</p>
      </Menu>
      <Menu>
      <img src={calendar} alt="" />
      <p>CALENDER</p>
      </Menu>
      <Menu>
      <img src={settings} alt="" />
      <p>SETTINGS</p>
      </Menu>
      </MenuWrapper>
      <Menu>
      <img src={power} alt="" />
      <p>LOGOUT</p>
      </Menu>
    </Container>
  );
};

const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  img {
    padding: 0 17px 0 38px;
  }
  p {
    font-family: TT Norms;
    font-size: 13px;
    color: #707C97;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 50px 0 0 0;
  img {
    height: 86px;
    border-radius: 50%;
  }
  p {
    font-size: 16px;
    padding: 10px;
  }
`;

const Container = styled.div`
  min-width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
