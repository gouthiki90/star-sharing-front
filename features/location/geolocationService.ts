import { postLocationToServer } from "@/lib/apis/postApis";
import { LocationData } from "./types/location";

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

    // console.log("getLocalTimeStamp: ", localTime);

    return localTime || new Date().toISOString(); // fallback to ISO string if formatting fails
  } catch (error) {
    console.error("Error getting local timestamp:", error);
  }
};

/** api에 맞춰서 보낼값 */
// export const returnResultForServer = (value: LocationData) => {
//   try {
//     const latitude = value.latitude.split(".")[0];
//     const longitude = value.longitude.split(".")[0];

//     return { latitude, longitude, time: value.time };
//   } catch (error) {
//     console.error("Error returning result to server:", error);
//   }
// };

/** geolocation을 통해 좌표 가져옴 */
export const getCurrentLocation = async () => {
  try {
    /** 좌표값 */
    const position = await new Promise<GeolocationPosition>((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject),
    );

    /** 브라우저 로컬시간값 */
    const localTime = getLocalTimeStamp();

    const placeAndLocalTime: LocationData = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      local_time: localTime || new Date().toISOString(),
    };

    console.log("getCurrentLocation: ", placeAndLocalTime);

    /** place and locatime post to server */
    await postLocationToServer(placeAndLocalTime);
  } catch (error) {
    console.error("Error getting current location:", error);
  }
};
