import styled from 'styled-components';
import Slide1 from './Slide1';
import Slide2 from './Slide2.';
import Slide3 from './Slide3';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-top: 50px;
`

const Slides = () => {
  return (
    <Container>
        <Slide1/>
        <Slide2/>
        <Slide3/>
    

    </Container>
  )
}

export default Slides
