export const getLocalTimeStamp = () => {
  /** 호출 시 얻은 date값 */
  const date = new Date();

  try {
    // undifined를 사용하면 브라우저의 로컬 타임으로 포맷됨
    const formatter = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const localTime = formatter.format(date);

    console.log("getLocalTimeStamp: ", localTime);

    return localTime;
  } catch (error) {
    console.error("Error getting local timestamp:", error);
  }
};

/** geolocation을 통해 좌표 가져옴 */
export const getCurrentLocation = async () => {
  const position = await new Promise<GeolocationPosition>((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject),
  );

  const localTime = getLocalTimeStamp();
  console.log("getCurrentLocation: ", position);

  const result = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    time: localTime,
  };

  console.log("getCurrentLocation result: ", result);

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    time: localTime,
  };
};
