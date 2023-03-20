import styled from 'styled-components';

const Main = styled.div`
  height: 28%;
  display: flex;
  justify-content: center;

`
const Wrapper = styled.div`
  background-color: white;
  width: 80%;
  padding-top: 30px;

`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;

`
const Name = styled.h3`
  font-weight: 600;
`
const Title = styled.h4`
  font-weight: 400;
  margin-left: 5px;
`
const HR = styled.hr`
  width: 80%;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px thin #61DBFB;
`
const Description = styled.div`
  display: flex;
`
const TextWrapper = styled.div`
  flex: 1;
`
const Text = styled.p`
  width: 80%;
  padding-left: 20px;
`
const ImageWrapper = styled.div`
  flex: 1;
`
const Image = styled.img`
  
  width: 60%;
  height: 80%;
`

const Memeber1 = () => {
  return (
    <Main>
        <Wrapper>
          <TitleWrapper>
          <Name>Shiza Khan, </Name>
          <Title>Grafix Designer</Title>
          </TitleWrapper>
          <HR/>
          <Description>
            <TextWrapper>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque facilis architecto dolorum distinctio sequi magni aliquid provident voluptatibus perspiciatis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum dolore aspernatur sunt optio minima labore in fuga nobis nam  <br/><br/>Officiis quam vitae quod beatae modi libero, animi, pariatur obcaecati nesciunt nostrum exercitationem! Aliquid dolor aut illo laborum veritatis magni, sed repellat mollitia, officia fugiat porro cupiditate eveniet accusamus consequatur aspernatur quibusdam doloremque nostrum veniam voluptatum </Text>
            </TextWrapper>
            <ImageWrapper>
            <Image src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg"/>
            </ImageWrapper>
          </Description>
          </Wrapper>
      
      </Main>
  )
}

export default Memeber1
