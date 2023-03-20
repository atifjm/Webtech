import styled from 'styled-components';
import Slide1 from '../components/Services/Slide1';
import Slide2 from '../components/Services/Slide2';
import Slide3 from '../components/Services/Slide3';
import Slide4 from '../components/Services/Slide4';
import Newsletter from '../components/Newsletter';

const Container = styled.div`
  height: auto;
  width: 100vw;
`
const Header = styled.div`
  height: 50vh;
  width: 100%;
`
const Img = styled.img`
  width: 98.75%;
  height: 100%;
`
const Main = styled.div`
  
  margin-top: 50px;
  padding-bottom: 20px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const Services = () => {
  return (
    <Container>
      <Header>
        <Img src="https://images.pexels.com/photos/2882670/pexels-photo-2882670.jpeg?auto=compress&cs=tinysrgb"></Img>
      </Header>
      <Main>
        <Wrapper>
        <Slide1/>
        <Slide2 />
        <Slide3/>
        <Slide4/>
        </Wrapper>
      </Main>
      <Newsletter/>
      
    </Container>
  )
}

export default Services