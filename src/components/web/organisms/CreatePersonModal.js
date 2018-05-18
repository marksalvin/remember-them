import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
        <DialogTitle id="form-dialog-title">Ok, so you've just met someone new...</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Quick, get their details down ;)
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="What's their name?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('name')}
            multiline
          />
          <TextField
            margin="dense"
            id="home"
            label="Where do they live?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('home')}
            multiline
          />
          <TextField
            margin="dense"
            id="hobbies"
            label="What are they into?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('hobbies')}
            multiline
          />
          <TextField
            margin="dense"
            id="work"
            label="What are they doing for work?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('work')}
            multiline
          />
          <TextField
            margin="dense"
            id="origin"
            label="Where are they from?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('origin')}
            multiline
          />
          <TextField
            margin="dense"
            id="additional"
            label="Anything else?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('additional')}
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreatePersonVisible(false)} color="primary">
            Cancel
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
            Save
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
