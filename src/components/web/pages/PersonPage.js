import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import DeletePersonModal from '../organisms/DeletePersonModal';
import EditPersonModal from '../organisms/EditPersonModal';
import PersonEditedSnackbar from '../molecules/PersonEditedSnackbar';
// import { push } from 'react-router-redux';

const styles = theme => ({
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
//   root: {
//     display: 'flex',
//     // 'overflow-x': 'hidden',
//     height: '100vh',
//     width: '100vw',
//     'z-index': 2000,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   demo: {
//     backgroundColor: theme.palette.background.paper,
//   },
//   title: {
//     margin: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
//   },
//   grid: {
//     margin: 0,
//   },

//   container: {
//     display: 'flex',
//   },
//   paper: {
//     margin: theme.spacing.unit,
//   },
//   svg: {
//     width: 100,
//     height: 100,
//   },
//   polygon: {
//     fill: theme.palette.common.white,
//     stroke: theme.palette.divider,
//     strokeWidth: 1,
//   },
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
  // undoPersonCreated, // TODO redux time travel for this..?
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
            What's their name?
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].name}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            Where do they live?
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].home}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            What are they into?
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].hobbies}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            What are they doing for work?
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].work}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            Where do they come from?
          </Typography>
          <Typography gutterBottom variant="subheading" component="p">
            {people[index].origin}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h3">
            Anything else?
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
      // undoPersonCreated={undoPersonEdited}
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
  // undoPersonCreated: PropTypes.func.isRequired,
  isDeletePersonVisible: PropTypes.bool.isRequired,
  setDeletePersonVisible: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
  personDeleted: PropTypes.func.isRequired,
};

export default withStyles(styles)(Person);
