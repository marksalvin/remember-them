/* eslint-env node, jest */

it('setCreatePersonVisibleAction', () => {
  const { setCreatePersonVisibleAction: target } = require('./');

  const result = target('fake is create person visible');

  expect(result).toEqual({
    type: 'REMEMBER_THEM/SET_CREATE_PERSON_VISIBLE',
    isCreatePersonVisible: 'fake is create person visible',
  });
});
