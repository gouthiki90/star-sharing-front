import { LocationData } from "@/features/location/types/location";
import AxiosInstance from "../index";

/** location 데이터를 서버에 POST */
export function postLocationToServer(locationData: LocationData) {
  return AxiosInstance.post("/location", locationData).then(
    (response) => response.data,
  );
}
