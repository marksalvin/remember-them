import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Content, Text, H3, Card, CardItem, Icon, Left, Body, Right } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import * as R from 'ramda';
import DeletePersonModal from '../organisms/DeletePersonModal';
import EditPersonModal from '../organisms/EditPersonModal';

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#546e7a',
  },
  cardActions: {
    backgroundColor: '#29b6f6',
  },
  card: {
    flex: 0,
    marginTop: getStatusBarHeight() + 20,
    marginLeft: 10,
    marginRight: 10,
  },
  cardItemHeading: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardItemText: {
    marginBottom: 15,
  },
});

const getIndex = () => (
  (
    Array.isArray(R.path(['state', 'routes'], Actions)) &&
    Actions.state.routes.length > 0 &&
    R.path(['params', 'index'], Actions.state.routes[Actions.state.routes.length - 1]) !== undefined
  ) ? (
      Actions.state.routes[Actions.state.routes.length - 1].params.index
    ) : (
      -1
    )
);

const getPerson = people => (Array.isArray(people) && getIndex() > -1 ? people[getIndex()] : {});

const PersonPage = ({
  isEditPersonVisible,
  setEditPersonVisible,
  people,
  editPerson,
  personEdited,
  // isPersonEditedVisible,
  acknowledgePersonEdited,
  // undoPersonCreated, // TODO redux time travel for this..?
  isDeletePersonVisible,
  setDeletePersonVisible,
  deletePerson,
  personDeleted,
  acknowledgePersonDeleted,
}) => (
  <Fragment>
    <Content style={styles.content}>
      <Card style={styles.card}>
        <CardItem style={styles.cardActions}>
          <Left>
            <Body>
              <Icon name="arrow-back" type="MaterialIcons" onPress={Actions.pop} />
            </Body>
          </Left>
          <Right>
            <Body style={{ flexDirection: 'row' }}>
              <Icon
                name="edit"
                type="MaterialIcons"
                onPress={() => setEditPersonVisible(true)}
                style={{ flexGrow: 1 }}
              />
              <Icon
                name="delete"
                type="MaterialIcons"
                onPress={() => setDeletePersonVisible(true)}
                style={{ flexGrow: 1 }}
              />
            </Body>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <H3 style={styles.cardItemHeading}>What's their name?</H3>
            <Text style={styles.cardItemText}>{getPerson(people).name}</Text>
            <H3 style={styles.cardItemHeading}>Where do they live?</H3>
            <Text style={styles.cardItemText}>{getPerson(people).home}</Text>
            <H3 style={styles.cardItemHeading}>What are they into?</H3>
            <Text style={styles.cardItemText}>{getPerson(people).hobbies}</Text>
            <H3 style={styles.cardItemHeading}>What are they doing for work?</H3>
            <Text style={styles.cardItemText}>{getPerson(people).work}</Text>
            <H3 style={styles.cardItemHeading}>Where do they come from?</H3>
            <Text style={styles.cardItemText}>{getPerson(people).origin}</Text>
            <H3 style={styles.cardItemHeading}>Anything else?</H3>
            <Text style={styles.cardItemText}>{getPerson(people).additional}</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
    <EditPersonModal
      index={getIndex()}
      people={people}
      isEditPersonVisible={isEditPersonVisible}
      setEditPersonVisible={setEditPersonVisible}
      editPerson={editPerson}
      personEdited={personEdited}
      acknowledgePersonEdited={acknowledgePersonEdited}
    />
    <DeletePersonModal
      index={getIndex()}
      setDeletePersonVisible={setDeletePersonVisible}
      isDeletePersonVisible={isDeletePersonVisible}
      deletePerson={deletePerson}
      personDeleted={personDeleted}
      acknowledgePersonDeleted={acknowledgePersonDeleted}
    />
  </Fragment>
);

PersonPage.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  isEditPersonVisible: PropTypes.bool.isRequired,
  setEditPersonVisible: PropTypes.func.isRequired,
  editPerson: PropTypes.func.isRequired,
  personEdited: PropTypes.func.isRequired,
  // isPersonEditedVisible: PropTypes.bool.isRequired,
  acknowledgePersonEdited: PropTypes.func.isRequired,
  // undoPersonCreated: PropTypes.func.isRequired,
  isDeletePersonVisible: PropTypes.bool.isRequired,
  setDeletePersonVisible: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
  personDeleted: PropTypes.func.isRequired,
  acknowledgePersonDeleted: PropTypes.func.isRequired,
};

export default PersonPage;
