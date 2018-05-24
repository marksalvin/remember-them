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
    return value => this.setState({ ...this.state, [id]: value });
  }

  render() {
    const {
      isCreatePersonVisible,
      setCreatePersonVisible,
      createPerson,
      personCreated,
      acknowledgePersonCreated,
    } = this.props;

    return (
      <Modal
        animationIn="slideInUp"
        isVisible={isCreatePersonVisible}
        onModalHide={() => {
          setCreatePersonVisible(false);
        }}
      >
        <View style={styles.modalContent}>
          <ScrollView>
            <H3 style={styles.modalTitle}>Ok, so you've just met someone new...</H3>
            <Text>Quick, get their details down ;)</Text>
            <View style={styles.modalForm}>
              <Item floatingLabel>
                <Label>What's their name?</Label>
                <Input
                  onChangeText={this.setFieldValue('name')}
                  value={this.state.name}
                />
              </Item>
              <Item floatingLabel>
                <Label>Where do they live?</Label>
                <Input
                  onChangeText={this.setFieldValue('home')}
                  value={this.state.home}
                />
              </Item>
              <Item floatingLabel>
                <Label>What are they into?</Label>
                <Input
                  onChangeText={this.setFieldValue('hobbies')}
                  value={this.state.hobbies}
                />
              </Item>
              <Item floatingLabel>
                <Label>What are they doing for work?</Label>
                <Input
                  onChangeText={this.setFieldValue('work')}
                  value={this.state.work}
                />
              </Item>
              <Item floatingLabel>
                <Label>Where are they from?</Label>
                <Input
                  onChangeText={this.setFieldValue('origin')}
                  value={this.state.origin}
                />
              </Item>
              <Item floatingLabel>
                <Label>Anything else?</Label>
                <Input
                  onChangeText={this.setFieldValue('additional')}
                  value={this.state.additional}
                />
              </Item>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button
                block
                light
                style={styles.modalButton}
                onPress={() => setCreatePersonVisible(false)}
              >
                <Text>Cancel</Text>
              </Button>
              <Button
                block
                style={styles.modalButton}
                onPress={() => {
                  createPerson(
                    this.state.name,
                    this.state.home,
                    this.state.hobbies,
                    this.state.work,
                    this.state.origin,
                    this.state.additional,
                  );
                  personCreated();
                  acknowledgePersonCreated();

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

CreatePersonModal.propTypes = {
  isCreatePersonVisible: PropTypes.bool.isRequired,
  setCreatePersonVisible: PropTypes.func.isRequired,
  createPerson: PropTypes.func.isRequired,
  personCreated: PropTypes.func.isRequired,
  acknowledgePersonCreated: PropTypes.func.isRequired,
};

export default CreatePersonModal;
