import  React  from "react";
import { AppBar, Toolbar, Button, Typography, Avatar, Divider } from '@material-ui/core';
import Settings from './Settings';
import IsMobileView from '../../utils/IsMobileView';
import LeftDrawer from './Drawer';
import styled from 'styled-components';

const Container = styled.div`
    flexGrow: 1;
`;

const NavButton = styled(Button)`
   fontWeight: lighter;
`;


const MenuItems = ['Home', 'Spark AR Studio', 'Review Policies', 'Community'];
const NavSettings = ['Permissions','Notifications','Report a Problem','Log Out'];
function NavigationBar(){
  let NavBar;
  if(!IsMobileView())
    NavBar =  <Container> 
                <AppBar position='static'>
                 <Toolbar style={{backgroundColor: 'black'}}>
                   <img src="logo.png" alt="logo" height="40" width="30" style={{marginRight: '1em'}}/>
                   <Typography variant='body1'>Spark AR</Typography>
                   <Typography variant='body1' style={{fontWeight: 'lighter', marginLeft: '0.4em'}}>Hub</Typography>
                   <Divider/>
                   <Typography style={{flexGrow: 10}}>
                     {MenuItems.map((x,y) =>  <NavButton color="inherit" key={y}> {x} </NavButton> )}
                   </Typography>
                   <Avatar>A</Avatar>
                   <Button color="inherit">Altaha</Button>
                   <Settings MenuItems={NavSettings}></Settings>
                  </Toolbar>
                </AppBar>
               </Container>
              

  else
    NavBar =  <Container>
               <AppBar position='static'>
                 <Toolbar style={{backgroundColor: 'black'}}>
                 <img src="logo.png" alt="logo" height="40" width="30"/>
                   <Typography variant='body1' style={{ marginLeft: '1em'}}>Spark AR</Typography>
                   <Typography variant='body1' style={{fontWeight: 'lighter', marginLeft: '0.4em'}}>Hub</Typography>
                   <Divider/>
                   <Typography style={{flexGrow: 10}}>
                   </Typography>
                  <LeftDrawer/>
                  </Toolbar>
                </AppBar>
              </Container>
  
  


    return NavBar;
  }

export default NavigationBar;