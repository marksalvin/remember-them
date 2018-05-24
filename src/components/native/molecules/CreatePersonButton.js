import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Fab } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#29b6f6',
  },
});

const CreatePersonButton = ({
  setCreatePersonVisible,
}) => (
  <Fab
    style={styles.fab}
    position="bottomRight"
    onPress={() => setCreatePersonVisible(true)}
  >
    <Icon name="add" />
  </Fab>
);

CreatePersonButton.propTypes = {
  setCreatePersonVisible: PropTypes.func.isRequired,
};

export default CreatePersonButton;
