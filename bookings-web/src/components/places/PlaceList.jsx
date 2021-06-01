import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Place from './Place';

const PlaceList = ({ loading, loadAnimation, placesArray }) => {
  return (
    <GridList cellHeight={400} cols={3} spacing={2}>
      {(!loadAnimation || loading
        ? Array.from(new Array(25))
        : placesArray
      ).map((place, index) => (
        <GridListTile key={index}>
          {place ? (
            <Place {...place} />
          ) : (
            <Skeleton
              variant="rect"
              animation="wave"
              height={300}
              width={400}
            ></Skeleton>
          )}
        </GridListTile>
      ))}
    </GridList>
  );
};

export default PlaceList;
