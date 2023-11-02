"use client";

import { useRouter } from "next/navigation";

function NoticeButton() {
  const router = useRouter();
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
        onClick={() => {
          router.push("/download");
        }}
      >
        <span
          className="text-base"
          style={{
            fontWeight: "500",
          }}
        >
          아키플 스튜디오 다운로드
        </span>
      </button>
    </div>
  );
}
export default NoticeButton;
