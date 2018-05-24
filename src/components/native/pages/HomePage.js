import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Content, List, ListItem, Text, Body, Left, Icon } from 'native-base';
import uuidv1 from 'uuid/v1';
import CreatePersonModal from '../organisms/CreatePersonModal';
import CreatePersonButton from '../molecules/CreatePersonButton';

const HomePage = ({
  isCreatePersonVisible,
  setCreatePersonVisible,
  people,
  createPerson,
  personCreated,
  // isPersonCreatedVisible,
  acknowledgePersonCreated,
  // undoPersonCreated,
  // isPersonDeletedVisible,
  // acknowledgePersonDeleted,
}) => (
  <Fragment>
    <Content>
      <List>
        {Array.isArray(people) && people.map((person, index) => (
          <ListItem avatar key={uuidv1()} onPress={() => Actions.personpage({ index })}>
            <Left>
              <Icon type="MaterialIcons" name="person" />
            </Left>
            <Body>
              <Text>{person.name}</Text>
              <Text note>{person.home}</Text>
            </Body>
          </ListItem>
        ))}
      </List>
    </Content>
    <CreatePersonButton
      setCreatePersonVisible={setCreatePersonVisible}
      isCreatePersonVisible={isCreatePersonVisible}
    />
    <CreatePersonModal
      isCreatePersonVisible={isCreatePersonVisible}
      setCreatePersonVisible={setCreatePersonVisible}
      createPerson={createPerson}
      personCreated={personCreated}
      acknowledgePersonCreated={acknowledgePersonCreated}
    />
  </Fragment>
);

HomePage.propTypes = {
  isCreatePersonVisible: PropTypes.bool.isRequired,
  setCreatePersonVisible: PropTypes.func.isRequired,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  createPerson: PropTypes.func.isRequired,
  personCreated: PropTypes.func.isRequired,
  // isPersonCreatedVisible: PropTypes.bool.isRequired,
  acknowledgePersonCreated: PropTypes.func.isRequired,
  // undoPersonCreated: PropTypes.func.isRequired,
  // isPersonDeletedVisible: PropTypes.bool.isRequired,
  // acknowledgePersonDeleted: PropTypes.func.isRequired,
};

export default HomePage;
