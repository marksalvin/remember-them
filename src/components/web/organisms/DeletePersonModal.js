import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

const i18n = R.path(['organisms', 'DeletePersonModal'], require('../../../i18n').default);

const DeletePersonModal = ({
  index,
  isDeletePersonVisible,
  setDeletePersonVisible,
  deletePerson,
  personDeleted,
}) => (
  <Dialog
    open={isDeletePersonVisible}
    onClose={() => setDeletePersonVisible(false)}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">{i18n.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {i18n.body}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setDeletePersonVisible(false)} color="primary">
        {i18n.cancelAction}
      </Button>
      <Link
        to="/"
        onClick={() => {
          deletePerson(index);
          personDeleted();
        }}
      >
        <Button color="primary">{i18n.deleteAction}</Button>
      </Link>
    </DialogActions>
  </Dialog>
);

DeletePersonModal.propTypes = {
  index: PropTypes.number.isRequired,
  isDeletePersonVisible: PropTypes.bool.isRequired,
  setDeletePersonVisible: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
  personDeleted: PropTypes.func.isRequired,
};

export default DeletePersonModal;
