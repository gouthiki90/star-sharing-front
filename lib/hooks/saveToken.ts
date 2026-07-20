import { Payload } from "./types/payload";

/** 세션 스토리지에 토큰 저장 */
export const saveTokenToSession = async (response: Payload) => {
  try {
    if (!response.success) return console.log("ERROR:::FAILED FROM BACK");
    if (!response.userToken)
      return console.log("ERROR:::FAILED TO BRING TOKEN FROM BACK");

    if (response.userToken) {
      sessionStorage.setItem("userToken", response?.userToken);
      console.log("토큰 저장 완료", response?.userToken);
    }
  } catch (error) {
    console.log(error);
  }
};
