import AxiosInstance from "../index";
import { LocationData } from "@/features/gaze/types/location";

/** location 데이터를 서버에 POST */
export function postLocationForGaze(locationData: LocationData) {
  return AxiosInstance.post("/gazes", locationData).then(
    (response) => response.data,
  );
}
