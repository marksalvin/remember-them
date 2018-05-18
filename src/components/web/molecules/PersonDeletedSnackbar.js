import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  appFrame: {
    width: 360,
    height: 360,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginBottom: theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabMoveUp: {
    transform: 'translate3d(0, -46px, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  fabMoveDown: {
    transform: 'translate3d(0, 0, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  snackbar: {
    position: 'absolute',
  },
  snackbarContent: {
    width: 360,
  },
});

const PersonDeletedSnackbar = ({
  classes,
  isPersonDeletedVisible,
  acknowledgePersonDeleted,
}) => (
  <Snackbar
    open={isPersonDeletedVisible}
    autoHideDuration={3000}
    onClose={acknowledgePersonDeleted}
    ContentProps={{
      'aria-describedby': 'snackbar-fab-message-id',
      className: classes.snackbarContent,
    }}
    message={<span id="snackbar-fab-message-id">Deleted!</span>}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={classes.close}
        onClick={acknowledgePersonDeleted}
      >
        <CloseIcon />
      </IconButton>,
    ]}
    className={classes.snackbar}
  />
);

PersonDeletedSnackbar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isPersonDeletedVisible: PropTypes.bool.isRequired,
  acknowledgePersonDeleted: PropTypes.func.isRequired,
};

export default withStyles(styles)(PersonDeletedSnackbar);
