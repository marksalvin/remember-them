/* eslint-env node, jest */
import uuidv1 from 'uuid/v1';

jest.mock('uuid/v1');

/**
 * Actions
 * */
it('setCreatePersonVisibleAction', () => {
  const { setCreatePersonVisibleAction: target } = require('./');

  const result = target('fake is create person visible');

  expect(result).toEqual({
    type: 'REMEMBER_THEM/SET_CREATE_PERSON_VISIBLE',
    isCreatePersonVisible: 'fake is create person visible',
  });
});

it('createPersonAction', () => {
  const { createPersonAction: target } = require('./');

  const result = target(
    'fake name',
    'fake home',
    'fake hobbies',
    'fake work',
    'fake origin',
    'fake additional',
  );

  expect(result).toEqual({
    type: 'REMEMBER_THEM/CREATE_PERSON',
    name: 'fake name',
    home: 'fake home',
    hobbies: 'fake hobbies',
    work: 'fake work',
    origin: 'fake origin',
    additional: 'fake additional',
  });
});

it('personCreatedAction', () => {
  const { personCreatedAction: target } = require('./');

  const result = target();

  expect(result).toEqual({
    type: 'REMEMBER_THEM/PERSON_CREATED',
  });
});

it('acknowledgePersonCreatedAction', () => {
  const { acknowledgePersonCreatedAction: target } = require('./');

  const result = target();

  expect(result).toEqual({
    type: 'REMEMBER_THEM/ACKNOWLEDGE_PERSON_CREATED',
  });
});

it('undoPersonCreatedAction', () => {
  const { undoPersonCreatedAction: target } = require('./');

  const result = target();

  expect(result).toEqual({
    type: 'REMEMBER_THEM/UNDO_PERSON_CREATED',
  });
});

it('setEditPersonVisibleAction', () => {
  const { setEditPersonVisibleAction: target } = require('./');

  const result = target('fake edit person visible');

  expect(result).toEqual({
    type: 'REMEMBER_THEM/SET_EDIT_PERSON_VISIBLE',
    isEditPersonVisible: 'fake edit person visible',
  });
});

it('editPersonAction', () => {
  const { editPersonAction: target } = require('./');

  const result = target(
    'fake index',
    'fake name',
    'fake home',
    'fake hobbies',
    'fake work',
    'fake origin',
    'fake additional',
  );

  expect(result).toEqual({
    type: 'REMEMBER_THEM/EDIT_PERSON',
    index: 'fake index',
    name: 'fake name',
    home: 'fake home',
    hobbies: 'fake hobbies',
    work: 'fake work',
    origin: 'fake origin',
    additional: 'fake additional',
  });
});

it('personEditedAction', () => {
  const { personEditedAction: target } = require('./');

  const result = target();

  expect(result).toEqual({
    type: 'REMEMBER_THEM/PERSON_EDITED',
  });
});

it('acknowledgePersonEditedAction', () => {
  const { acknowledgePersonEditedAction: target } = require('./');

  const result = target();

  expect(result).toEqual({
    type: 'REMEMBER_THEM/ACKNOWLEDGE_PERSON_EDITED',
  });
});

it('setDeletePersonVisibleAction', () => {
  const { setDeletePersonVisibleAction: target } = require('./');

  const result = target('fake is delete person visible');

  expect(result).toEqual({
    type: 'REMEMBER_THEM/SET_DELETE_PERSON_VISIBLE',
    isDeletePersonVisible: 'fake is delete person visible',
  });
});

it('deletePersonAction', () => {
  const { deletePersonAction: target } = require('./');

  const result = target('fake index');

  expect(result).toEqual({
    type: 'REMEMBER_THEM/DELETE_PERSON',
    index: 'fake index',
  });
});

it('personDeletedAction', () => {
  const { personDeletedAction: target } = require('./');

  const result = target();

  expect(result).toEqual({
    type: 'REMEMBER_THEM/PERSON_DELETED',
  });
});

it('acknowledgePersonDeletedAction', () => {
  const { acknowledgePersonDeletedAction: target } = require('./');

  const result = target();

  expect(result).toEqual({
    type: 'REMEMBER_THEM/ACKNOWLEDGE_PERSON_DELETED',
  });
});

/**
 * Reducers
 * */
it('setCreatePersonVisible', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/SET_CREATE_PERSON_VISIBLE',
    isCreatePersonVisible: 'fake is create person visible',
  };

  const fakeState = {
    fakeKey: 'fake value',
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    isCreatePersonVisible: 'fake is create person visible',
  };

  expect(result).toEqual(expectedResult);
});

