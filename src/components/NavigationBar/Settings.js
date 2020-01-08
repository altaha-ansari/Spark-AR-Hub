import  React  from "react";
import { IconButton, MenuItem, Menu } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

function Settings({ MenuItems }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return <div>
    <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="end" color="inherit" onClick={handleClick}>
      <SettingsIcon></SettingsIcon>
    </IconButton>
    <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    children={MenuItems}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
    >
    {
    MenuItems.map( (x,y) => <MenuItem onClick={handleClose} key={y}>{x}</MenuItem> )
    }
    </Menu>
    </div>
}

export default Settings;