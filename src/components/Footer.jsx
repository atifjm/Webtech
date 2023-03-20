import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from '@mui/icons-material/Pinterest';
import {Link} from 'react-router-dom';

const Container = styled.div`
  height: 300px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-around;
`;
const Left = styled.div`
  flex: 1.5;
  padding: 30px;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #61DBFB;
  cursor: pointer;
  margin-bottom: 30px;
`;
const Text = styled.div`
  color: lightgrey;
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 1px;
`;
const Center = styled.div`
  flex: 1;
  padding: 30px;
`;
const Title = styled.div`
  color: lightgrey;
  font-size: 16px;
  letter-spacing: 1.5px;
  margin-bottom: 40px;
`;
const Links = styled.div`
  color: white;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  letter-spacing: 1px;
  &:hover {
    color: #61DBFB;
  }
`;
const Middle = styled.div`
  flex: 1;
  padding: 30px;
`;
const Right = styled.div`
  flex: 1;
  padding: 30px;
`;
const SocialContainer = styled.div`
  display: flex; 
`
const SocialIcon = styled.div`
  height: 30px;
  width: 30px;
  color: white;
  border-radius: 50%;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
      <Link to="/" style={{textDecoration: "none"}}><Logo>WebTech.</Logo></Link>
        <Text>All Rights Reserved </Text>
        <Text>Copyright 2023 WebTech </Text>
      </Left>
      <Center>
        <Title>Menu</Title>
        <Link to="/" style={{textDecoration: "none"}}><Links>Home</Links></Link>
        <Link to="/about" style={{textDecoration: "none"}}><Links>About</Links></Link>
        <Link to="/services" style={{textDecoration: "none"}}><Links>Services</Links></Link>
        <Link to="/team" style={{textDecoration: "none"}} ><Links>Team</Links></Link>
        <Link to="/contact" style={{textDecoration: "none"}}><Links>Contact</Links></Link>
      </Center>
      <Middle>
        <Title>Links</Title>
        <Link to="http://www.google.com" style={{textDecoration: "none"}} target="_blank"><Links>Google</Links></Link>
        <Link to="http://www.chatgpt.com" style={{textDecoration: "none"}} target="_blank"><Links>Chat GPT</Links></Link>
      </Middle>
      <Right>
        <Title>Social </Title>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon  />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon  />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon  />
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  );
};

export default Footer;
