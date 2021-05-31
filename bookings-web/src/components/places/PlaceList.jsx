import React from 'react';
import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import Place from './Place';

const PlaceList = ({ places, loading, minTimeElapsed }) => {
  return (
    <GridList cellHeight={500} cols={3} spacing={4}>
      {(!minTimeElapsed || loading ? Array.from(new Array(25)) : places).map(
        (place, index) => (
          <GridListTile key={index}>
            {place ? (
              <Place {...place} />
            ) : (
              <Skeleton
                variant="rect"
                animation="wave"
                height={300}
                width={400}
              >
                <Place />
              </Skeleton>
            )}
          </GridListTile>
        )
      )}
    </GridList>
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
