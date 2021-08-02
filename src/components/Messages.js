import React from "react";
import styled from "styled-components";
import user3 from "../assets/user3.png";

const Messages = () => {
  return (
    <Container>
     <Headers>
      <UserHeader>
        <ImageWrapper>
        <img src={user3} alt="" />
        </ImageWrapper>
       <UserName>
       <p className='name'>Nika Jerrardo</p>
       <p className='status'>last online 5 hours ago</p>
       </UserName>
      </UserHeader>
     </Headers>
     <UserChatBox>
       <UserMessage>
       <UserProfile>
       <img src={user3} alt="" />
       </UserProfile>
      <p>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.</p>
       </UserMessage>
       <UserMessage>
       <UserProfile>
       <img class='hidden' src={user3} alt="" />
       </UserProfile>
      <p>Can I send you files?</p>
       </UserMessage>
   </UserChatBox>
    </Container>
  );
};


const UserMessage = styled.div`
  display: flex;
  width: 70%;
  margin: 10px 0 0 0;
  p{
    font-size: 12px;
    padding: 10px 15px;
    background: linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%);
    /* Shadow Block Message My Opponent */
    
    box-shadow: 10px 10px 25px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 50px rgba(42, 139, 242, 0.1);
    border-radius: 0px 10px 10px 10px;
  }
  
`;

const UserProfile = styled.div`
  display: flex;
  padding: 0 12px 0px 20px;
  img{
    border-radius: 50%;
    height: 36px;
    width: 36px;
  }
  img.hidden{
    visibility: hidden;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  img{
    border-radius: 50%;
  }
`;

const UserName = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  p.name{
    text-transform: capitalize;
    font-weight: bold;
    color: #0D1C2E;
  }
  p.status{
    color: #2A8BF2;
    font-size: 14px;
    font-weight: bold;
    margin: 3px 0 0 0;
  }
`;

const UserChatBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  margin: 2px 0 25px 0;
  flex-direction: column;
  img{
    border-radius: 50%;
    height: 36px;
    width: 36px;
  }
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  background: #FAFBFF;
  padding: 15px 0px;
  img{
    border-radius: 50%;
  }
  
`;

const Headers = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    margin: 55px 0 0 0;
    background: #FAFBFF;
    border-radius: 6px 6px 0px 0px
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
`;

export default Messages;
