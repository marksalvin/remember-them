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

const i18n = R.path(['organisms', 'CreatePersonModal'], require('../../../i18n').default);

class CreatePersonModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      home: '',
      hobbies: '',
      work: '',
      origin: '',
      additional: '',
    };
  }

  setFieldValue(id) {
    return event => this.setState({ ...this.state, [id]: event.target.value });
  }

  render() {
    const {
      isCreatePersonVisible,
      setCreatePersonVisible,
      createPerson,
      personCreated,
    } = this.props;

    return (
      <Dialog
        open={isCreatePersonVisible}
        onClose={() => setCreatePersonVisible(false)}
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
          />
          <TextField
            margin="dense"
            id="home"
            label={i18n.formItemHome}
            type="text"
            fullWidth
            onChange={this.setFieldValue('home')}
            multiline
          />
          <TextField
            margin="dense"
            id="hobbies"
            label={i18n.formItemHobbies}
            type="text"
            fullWidth
            onChange={this.setFieldValue('hobbies')}
            multiline
          />
          <TextField
            margin="dense"
            id="work"
            label={i18n.formItemWork}
            type="text"
            fullWidth
            onChange={this.setFieldValue('work')}
            multiline
          />
          <TextField
            margin="dense"
            id="origin"
            label={i18n.formItemOrigin}
            type="text"
            fullWidth
            onChange={this.setFieldValue('origin')}
            multiline
          />
          <TextField
            margin="dense"
            id="additional"
            label={i18n.formItemAdditional}
            type="text"
            fullWidth
            onChange={this.setFieldValue('additional')}
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreatePersonVisible(false)} color="primary">
            {i18n.cancelAction}
          </Button>
          <Button
            onClick={() => {
              createPerson(
                this.state.name,
                this.state.home,
                this.state.hobbies,
                this.state.work,
                this.state.origin,
                this.state.additional,
              );
              personCreated();
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

CreatePersonModal.propTypes = {
  isCreatePersonVisible: PropTypes.bool.isRequired,
  setCreatePersonVisible: PropTypes.func.isRequired,
  createPerson: PropTypes.func.isRequired,
  personCreated: PropTypes.func.isRequired,
};

export default CreatePersonModal;
