import React from 'react';
import { Container, GridList, GridListTile } from '@material-ui/core';
import PropTypes from 'prop-types';
import Place from './Place';

const PlaceList = ({ places }) => {
  return (
    <Container>
      <GridList cellHeight={300} cols={3} spacing={4}>
        {places.map((place) => (
          <GridListTile key={place.id}>
            <img
              src={place.imageThumbnail}
              alt={place.title}
              width="400px"
              height="300px"
            />
            <Place {...place} />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      pricePerNight: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      imageThumbnail: PropTypes.string.isRequired,
      maxGuests: PropTypes.number.isRequired,
      petFriendly: PropTypes.bool.isRequired,
      pool: PropTypes.bool.isRequired,
      wifi: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PlaceList;