it('createPerson', () => {
  uuidv1.mockReturnValue('fake uuid');

  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/CREATE_PERSON',
    name: 'fake name',
    home: 'fake home',
    hobbies: 'fake hobbies',
    work: 'fake work',
    origin: 'fake origin',
    additional: 'fake additional',
  };

  const fakeState = {
    fakeKey: 'fake value',
    people: [
      {
        fakeKey: 'fake value',
      },
    ],
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    people: [
      {
        fakeKey: 'fake value',
      },
      {
        id: 'fake uuid',
        name: 'fake name',
        home: 'fake home',
        hobbies: 'fake hobbies',
        work: 'fake work',
        origin: 'fake origin',
        additional: 'fake additional',
      },
    ],
  };

  expect(uuidv1).toHaveBeenCalledTimes(1);
  expect(result).toEqual(expectedResult);
});

it('personCreated', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/PERSON_CREATED',
  };

  const fakeState = {
    fakeKey: 'fake value',
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    isCreatePersonVisible: false,
    isPersonCreatedVisible: true,
  };

  expect(result).toEqual(expectedResult);
});

it('acknowledgePersonCreated', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/ACKNOWLEDGE_PERSON_CREATED',
  };

  const fakeState = {
    fakeKey: 'fake value',
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    isPersonCreatedVisible: false,
  };

  expect(result).toEqual(expectedResult);
});

it('undoPersonCreated', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/UNDO_PERSON_CREATED',
  };

  const fakeState = {
    fakeKey: 'fake value',
    people: [
      {
        fakeKey: 'fake key',
      },
      {
        anotherFakeKey: 'another fake key',
      },
    ],
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    people: [
      {
        fakeKey: 'fake key',
      },
    ],
    isPersonCreatedVisible: false,
  };

  expect(result).toEqual(expectedResult);
});

it('setEditPersonVisible', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/SET_EDIT_PERSON_VISIBLE',
    isEditPersonVisible: 'fake is edit person visible',
  };

  const fakeState = {
    fakeKey: 'fake value',
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    isEditPersonVisible: 'fake is edit person visible',
  };

  expect(result).toEqual(expectedResult);
});

it('editPerson', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/EDIT_PERSON',
    index: 1,
    name: 'updated fake name',
    home: 'updated fake home',
    hobbies: 'updated fake hobbies',
    work: 'updated fake work',
    origin: 'updated fake origin',
    additional: 'updated fake additional',
  };

  const fakeState = {
    fakeKey: 'fake value',
    people: [
      {
        fakeKey: 'fake value',
      },
      {
        id: 'fake uuid',
        name: 'fake name',
        home: 'fake home',
        hobbies: 'fake hobbies',
        work: 'fake work',
        origin: 'fake origin',
        additional: 'fake additional',
      },
    ],
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    people: [
      {
        fakeKey: 'fake value',
      },
      {
        id: 'fake uuid',
        name: 'updated fake name',
        home: 'updated fake home',
        hobbies: 'updated fake hobbies',
        work: 'updated fake work',
        origin: 'updated fake origin',
        additional: 'updated fake additional',
      },
    ],
  };

  expect(result).toEqual(expectedResult);
});

it('personEdited', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/PERSON_EDITED',
  };

  const fakeState = {
    fakeKey: 'fake value',
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    isEditPersonVisible: false,
    isPersonEditedVisible: true,
  };

  expect(result).toEqual(expectedResult);
});

it('acknowledgePersonEdited', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/ACKNOWLEDGE_PERSON_EDITED',
  };

  const fakeState = {
    fakeKey: 'fake value',
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    isPersonEditedVisible: false,
  };

  expect(result).toEqual(expectedResult);
});

it('setDeletePersonVisible', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/SET_DELETE_PERSON_VISIBLE',
    isDeletePersonVisible: 'fake is delete person visible',
  };

  const fakeState = {
    fakeKey: 'fake value',
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    isDeletePersonVisible: 'fake is delete person visible',

  };

  expect(result).toEqual(expectedResult);
});

it('deletePerson', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/DELETE_PERSON',
    index: 1,
  };

  const fakeState = {
    fakeKey: 'fake value',
    people: [
      {
        fakeKey: 'fake value',
      },
      {
        fakerKey: 'faker value',
      },
      {
        fakestKey: 'fakest value',
      },
    ],
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    people: [
      {
        fakeKey: 'fake value',
      },
      {
        fakestKey: 'fakest value',
      },
    ],
  };

  expect(result).toEqual(expectedResult);
});

it('personDeleted', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/PERSON_DELETED',
  };

  const fakeState = {
    fakeKey: 'fake value',
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    isDeletePersonVisible: false,
    isPersonDeletedVisible: true,
  };

  expect(result).toEqual(expectedResult);
});

it('acknowledgePersonDeleted', () => {
  const { default: target } = require('./');

  const fakeAction = {
    type: 'REMEMBER_THEM/ACKNOWLEDGE_PERSON_DELETED',
  };

  const fakeState = {
    fakeKey: 'fake value',
  };

  const result = target(fakeState, fakeAction);

  const expectedResult = {
    fakeKey: 'fake value',
    isPersonDeletedVisible: false,
  };

  expect(result).toEqual(expectedResult);
});
