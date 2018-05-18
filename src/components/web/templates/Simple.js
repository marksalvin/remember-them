import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    'flex-direction': 'column',
    height: '100vh',
  },
};

const Simple = ({ classes, children, title }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
    {children}
  </div>
);

Simple.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Simple);
