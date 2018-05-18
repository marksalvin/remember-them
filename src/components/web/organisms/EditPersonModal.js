import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// TODO multiline labels
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
        <DialogTitle id="form-dialog-title">Ok, so you've got some new deet's...</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Quick, update their details! ;)
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
            defaultValue={name}
          />
          <TextField
            margin="dense"
            id="home"
            label="Where do they live?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('home')}
            multiline
            defaultValue={home}
          />
          <TextField
            margin="dense"
            id="hobbies"
            label="What are they into?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('hobbies')}
            multiline
            defaultValue={hobbies}
          />
          <TextField
            margin="dense"
            id="work"
            label="What are they doing for work?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('work')}
            multiline
            defaultValue={work}
          />
          <TextField
            margin="dense"
            id="origin"
            label="Where are they from?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('origin')}
            multiline
            defaultValue={origin}
          />
          <TextField
            margin="dense"
            id="additional"
            label="Anything else?"
            type="text"
            fullWidth
            onChange={this.setFieldValue('additional')}
            multiline
            defaultValue={additional}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditPersonVisible(false)} color="primary">
            Cancel
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
            Save
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