import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    background-color: rgba(0,0,0,0.8); 
    position: sticky;
    top: 0; 
    z-index: 1;

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
const Left = styled.div`
    flex: 1;
`
const Logo = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #61DBFB;
    cursor: pointer;
`
const Right = styled.div`
    flex: 0.75;
    display: flex;
    justify-content: space-evenly;
`
const Links = styled.span`
    color: white;
    cursor: pointer;
    letter-spacing: 1.5px;
    &: hover {
        color: #61DBFB;
    } 
    &:active {
        background-color: #61DBFB;
        color: white;
    }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Link style={{textDecoration: "none"}} to="/"><Logo>WebTech.</Logo></Link>
            </Left>
            <Right>
                <Link style={{textDecoration: "none"}} to="/" ><Links to='home'>Home</Links></Link>
                <Link style={{textDecoration: "none"}} to="/about"><Links>About</Links></Link>
                <Link style={{textDecoration: "none"}} to="/services"><Links>Services</Links></Link>
                <Link style={{textDecoration: "none"}} to="/team"><Links>Team</Links></Link>
                <Link style={{textDecoration: "none"}} to="/contact"><Links>Contact</Links></Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
