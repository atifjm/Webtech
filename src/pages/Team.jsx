import styled from 'styled-components';
import Memeber1 from '../components/Team/Memeber1';
import Memeber2 from '../components/Team/Memeber2';
import Memeber3 from '../components/Team/Memeber3';

const Container = styled.div`
  height: auto;
  width: auto;
`
const Header = styled.div`
  padding-top: 30px;
  height: 40%;
  display: flex;
  justify-content: center;
  
`
const Img = styled.img`
  width: 80%;
  height: 100%;
`


const Team = () => {
  return (
    <Container>
      <Header>
        <Img src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb"></Img>
      </Header>
      
      <Memeber1/>
      <Memeber2/>
      <Memeber3/>      
    </Container>
  )
}

export default Team
