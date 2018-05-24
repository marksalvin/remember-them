import React from 'react';
import PropTypes from 'prop-types';
import { Item, Input, Label, View, Text, H3, Button, Toast } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalTitle: {
    marginBottom: 20,
  },
  modalForm: {
    marginBottom: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    flexGrow: 1,
    margin: 5,
  },
});

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
    return value => this.setState({ ...this.state, [id]: value });
  }

  render() {
    const {
      index,
      isEditPersonVisible,
      setEditPersonVisible,
      editPerson,
      personEdited,
      acknowledgePersonEdited,
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
      <Modal
        animationIn="slideInUp"
        isVisible={isEditPersonVisible}
        onModalHide={() => {
          setEditPersonVisible(false);
        }}
      >
        <View style={styles.modalContent}>
          <ScrollView>
            <H3 style={styles.modalTitle}>Ok, so you've got some new deet's...</H3>
            <Text>Quick, update their details! ;)</Text>
            <View style={styles.modalForm}>
              <Item floatingLabel>
                <Label>What's their name?</Label>
                <Input
                  onChangeText={this.setFieldValue('name')}
                  value={name}
                />
              </Item>
              <Item floatingLabel>
                <Label>Where do they live?</Label>
                <Input
                  onChangeText={this.setFieldValue('home')}
                  value={home}
                />
              </Item>
              <Item floatingLabel>
                <Label>What are they into?</Label>
                <Input
                  onChangeText={this.setFieldValue('hobbies')}
                  value={hobbies}
                />
              </Item>
              <Item floatingLabel>
                <Label>What are they doing for work?</Label>
                <Input
                  onChangeText={this.setFieldValue('work')}
                  value={work}
                />
              </Item>
              <Item floatingLabel>
                <Label>Where are they from?</Label>
                <Input
                  onChangeText={this.setFieldValue('origin')}
                  value={origin}
                />
              </Item>
              <Item floatingLabel>
                <Label>Anything else?</Label>
                <Input
                  onChangeText={this.setFieldValue('additional')}
                  value={additional}
                />
              </Item>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button
                block
                light
                style={styles.modalButton}
                onPress={() => setEditPersonVisible(false)}
              >
                <Text>Cancel</Text>
              </Button>
              <Button
                block
                style={styles.modalButton}
                onPress={() => {
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
                  acknowledgePersonEdited();

                  Toast.show({
                    text: 'Saved!',
                    buttonText: 'Okay',
                    duration: 3000,
                  });
                }}
              >
                <Text>Save</Text>
              </Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

EditPersonModal.propTypes = {
  isEditPersonVisible: PropTypes.bool.isRequired,
  setEditPersonVisible: PropTypes.func.isRequired,
  editPerson: PropTypes.func.isRequired,
  personEdited: PropTypes.func.isRequired,
  acknowledgePersonEdited: PropTypes.func.isRequired,
};

export default EditPersonModal;
