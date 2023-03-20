import styled from "styled-components";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Container = styled.div`
  height: 60vh;
  width: 25vw;
  box-shadow: 3px 3px 5px;
`;
const Wrapper = styled.div`
  padding: 50px;
`;
const Heading = styled.h3`
  font-weight: 600;
`;
const HR = styled.hr`
  width: 50%;
  border: 0.5px solid #61dbfb;
  margin-top: 5px;
  margin-bottom: 20px;
`;
const Text = styled.div`
  letter-spacing: 1px;
  margin-bottom: 30px;
  font-weight: 400;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const TextLink = styled.div`
  font-weight: 400;
  font-size: 17px;
  color: #61dbfb;
`;

const Card3 = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>WHY CHOOSE US</Heading>
        <HR />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error
          dolor exercitationem! Asperiores tempora tenetur soluta deserunt nihil
          architecto fuga Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sint, repellendus.
        </Text>
        <LinkWrapper>
          <TextLink>Learn More</TextLink>
          <KeyboardDoubleArrowRightIcon
            style={{ color: "#61DBFB", fontWeight: 400, fontSize: "30px" }}/>
        </LinkWrapper>
      </Wrapper>
    </Container>
  );
};

export default Card3;
