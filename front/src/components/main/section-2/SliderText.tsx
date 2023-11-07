import "./layout.css";

function SliderText({ title, text }: { title: string; text: string }) {
  return (
    <div
      className="p-[2rem] pl-[2rem] md:p-[2rem] slide-text-wrap flex justify-center flex-col"
      style={{
        position: "absolute",
        width: "100%",
        maxWidth: "1300px",
        zIndex: "1",
        color: "white",
        bottom: "10%",
        left: "50%",
        transform: "translatex(-50%)",
      }}
    >
      <div>
        <span className="font-bold block pb-4 text-[1.6rem] md:text-[2rem]">{title}</span>
      </div>
      <div>
        <p className="text-[1rem] md:text-[1.2rem] leading-[1.5rem] md:leading-[1.875rem]" style={{ display: "block", maxWidth: "640px", fontWeight: "300" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default SliderText;
