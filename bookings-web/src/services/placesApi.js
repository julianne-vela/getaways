export const getPlaces = async (currentPage, perPage) => {
  const res = await fetch(
    `${process.env.BASE_URL}/places?page=${currentPage}&perPage=${perPage}`
  );
  if (res.ok) {
    const { places, perPage, totalPages, currentPage } = await res.json();
    const placesArray = places.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );

    return { placesArray, perPage, totalPages, currentPage };
  } else {
    throw new Error(await response.json());
  }
};
