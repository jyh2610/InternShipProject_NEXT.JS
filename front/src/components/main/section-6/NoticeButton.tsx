"use client";
function NoticeButton() {
  return (
    <div className="mt-[1.875rem]">
        <button
          style={{
            backgroundColor: "rgba(42, 168, 107, 0.15)",
            backdropFilter: "blur(20px)",
            border: "none",
            borderRadius: "30px",
            color: "#fff",
            fontSize: "1rem",
            padding: "1rem 3rem",
          }}
        >
          <span
            className="text-base"
            style={{
              fontWeight: "500",
            }}
          >아키플 스튜디오 살펴보기</span>
        </button>
    </div>
  );
}
export default NoticeButton;
