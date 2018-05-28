import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

const i18n = R.path(['pages', 'ErrorPage'], require('../../../i18n').default);

const styles = {
  card: {
    height: '100vh',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions:{
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
      width:'43%',
      height:'43%',
      color: 'white',
    },
  },
};

const Error = ({
  classes,
}) => (
  <div className={classes.root}>
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {i18n.title}
        </Typography>
        <Typography component="p">
          <Link to="/">
            <IconButton
              iconstyle={styles.actions.icon}
              style={styles.actions.button}
              id="back-button"
            >
              <HomeIcon />
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  </div>
);

Error.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Error);
