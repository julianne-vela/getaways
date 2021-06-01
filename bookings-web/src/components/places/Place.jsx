import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles,
  Avatar,
  IconButton,
  Typography,
  Icon,
  SvgIcon,
  Button,
} from '@material-ui/core';
import {
  AttachMoneyRounded,
  CalendarTodayRounded,
  InfoRounded,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: 20,
  },
}));

const Place = ({
  name,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  //   description,
  //   maxGuests,
  //   petFriendly,
  //   pool,
  //   wifi,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="destination"
            className={classes.avatar}
            alt={name}
            src={imageThumbnail}
          />
        }
        title={name}
        subheader={location}
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardActions>
        <IconButton aria-label="learn more">
          <InfoRounded />
        </IconButton>
        <IconButton aria-label="create-reservation">
          <CalendarTodayRounded />
        </IconButton>
        <Button
          aria-label="price-per-night"
          variant="text"
          startIcon={<AttachMoneyRounded />}
        >
          <Typography
            gutterBottom
            variant="button"
            color="secondary"
            component="p"
          >
            {pricePerNight} per night
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired,
  //   maxGuests: PropTypes.number.isRequired,
  //   petFriendly: PropTypes.bool.isRequired,
  //   pool: PropTypes.bool.isRequired,
  //   wifi: PropTypes.bool.isRequired,
};

export default Place;
