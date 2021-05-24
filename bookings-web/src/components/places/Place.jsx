import React from 'react';
import PropTypes from 'prop-types';
import {
  //   Card,
  //   CardHeader,
  //   CardMedia,
  //   CardContent,
  //   CardActions,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';
import { AttachMoneyRounded } from '@material-ui/icons';

const Place = ({
  name,
  location,
  pricePerNight,
  //   description,
  //   image,
  //   imageThumbnail,
  //   maxGuests,
  //   petFriendly,
  //   pool,
  //   wifi,
}) => {
  return (
    <GridListTileBar
      title={name}
      subtitle={location}
      actionIcon={
        <IconButton aria-label={`info about ${name}`}>
          <AttachMoneyRounded />
          {pricePerNight}
        </IconButton>
      }
    />
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  //   description: PropTypes.string.isRequired,
  //   image: PropTypes.string.isRequired,
  //   imageThumbnail: PropTypes.string.isRequired,
  //   maxGuests: PropTypes.number.isRequired,
  //   petFriendly: PropTypes.bool.isRequired,
  //   pool: PropTypes.bool.isRequired,
  //   wifi: PropTypes.bool.isRequired,
};

export default Place;
