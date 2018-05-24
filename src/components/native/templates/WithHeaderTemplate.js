import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const WithHeaderTemplate = ({ children, title }) => (
  <Container style={styles.container}>
    {children}
  </Container>
);

WithHeaderTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default WithHeaderTemplate;
