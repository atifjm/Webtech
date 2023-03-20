import styled from 'styled-components';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    margin-bottom: 40px;
`

const Cards = () => {
  return (
    <Container>
        <Card1/>
        <Card2/>
        <Card3/>
    </Container>
  )
}

export default Cards
