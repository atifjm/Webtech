import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import { sliderItems } from "../../data";

const Container = styled.div`
  height: 60vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f7f7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  
`;
const Img = styled.img`
  height: 80%;
  width: 50vw;
`;
const InfoContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 50vw;
  background-color: rgba(0,0,0,0.9);
  
`;
const Info = styled.h1`
    font-size: 70px;
    font-weight: 500;
    color: white;
    margin-top: 100px;
    margin-left: 100px;
    
`;
const Title = styled.h2`
    font-size: 65px;
    font-weight: 400;
    color: #61DBFB;
    margin-left: 100px;
    margin-top: -20px;
    
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Info>{item.info}</Info>
                <Title>{item.title}</Title>
            </InfoContainer>
          </Slide>
        ))};
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
