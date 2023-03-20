import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: auto;
    margin-bottom: 100px;
`
const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding-top: 20px;

`
const Img = styled.img`
    width: 50%;
    height: 100%;
`
const Right = styled.div`
    flex: 1;
`
const RightWrapper = styled.div`
    width: 50%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Heading = styled.h2`
    font-weight: 700;
`
const Text = styled.p`
    font-weight: 400;
    letter-spacing: 1px;
    text-align: justify;
`
const HR = styled.hr`
  width: 95%;
  border: 0.5px solid #61dbfb;
  margin-top: 5px;
  margin-bottom: 20px;
`

const Slide1 = () => {
  return (
    <Container>
        <Wrapper>
        <Left><Img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb"/></Left>
        <Right>
            <RightWrapper>
            <Heading>WEB DEVELOPMENT.</Heading>
            <HR/>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et accusantium totam inventore minus eum tempora repellendus perspiciatis unde sunt sequi temporibus, perferendis non deleniti laborum numquam impedit alias facilis accusamus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, cupiditate....</Text>
            </RightWrapper>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Slide1
