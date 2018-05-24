import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const BasicTemplate = ({ children }) => (
  <Container style={styles.container}>
    {children}
  </Container>
);

BasicTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BasicTemplate;
