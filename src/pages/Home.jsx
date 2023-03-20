import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import Slider from '../components/Home/Slider';
import Slides from '../components/Home/Slides';

const Container = styled.div`
  
`

const Home = () => {
  return (
    <Container>
      <Slider/>
      <Slides/>
      <Newsletter/>
    </Container>
  )
}

export default Home
