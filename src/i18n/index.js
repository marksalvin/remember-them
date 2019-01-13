export default {
  root: {
    appName: 'Remember Them',
  },

  atoms: {

  },

  molecules: {
    PersonCreatedSnackbar: {
      saved: 'Saved!',
      undo: 'Undo',
    },
    PersonDeletedSnackbar: {
      deleted: 'Deleted!',
    },
    PersonEditedSnackbar: {
      saved: 'Edited!',
    },
  },

  organisms: {
    CreatePersonModal: {
      title: 'Save',
      body: 'Enter details below',
      formItemName: 'What\'s their name?',
      formItemHome: 'Where do they live?',
      formItemHobbies: 'What are they into?',
      formItemWork: 'What are they doing for work?',
      formItemOrigin: 'Where are they from?',
      formItemAdditional: 'Anything else?',
      cancelAction: 'Cancel',
      saveAction: 'Save',

      // native
      savedText: 'Saved!',
      savedAknowledge: 'Okay',
    },

    DeletePersonModal: {
      title: 'Delete',
      body: 'Are you sure?',
      cancelAction: 'Cancel',
      deleteAction: 'Delete',

      // native
      deleted: 'Deleted!',
      deletedAcknowledge: 'Okay',
    },

    EditPersonModal: {
      title: 'Edit',
      body: 'Enter updated details below',
      formItemName: 'What\'s their name?',
      formItemHome: 'Where do they live?',
      formItemHobbies: 'What are they into?',
      formItemWork: 'What are they doing for work?',
      formItemOrigin: 'Where are they from?',
      formItemAdditional: 'Anything else?',
      cancelAction: 'Cancel',
      saveAction: 'Save',

      // native
      saved: 'Saved!',
      savedAcknowledge: 'Okay',
    },
  },

  pages: {
    HomePage: {
      getStarted: 'Press the add button to get started',
    },

    ErrorPage: {
      title: 'Oops, something went wrong :(',
      home: 'Home',
    },

    PersonPage: {
      titleName: 'What\'s their name?',
      titleHome: 'Where do they live?',
      titleHobbies: 'What are they into?',
      titleWork: 'What are they doing for work?',
      titleOrigin: 'Where do they come from?',
      titleAdditional: 'Anything else?',
    },
  },

  templates: {

  },
};
