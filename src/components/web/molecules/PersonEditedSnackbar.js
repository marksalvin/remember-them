import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import * as R from 'ramda';

const i18n = R.path(['molecules', 'PersonEditedSnackbar'], require('../../../i18n').default);

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

const PersonEditedSnackbar = ({
  classes,
  isPersonEditedVisible,
  acknowledgePersonEdited,
}) => (
  <Snackbar
    open={isPersonEditedVisible}
    autoHideDuration={3000}
    onClose={acknowledgePersonEdited}
    ContentProps={{
      'aria-describedby': 'snackbar-fab-message-id',
      className: classes.snackbarContent,
    }}
    message={<span id="snackbar-fab-message-id">{i18n.saved}</span>}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={classes.close}
        onClick={acknowledgePersonEdited}
      >
        <CloseIcon />
      </IconButton>,
    ]}
    className={classes.snackbar}
  />
);

PersonEditedSnackbar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isPersonEditedVisible: PropTypes.bool.isRequired,
  acknowledgePersonEdited: PropTypes.func.isRequired,
};

export default withStyles(styles)(PersonEditedSnackbar);
