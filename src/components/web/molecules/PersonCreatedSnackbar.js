import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

const PersonCreatedSnackbar = ({
  classes,
  isPersonCreatedVisible,
  acknowledgePersonCreated,
  undoPersonCreated,
}) => (
  <Snackbar
    open={isPersonCreatedVisible}
    autoHideDuration={3000}
    onClose={acknowledgePersonCreated}
    ContentProps={{
      'aria-describedby': 'snackbar-fab-message-id',
      className: classes.snackbarContent,
    }}
    message={<span id="snackbar-fab-message-id">Remembered!</span>}
    action={[
      <Button key="undo" color="secondary" size="small" onClick={undoPersonCreated}>
        UNDO
      </Button>,
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={classes.close}
        onClick={acknowledgePersonCreated}
      >
        <CloseIcon />
      </IconButton>,
    ]}
    className={classes.snackbar}
  />
);

PersonCreatedSnackbar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isPersonCreatedVisible: PropTypes.bool.isRequired,
  acknowledgePersonCreated: PropTypes.func.isRequired,
  undoPersonCreated: PropTypes.func.isRequired,
};

export default withStyles(styles)(PersonCreatedSnackbar);
