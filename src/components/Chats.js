import React from "react";
import styled from "styled-components";
import plus from "../assets/plus.svg";
import search from "../assets/search.svg";


const Chats = () => {
  return (
    <Container>
      <Headers>
      <Heading>
     <h3>Chats</h3>
     <p>Recent Chats</p>
     </Heading>
     <CreateMessageButton>
       <img src={plus} alt="" />
       <p>Create New Chat</p>
     </CreateMessageButton>
     </Headers>
     <SearchBar>
      <Search>
       <img src={search} alt="" />
       <p>Search</p>
      </Search>
     </SearchBar>
     <ChatList>
     <ProfilePhoto>

     </ProfilePhoto>
     </ChatList>
     <ChatList>
     <ProfilePhoto>

     </ProfilePhoto>
     </ChatList>
     <ChatList>
     <ProfilePhoto>

     </ProfilePhoto>
     </ChatList>
    </Container>
  );
};
const ProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  background: #FFFFFF;
  border-radius: 50%;
  padding: 15px 0px;
`;

const ChatList = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  background: #FFFFFF;
  border-radius: 6px;
  padding: 50px 0px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  img{
    padding: 0px 10px 0 30px;
  }
  p{
    text-transform: capitalize;
    color: #707C97;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  background: #FFFFFF;
  border-radius: 6px;
  padding: 15px 0px;
`;

const CreateMessageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 80%;
  background: linear-gradient(92.68deg, #7CB8F7 0%, #2A8BF2 100%);
  box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 10px 6px 25px rgba(42, 139, 242, 0.15);
  border-radius: 6px;
  img{
     padding: 0 5px 0 0;
  }
  p{
    text-transform: capitalize;
    color: #FFFFFF;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
  width: 100%;
  h3{
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #0D1C2E;
    font-size: 25px;
    padding: 5px 0;
  }
  p{
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #707C97;
  }
`;


const Headers = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 30px 0 0 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 36%;
  height: 100%;
`;

export default Chats;
