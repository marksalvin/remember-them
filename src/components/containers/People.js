import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as R from 'ramda';

import {
  setCreatePersonVisibleAction,
  createPersonAction,
  personCreatedAction,
  acknowledgePersonCreatedAction,
  undoPersonCreatedAction,
  setEditPersonVisibleAction,
  editPersonAction,
  personEditedAction,
  acknowledgePersonEditedAction,
  setDeletePersonVisibleAction,
  deletePersonAction,
  personDeletedAction,
  acknowledgePersonDeletedAction,
} from '../../state/modules/people';

const People = (props) => {
  const { ChildComponent } = props;

  return <ChildComponent {...R.omit(['ChildComponent'])(props)} />;
};

People.propTypes = {
  ChildComponent: PropTypes.func.isRequired,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  isCreatePersonVisible: PropTypes.bool.isRequired,
  setCreatePersonVisible: PropTypes.func.isRequired,
  isPersonCreatedVisible: PropTypes.bool.isRequired,
  createPerson: PropTypes.func.isRequired,
  personCreated: PropTypes.func.isRequired,
  isDeletePersonVisible: PropTypes.bool.isRequired,
  setDeletePersonVisible: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
  personDeleted: PropTypes.func.isRequired,
  isPersonDeletedVisible: PropTypes.bool.isRequired,
  personDeletedAction: PropTypes.func.isRequired,
  acknowledgePersonDeleted: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  people: state.people.people,
  isCreatePersonVisible: state.people.isCreatePersonVisible,
  isPersonCreatedVisible: state.people.isPersonCreatedVisible,
  isEditPersonVisible: state.people.isEditPersonVisible,
  isPersonEditedVisible: state.people.isPersonEditedVisible,
  isDeletePersonVisible: state.people.isDeletePersonVisible,
  isPersonDeletedVisible: state.people.isPersonDeletedVisible,
});

const mapDispatchToProps = dispatch => ({
  setCreatePersonVisible: bool => dispatch(setCreatePersonVisibleAction(bool)),
  createPerson: (name, home, hobbies, work, origin, additional) => (
    dispatch(createPersonAction(name, home, hobbies, work, origin, additional))
  ),
  personCreated: () => dispatch(personCreatedAction()),
  acknowledgePersonCreated: () => dispatch(acknowledgePersonCreatedAction()),
  undoPersonCreated: () => dispatch(undoPersonCreatedAction()),
  setEditPersonVisible: bool => dispatch(setEditPersonVisibleAction(bool)),
  editPerson: (index, name, home, hobbies, work, origin, additional) => (
    dispatch(editPersonAction(index, name, home, hobbies, work, origin, additional))
  ),
  personEdited: () => dispatch(personEditedAction()),
  acknowledgePersonEdited: () => dispatch(acknowledgePersonEditedAction()),
  setDeletePersonVisible: bool => dispatch(setDeletePersonVisibleAction(bool)),
  deletePerson: index => dispatch(deletePersonAction(index)),
  personDeleted: () => dispatch(personDeletedAction()),
  personDeletedAction: () => dispatch(personDeletedAction()),
  acknowledgePersonDeleted: () => dispatch(acknowledgePersonDeletedAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(People);
