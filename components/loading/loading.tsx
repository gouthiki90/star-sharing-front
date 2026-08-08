"use client";

export default function Loading() {
  return (
    <div style={loadingContainerStyle}>
      <div className="spinner">✨</div>

      <h2 style={{ marginTop: "24px", fontSize: "1.5rem" }}>
        당신의 머리 위 밤하늘을 조율하고 있습니다... 🌙
      </h2>
      <p style={{ opacity: 0.7, marginTop: "8px" }}>
        위도와 경도를 기반으로 별들의 위치를 계산하고 있어요.
      </p>

      {/* 단순 CSS 애니메이션 예시용 style 태그 */}
      <style jsx>{`
        .spinner {
          font-size: 3rem;
          animation: pulse 1.5s infinite ease-in-out;
        }
        @keyframes pulse {
          0% {
            transform: scale(0.9);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#0b0d17",
  color: "#ffffff",
};

const loadingContainerStyle: React.CSSProperties = {
  ...containerStyle,
  textAlign: "center",
};
