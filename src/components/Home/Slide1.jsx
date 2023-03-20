import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {slide} from '../../data';

const Container = styled.div`
  width: 25vw;
  height: 80vh;
  margin: 50px 40px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 px;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 50vh;
  margin-bottom: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.h2`
  margin-bottom: 15px;
  font-weight: 700;
`;
const Text = styled.p`
  margin-bottom: 20px;
  letter-spacing: 1px;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const TextLink = styled.p`
  color: #61dbfb;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
`;


const Slide1 = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={slide[0].img} />
        </ImgContainer>
        <Title>{slide[0].title}</Title>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic atque
          sunt corrupti, molestias labore obcaecati dolore debitis iure
          corporis! Quaerat.
        </Text>
        <LinkWrapper>
          <TextLink>{slide[0].title}</TextLink>
          <KeyboardArrowRightIcon style={{color:"#61DBFB", fontWeight: 400, fontSize: "30px"}} />
        </LinkWrapper>
      </Wrapper>
    </Container>
  );
};

export default Slide1;
