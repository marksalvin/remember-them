import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import * as R from 'ramda';
import PersonIcon from '@material-ui/icons/Person';
import uuidv1 from 'uuid/v1';
import { Link } from 'react-router-dom';
import CreatePersonModal from '../organisms/CreatePersonModal';
import CreatePersonButton from '../molecules/CreatePersonButton';
import PersonCreatedSnackbar from '../molecules/PersonCreatedSnackbar';
import PersonDeletedSnackbar from '../molecules/PersonDeletedSnackbar';

const i18n = R.path(['pages', 'HomePage'], require('../../../i18n').default);

const styles = theme => ({
  root: {
    display: 'flex',
    // 'overflow-x': 'hidden',
    'overflow-y': 'auto',
    width: '100%',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
  },
  grid: {
    margin: 0,
  },
  link: {
    'text-decoration': 'none',
  },
});

// TODO use a selector to make headline one of the person properties - in future this could be configurable by a setting
const HomePage = ({
  classes,
  isCreatePersonVisible,
  setCreatePersonVisible,
  people,
  createPerson,
  personCreated,
  isPersonCreatedVisible,
  acknowledgePersonCreated,
  undoPersonCreated,
  isPersonDeletedVisible,
  acknowledgePersonDeleted,
}) => (
  <div className={classes.root}>
    <Grid container spacing={8} className={classes.grid}>
      <Grid item xs={12}>
        <div className={classes.demo}>
          <List dense={false}>
            {Array.isArray(people) && people.length > 0 ? people.map((person, index) => (
              <Link to={`/person/${index}`} key={uuidv1()} className={classes.link}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={person.name}
                    secondary={person.home}
                  />
                </ListItem>
              </Link>
            )) : (
              <ListItem>
                <ListItemText
                  primary={i18n.getStarted}
                />
              </ListItem>
            )}
          </List>
        </div>
        <CreatePersonButton setCreatePersonVisible={setCreatePersonVisible} />
        <CreatePersonModal
          isCreatePersonVisible={isCreatePersonVisible}
          setCreatePersonVisible={setCreatePersonVisible}
          createPerson={createPerson}
          personCreated={personCreated}
        />
        <PersonCreatedSnackbar
          isPersonCreatedVisible={isPersonCreatedVisible}
          acknowledgePersonCreated={acknowledgePersonCreated}
          undoPersonCreated={undoPersonCreated}
        />
        <PersonDeletedSnackbar
          isPersonDeletedVisible={isPersonDeletedVisible}
          acknowledgePersonDeleted={acknowledgePersonDeleted}
        />
      </Grid>
    </Grid>
  </div>
);

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isCreatePersonVisible: PropTypes.bool.isRequired,
  setCreatePersonVisible: PropTypes.func.isRequired,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  createPerson: PropTypes.func.isRequired,
  personCreated: PropTypes.func.isRequired,
  isPersonCreatedVisible: PropTypes.bool.isRequired,
  acknowledgePersonCreated: PropTypes.func.isRequired,
  undoPersonCreated: PropTypes.func.isRequired,
  isPersonDeletedVisible: PropTypes.bool.isRequired,
  acknowledgePersonDeleted: PropTypes.func.isRequired,
};

export default withStyles(styles)(HomePage);
