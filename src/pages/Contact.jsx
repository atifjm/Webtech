import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  height: 80vh;
  background-color: lightgrey;
`;
const Header = styled.h2`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  padding-top: 10px;
  font-weight: 600;
`;
const Wrapper = styled.div`
  display: flex;
  height: 70%;
`;
const Left = styled.div`
  flex: 1;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  height: 100%;
  padding-right: 40px;
`;
const Input = styled.input`
  width: 20vw;
  height: 4vh;
  margin-bottom: 10px;
  padding: 5px;
  border: none;
  border-radius: 4px;
`;
const TextArea = styled.textarea`
  width: 20vw;
  height: 20vh;
  margin-bottom: 10px;
  padding: 5px;
  border: none;
  border-radius: 3px;
`;
const Button = styled.button`
  padding: 5px 10px;
  color: #61dbfb;
  background-color: black;
`;
const Right = styled.div`
  flex: 1;
`;
const RightWrapper = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100%;
`;
const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Address = styled.p`
  margin-left: 20px;
  font-size: 14px;
  color: gray;
`;
const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Email = styled.p`
  margin-left: 20px;
  font-size: 14px;
  color: gray;
`;
const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Mobile = styled.p`
  margin-left: 20px;
  font-size: 14px;
  color: gray;
`;
const Map = styled.div`
  height: 30vh;
`;

const Contact = () => {
  return (
    <Container>
      <Header>Contact Us</Header>
      <Wrapper>
        <Left>
          <Form>
            <Input placeholder="Enter Name"></Input>
            <Input placeholder="Enter Email"></Input>
            <Input placeholder="Enter Phone"></Input>
            <TextArea placeholder="Type Your Message "></TextArea>
            <Button>Submit</Button>
          </Form>
        </Left>

        <Right>
          <RightWrapper>
            <AddressWrapper>
              <LocationOnIcon style={{ fontSize: "20" }} />
              <Address>Office 306, DIC building 4, Dubai, UAE </Address>
            </AddressWrapper>
            <MobileWrapper>
              <CallIcon style={{ fontSize: "20" }} />
              <Mobile>+971 4 286 1000</Mobile>
            </MobileWrapper>
            <EmailWrapper>
              <EmailIcon style={{ fontSize: "20" }} />
              <Email>info@webtech.com</Email>
            </EmailWrapper>

            <Map>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2681252597495!2d55.157039314482205!3d25.092783542087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6be20232a78b%3A0x4f6727442f0bd497!2sDubai%20Internet%20City!5e0!3m2!1sen!2s!4v1678197757781!5m2!1sen!2s"></iframe>
            </Map>
          </RightWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;
