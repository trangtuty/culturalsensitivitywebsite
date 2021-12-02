import styled from 'styled-components';

const Container = styled.div`
    width:250px;
    height:100vh;
    background-color:#D3D3D3;
    position:fixed;
    top:0;
    left:0;
`
const StyledLink = styled.a`
    text-align:left;
    text-decoration:none;
`
const NavigationHeader = styled.h1`
    font-size:1em;
    color:black;
    margin-left:15%;
`
function DrawerNav() {
    return (
    <Container>
        <StyledLink href="http://localhost:3000/home">
           <NavigationHeader> Home </NavigationHeader>
        </StyledLink>
        <StyledLink href="http://localhost:3000/recepies">
           <NavigationHeader> Recepies </NavigationHeader>
        </StyledLink>
        <StyledLink href="http://localhost:3000/inforamtion">
           <NavigationHeader> Patient Information </NavigationHeader>
        </StyledLink>
        <StyledLink href="http://localhost:3000/religion">
           <NavigationHeader> Religion </NavigationHeader>
        </StyledLink>
        <StyledLink href="http://localhost:3000/calendar">
           <NavigationHeader> Calendar </NavigationHeader>
        </StyledLink>
    </Container>
    );
  }
  
  export default DrawerNav;