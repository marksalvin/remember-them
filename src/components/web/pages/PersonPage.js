import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import DeletePersonModal from '../organisms/DeletePersonModal';
import EditPersonModal from '../organisms/EditPersonModal';
import PersonEditedSnackbar from '../molecules/PersonEditedSnackbar';

const i18n = R.path(['pages', 'PersonPage'], require('../../../i18n').default);

const styles = () => ({
  card: {
    height: '100vh',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    icon: {
      width: 30,
      height: 30,
      color: 'white',
    },
    button: {
      width: 60,
      height: 60,
    },
    likeIcon: {
      width: '43%',
      height: '43%',
      color: 'white',
    },
  },
  header: {
    overflow: 'hidden',
  },
  headerBack: {
    float: 'left',
  },
  headerActions: {
    float: 'right',
  },
});

const Person = ({
  classes,
  isEditPersonVisible,
  setEditPersonVisible,
  index,
  people,
  editPerson,
  personEdited,
  isPersonEditedVisible,
  acknowledgePersonEdited,
  isDeletePersonVisible,
  setDeletePersonVisible,
  deletePerson,
  personDeleted,
}) => (
  <div className={classes.root}>
    <Card className={classes.card}>
      <div className={classes.header}>
        <div className={classes.headerBack}>
          <Link to="/">
            <IconButton
              iconstyle={classes.actions.icon}
              style={classes.actions.button}
              id="back-button"
            >
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </div>
        <div className={classes.headerActions}>
          <IconButton
            iconstyle={classes.actions.icon}
            style={classes.actions.button}
          >
            <EditIcon onClick={() => setEditPersonVisible(true)} />
          </IconButton>
          <IconButton
            iconstyle={classes.actions.icon}
            style={classes.actions.button}
          >
            <DeleteIcon onClick={() => setDeletePersonVisible(true)} />
          </IconButton>
        </div>
      </div>
      <CardContent>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            {i18n.titleName}
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].name}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            {i18n.titleHome}
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].home}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            {i18n.titleHobbies}
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].hobbies}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            {i18n.titleWork}
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].work}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            {i18n.titleOrigin}
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].origin}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            {i18n.titleAdditional}
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].additional}
          </Typography>
        </div>
      </CardContent>
    </Card>
    <EditPersonModal
      index={index}
      people={people}
      isEditPersonVisible={isEditPersonVisible}
      setEditPersonVisible={setEditPersonVisible}
      editPerson={editPerson}
      personEdited={personEdited}
    />
    <DeletePersonModal
      index={index}
      setDeletePersonVisible={setDeletePersonVisible}
      isDeletePersonVisible={isDeletePersonVisible}
      deletePerson={deletePerson}
      personDeleted={personDeleted}
    />
    <PersonEditedSnackbar
      isPersonEditedVisible={isPersonEditedVisible}
      acknowledgePersonEdited={acknowledgePersonEdited}
    />
  </div>
);

Person.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  isEditPersonVisible: PropTypes.bool.isRequired,
  setEditPersonVisible: PropTypes.func.isRequired,
  editPerson: PropTypes.func.isRequired,
  personEdited: PropTypes.func.isRequired,
  isPersonEditedVisible: PropTypes.bool.isRequired,
  acknowledgePersonEdited: PropTypes.func.isRequired,
  isDeletePersonVisible: PropTypes.bool.isRequired,
  setDeletePersonVisible: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
  personDeleted: PropTypes.func.isRequired,
};

export default withStyles(styles)(Person);
