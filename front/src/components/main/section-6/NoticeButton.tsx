"use client";
function NoticeButton() {
  return (
    <div className="my-6">
      <button
        style={{
          background: "#2AA86B",
          margin: "0 auto",
          opacity: "0.8",
          padding: "16px 30px",
          borderRadius: "2rem",
          border: "none",
          color: "white",
          fontSize: "1.2rem",
          zIndex: "-99",
        }}
      >
        <a href="/" className="text-white">
          {" "}
          아키플 비즈니스 문의
        </a>
      </button>
    </div>
  );
}
export default NoticeButton;
