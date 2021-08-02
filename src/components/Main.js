import React from "react";
import styled from "styled-components";
import Chats from "./Chats";
import Messages from "./Messages";

const Main = () => {
  return (
    <Container>
      <Chats>

      </Chats>
      <Messages>

      </Messages>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(180deg, #F3F3FB 0%, #FDFBFD 100%);

  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;
