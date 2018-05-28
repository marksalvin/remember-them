import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, H3, Button, Toast } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import * as R from 'ramda';

const i18n = R.path(['organisms', 'DeletePersonModal'], require('../../../i18n').default);

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
    marginTop: 10,
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalPrimaryButton: {
    flexGrow: 1,
    margin: 5,
    backgroundColor: '#29b6f6',
  },
  modalSecondaryButton: {
    flexGrow: 1,
    margin: 5,
  },
});

const DeletePersonModal = ({
  index,
  isDeletePersonVisible,
  setDeletePersonVisible,
  deletePerson,
  personDeleted,
  acknowledgePersonDeleted,
}) => (
  <Modal
    animationIn="slideInUp"
    isVisible={isDeletePersonVisible}
    onModalHide={() => {
      setDeletePersonVisible(false);
    }}
  >
    <View style={styles.modalContent}>
      <ScrollView>
        <H3 style={styles.modalTitle}>{i18n.title}</H3>
        <Text style={styles.modalText}>{i18n.body}</Text>
        <View style={styles.modalButtonContainer}>
          <Button
            block
            light
            style={styles.modalSecondaryButton}
            onPress={() => setDeletePersonVisible(false)}
          >
            <Text>{i18n.cancelAction}</Text>
          </Button>
          <Button
            block
            style={styles.modalPrimaryButton}
            onPress={() => {
              // Go to homepage
              Actions.pop();

              // Delete person from state and acknowledge toast (as no button press within native
              // toast)
              deletePerson(index);
              personDeleted();
              acknowledgePersonDeleted();

              Toast.show({
                text: i18n.deleted,
                buttonText: i18n.deletedAcknowledge,
                duration: 3000,
              });
            }}
          >
            <Text>{i18n.deleteAction}</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  </Modal>
);

DeletePersonModal.propTypes = {
  index: PropTypes.number.isRequired,
  isDeletePersonVisible: PropTypes.bool.isRequired,
  setDeletePersonVisible: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
  personDeleted: PropTypes.func.isRequired,
  acknowledgePersonDeleted: PropTypes.func.isRequired,
};

export default DeletePersonModal;
