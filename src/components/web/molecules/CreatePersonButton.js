import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

const CreatePersonButton = ({
  classes,
  setCreatePersonVisible,
}) => (
  <Button
    variant="fab"
    color="primary"
    aria-label="add"
    className={classes.button}
    onClick={() => setCreatePersonVisible(true)}
  >
    <AddIcon />
  </Button>
);

CreatePersonButton.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  setCreatePersonVisible: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreatePersonButton);
