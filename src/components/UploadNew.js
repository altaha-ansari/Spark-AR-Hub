import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import pink from '@material-ui/core/colors/pink';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

const primary = pink[400];

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    backgroundColor: primary,
  },
}));



export default function UploadNew() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Upload" aria-label="add">
        <Fab className={classes.absolute}>
          <PublishRoundedIcon style={{color: 'white'}}/>
        </Fab>
      </Tooltip>
    </div>
  );
}
