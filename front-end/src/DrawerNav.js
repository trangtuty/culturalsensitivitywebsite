import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const StyledLink = styled.a`
    text-align:left;
    text-decoration:none;
`
const NavigationHeader = styled.h1`
    font-size:1em;
    color:black;
    margin-left:15%;
`
const Container = styled.div`
  background-color: #D3D3D3;
  height:50px;
  width:100%;
  position:fixed;
  top:0;
  left:0;
  display:flex;
  flex-direction:row;
`
const ContainerLeft = styled.div`
  width:90%;
`
const ContainerRight = styled.div`
  width:10%;
`
export default function DrawerNav() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
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
      </List>
    </Box>
  );

  return (
    <Container>
      <ContainerLeft>Logo</ContainerLeft>
      <ContainerRight>
      {['right',].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><FontAwesomeIcon icon={faBars} size="2x" color="black" /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      </ContainerRight>
    </Container>
  );
}