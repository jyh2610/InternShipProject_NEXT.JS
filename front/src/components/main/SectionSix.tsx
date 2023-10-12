"use client";
import Title from "./section-6/Title";
import NoticeButton from "./section-6/NoticeButton";
import Text from "./section-6/Text";

function SectionSix() {
  return (
    <div className="mx-auto mainwidth max-w-top">
      <Title />
      <div className="relative" style={{ height: "52.5rem" }}>
        <div
          style={{
            backgroundImage: "url(https://user-images.githubusercontent.com/144188723/274160742-6dde30b2-7897-4953-9757-dd3fe071504a.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "52.5rem",
            objectFit: "cover",
          }}
        >
          <div
            className="absolute text-center left-[50%] top-[50%]"
            style={{
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "1600px",
            }}
          >
            <Text />
            <NoticeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
