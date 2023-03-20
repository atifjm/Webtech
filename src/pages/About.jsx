import styled from 'styled-components';
import Cards from '../components/About/Cards';
import Newsletter from '../components/Newsletter';

const Container = styled.div`
  height: auto;
  width: 100vw;
  
`

const Header = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #61DBFB;
  opacity: 0.8;
`
const Left = styled.div`
  flex: 1;
`
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const Logo = styled.div`
  font-size: 70px;
  font-weight: 600;

`
const LogoText = styled.h1`
  font-size: 36px;

`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 22px;
  color: black;

`
const RightWrapper = styled.div``
const Heading = styled.p``
const Main = styled.div`
  width: 100%;
`

const About = () => {
  return (
    <Container>
      <Header>
        <Left>
          <LeftWrapper>
            <Logo>WebTech.</Logo>
            
            </LeftWrapper>
          </Left>
        <Right>
          <RightWrapper>
          <LogoText>Home of Web Technologies</LogoText>
            <Heading>Web Solutions with Latest Web Technologies</Heading>
            </RightWrapper></Right>
      </Header>
      <Main>
        <Cards/>
      </Main>
      <Newsletter/>
      
    </Container>
  )
}

export default About
