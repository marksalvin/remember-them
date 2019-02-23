import uuidv1 from 'uuid/v1';
import * as R from 'ramda';

const SET_CREATE_PERSON_VISIBLE = 'REMEMBER_THEM/SET_CREATE_PERSON_VISIBLE';
const CREATE_PERSON = 'REMEMBER_THEM/CREATE_PERSON';
const PERSON_CREATED = 'REMEMBER_THEM/PERSON_CREATED';
const ACKNOWLEDGE_PERSON_CREATED = 'REMEMBER_THEM/ACKNOWLEDGE_PERSON_CREATED';
const UNDO_PERSON_CREATED = 'REMEMBER_THEM/UNDO_PERSON_CREATED';
const SET_EDIT_PERSON_VISIBLE = 'REMEMBER_THEM/SET_EDIT_PERSON_VISIBLE';
const EDIT_PERSON = 'REMEMBER_THEM/EDIT_PERSON';
const PERSON_EDITED = 'REMEMBER_THEM/PERSON_EDITED';
const ACKNOWLEDGE_PERSON_EDITED = 'REMEMBER_THEM/ACKNOWLEDGE_PERSON_EDITED';
const SET_DELETE_PERSON_VISIBLE = 'REMEMBER_THEM/SET_DELETE_PERSON_VISIBLE';
const DELETE_PERSON = 'REMEMBER_THEM/DELETE_PERSON';
const PERSON_DELETED = 'REMEMBER_THEM/PERSON_DELETED';
const ACKNOWLEDGE_PERSON_DELETED = 'REMEMBER_THEM/ACKNOWLEDGE_PERSON_DELETED';

export const setCreatePersonVisibleAction = isCreatePersonVisible => ({
  type: SET_CREATE_PERSON_VISIBLE,
  isCreatePersonVisible,
});

export const createPersonAction = (name, home, hobbies, work, origin, additional) => ({
  type: CREATE_PERSON,
  name,
  home,
  hobbies,
  work,
  origin,
  additional,
});

export const personCreatedAction = () => ({
  type: PERSON_CREATED,
});

export const acknowledgePersonCreatedAction = () => ({
  type: ACKNOWLEDGE_PERSON_CREATED,
});

export const undoPersonCreatedAction = () => ({
  type: UNDO_PERSON_CREATED,
});

export const setEditPersonVisibleAction = isEditPersonVisible => ({
  type: SET_EDIT_PERSON_VISIBLE,
  isEditPersonVisible,
});

export const editPersonAction = (index, name, home, hobbies, work, origin, additional) => ({
  type: EDIT_PERSON,
  index,
  name,
  home,
  hobbies,
  work,
  origin,
  additional,
});

export const personEditedAction = () => ({
  type: PERSON_EDITED,
});

export const acknowledgePersonEditedAction = () => ({
  type: ACKNOWLEDGE_PERSON_EDITED,
});

export const setDeletePersonVisibleAction = isDeletePersonVisible => ({
  type: SET_DELETE_PERSON_VISIBLE,
  isDeletePersonVisible,
});

export const deletePersonAction = index => ({
  type: DELETE_PERSON,
  index,
});

export const personDeletedAction = () => ({
  type: PERSON_DELETED,
});

export const acknowledgePersonDeletedAction = () => ({
  type: ACKNOWLEDGE_PERSON_DELETED,
});

const setCreatePersonVisible = (state, { isCreatePersonVisible }) => ({
  ...state,
  isCreatePersonVisible,
});

const createPerson = (state, {
  name,
  home,
  hobbies,
  work,
  origin,
  additional,
}) => ({
  ...state,
  people: state.people.concat([{
    id: uuidv1(),
    name,
    home,
    hobbies,
    work,
    origin,
    additional,
  }]),
});

const personCreated = state => ({
  ...state,
  isCreatePersonVisible: false,
  isPersonCreatedVisible: true,
});

const acknowledgePersonCreated = state => ({
  ...state,
  isPersonCreatedVisible: false,
});

const undoPersonCreated = state => ({
  ...state,
  people: R.dropLast(1)(state.people),
  isPersonCreatedVisible: false,
});

const setEditPersonVisible = (state, { isEditPersonVisible }) => ({
  ...state,
  isEditPersonVisible,
});

const editPerson = (state, {
  index, // TODO change index for id
  name,
  home,
  hobbies,
  work,
  origin,
  additional,
}) => ({
  ...state,
  people: R.update(index, {
    id: state.people[index].id,
    name,
    home,
    hobbies,
    work,
    origin,
    additional,
  }, state.people),
});

const personEdited = state => ({
  ...state,
  isEditPersonVisible: false,
  isPersonEditedVisible: true,
});

const acknowledgePersonEdited = state => ({
  ...state,
  isPersonEditedVisible: false,
});

const setDeletePersonVisible = (state, { isDeletePersonVisible }) => ({
  ...state,
  isDeletePersonVisible,
});

const deletePerson = (state, { index }) => ({
  ...state,
  people: R.remove(index, 1, state.people),
});

const personDeleted = state => ({
  ...state,
  isDeletePersonVisible: false,
  isPersonDeletedVisible: true,
});

const acknowledgePersonDeleted = state => ({
  ...state,
  isPersonDeletedVisible: false,
});

const reducer = {
  [SET_CREATE_PERSON_VISIBLE]: setCreatePersonVisible,
  [CREATE_PERSON]: createPerson,
  [PERSON_CREATED]: personCreated,
  [ACKNOWLEDGE_PERSON_CREATED]: acknowledgePersonCreated,
  [UNDO_PERSON_CREATED]: undoPersonCreated,
  [SET_EDIT_PERSON_VISIBLE]: setEditPersonVisible,
  [EDIT_PERSON]: editPerson,
  [PERSON_EDITED]: personEdited,
  [ACKNOWLEDGE_PERSON_EDITED]: acknowledgePersonEdited,
  [SET_DELETE_PERSON_VISIBLE]: setDeletePersonVisible,
  [DELETE_PERSON]: deletePerson,
  [PERSON_DELETED]: personDeleted,
  [ACKNOWLEDGE_PERSON_DELETED]: acknowledgePersonDeleted,
};

const initialState = {
  isCreatePersonVisible: false,
  isPersonCreatedVisible: false,
  isEditPersonVisible: false,
  isPersonEditedVisible: false,
  isDeletePersonVisible: false,
  isPersonDeletedVisible: false,
  people: [],
};

export default (state = initialState, action) =>
  (action.type && reducer[action.type] ? reducer[action.type](state, action) : state);
