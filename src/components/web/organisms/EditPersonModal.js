import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as R from 'ramda';

const i18n = R.path(['organisms', 'EditPersonModal'], require('../../../i18n').default);

class EditPersonModal extends React.Component {
  constructor(props) {
    super(props);

    const {
      index,
      people,
    } = props;

    const {
      name,
      home,
      hobbies,
      work,
      origin,
      additional,
    } = people[index];

    this.state = {
      name,
      home,
      hobbies,
      work,
      origin,
      additional,
    };
  }

  setFieldValue(id) {
    return event => this.setState({ ...this.state, [id]: event.target.value });
  }

  render() {
    const {
      index,
      isEditPersonVisible,
      setEditPersonVisible,
      editPerson,
      personEdited,
    } = this.props;

    const {
      name,
      home,
      hobbies,
      work,
      origin,
      additional,
    } = this.state;

    return (
      <Dialog
        open={isEditPersonVisible}
        onClose={() => setEditPersonVisible(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{i18n.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {i18n.body}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={i18n.formItemName}
            type="text"
            fullWidth
            onChange={this.setFieldValue('name')}
            multiline
            defaultValue={name}
          />
          <TextField
            margin="dense"
            id="home"
            label={i18n.formItemHome}
            type="text"
            fullWidth
            onChange={this.setFieldValue('home')}
            multiline
            defaultValue={home}
          />
          <TextField
            margin="dense"
            id="hobbies"
            label={i18n.formItemHobbies}
            type="text"
            fullWidth
            onChange={this.setFieldValue('hobbies')}
            multiline
            defaultValue={hobbies}
          />
          <TextField
            margin="dense"
            id="work"
            label={i18n.formItemWork}
            type="text"
            fullWidth
            onChange={this.setFieldValue('work')}
            multiline
            defaultValue={work}
          />
          <TextField
            margin="dense"
            id="origin"
            label={i18n.formItemOrigin}
            type="text"
            fullWidth
            onChange={this.setFieldValue('origin')}
            multiline
            defaultValue={origin}
          />
          <TextField
            margin="dense"
            id="additional"
            label={i18n.formItemAdditional}
            type="text"
            fullWidth
            onChange={this.setFieldValue('additional')}
            multiline
            defaultValue={additional}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditPersonVisible(false)} color="primary">
            {i18n.cancelAction}
          </Button>
          <Button
            onClick={() => {
              editPerson(
                index,
                this.state.name,
                this.state.home,
                this.state.hobbies,
                this.state.work,
                this.state.origin,
                this.state.additional,
              );
              personEdited();
            }}
            color="primary"
          >
            {i18n.saveAction}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

EditPersonModal.propTypes = {
  index: PropTypes.number.isRequired,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  isEditPersonVisible: PropTypes.bool.isRequired,
  setEditPersonVisible: PropTypes.func.isRequired,
  editPerson: PropTypes.func.isRequired,
  personEdited: PropTypes.func.isRequired,
};

export default EditPersonModal;