import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    'flex-direction': 'column',
    height: '100vh',
  },
};

const BasicTemplate = ({ classes, children }) => (
  <div className={classes.root}>
    {children}
  </div>
);

BasicTemplate.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(BasicTemplate);
