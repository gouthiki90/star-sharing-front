"use client"; // 로직과 UI를 묶어주는 클라이언트 영역의 시작점(Boundary)

import TestButton from "@/components/button/TestButton";
import { postCurrentLocation } from "@/features/gaze/gazeService";

export default function GazeFetcher() {
  // 컴포넌트 내에서 서비스 로직을 호출하는 핸들러 생성
  const handleLocationClick = () => {
    postCurrentLocation();
  };

  // UI 컴포넌트 반환
  return <TestButton onClick={handleLocationClick} text="내 위치 찾기" />;
}
