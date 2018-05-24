import React, { Fragment } from 'react';
import { Actions } from 'react-native-router-flux';
import { Content, View, Text, H3, Button, Card, CardItem, Body } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 0,
  },
  cardItemHeading: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardItemText: {
    marginBottom: 15,
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    flexGrow: 1,
    margin: 5,
  },
});

const ErrorPage = () => (
  <Fragment>
    <Content>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <H3 style={styles.cardItemHeading}>Oops, something went wrong :(</H3>
            <View style={styles.modalButtonContainer}>
              <Button
                block
                light
                style={styles.modalButton}
                onPress={() => Actions.reset()}
              >
                <Text>Home</Text>
              </Button>
            </View>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </Fragment>
);

ErrorPage.propTypes = {};

export default ErrorPage;
