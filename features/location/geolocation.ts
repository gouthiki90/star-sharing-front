export const getCurrentLocation = async () => {
  const position = await new Promise<GeolocationPosition>((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject),
  );

  console.log("getCurrentLocation: ", position);

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    time: new Date().toISOString(),
  };
};
